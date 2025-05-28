import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateTaskDto } from '../http/dtos/create-task.dto';
import { UpdateTaskStatusDto } from '../http/dtos/update-task-status.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTaskDto) {
    return this.prisma.task.create({ data: dto });
  }

  findAllByTenant(tenantId: string) {
    return this.prisma.task.findMany({
      where: { tenantId },
      include: {
        assignedTo: true,
        createdBy: true,
      },
    });
  }

  updateStatus(id: string, dto: UpdateTaskStatusDto) {
    return this.prisma.task.update({
      where: { id },
      data: { status: dto.status },
    });
  }

  remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
