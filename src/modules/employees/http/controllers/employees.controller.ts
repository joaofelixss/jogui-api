// http/employees.controller.ts
import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Delete,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { EmployeesService } from '../../application/employees.service';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { UpdateEmployeeDto } from '../dtos/update-employee.dto';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('employees')
export class EmployeesController {
  constructor(private service: EmployeesService) {}

  @Post()
  create(
    @Headers('x-tenant-id') tenantId: string,
    @Body() dto: CreateEmployeeDto,
  ) {
    return this.service.create(tenantId, dto);
  }

  @Get()
  findAll(@Headers('x-tenant-id') tenantId: string) {
    return this.service.findAll(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.service.update(id, dto);
  }

  @Patch(':id/toggle')
  toggleStatus(@Param('id') id: string) {
    return this.service.toggleStatus(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
