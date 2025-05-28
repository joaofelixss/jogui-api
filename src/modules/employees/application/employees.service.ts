// src/modules/employees/application/employees.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateEmployeeDto } from '../http/dtos/create-employee.dto';
import { UpdateEmployeeDto } from '../http/dtos/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, dto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: {
        name: dto.name,
        email: dto.email,
        position: dto.position,
        salary: dto.salary,
        role: dto.role,
        tenantId,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.employee.findMany({
      where: { tenantId },
    });
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({ where: { id } });
    if (!employee) throw new NotFoundException('Funcionário não encontrado');
    return employee;
  }

  async update(id: string, dto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: {
        name: dto.name,
        email: dto.email,
        position: dto.position,
        salary: dto.salary,
        role: dto.role,
      },
    });
  }

  async toggleStatus(id: string) {
    const employee = await this.findOne(id);
    return this.prisma.employee.update({
      where: { id },
      data: {
        isActive: !employee.isActive,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
