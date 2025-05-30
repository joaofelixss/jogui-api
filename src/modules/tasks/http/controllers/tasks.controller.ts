import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from '../../application/tasks.service';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskStatusDto } from '../dtos/update-task-status.dto';
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
@Controller('tasks')
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  @Get(':tenantId')
  findAll(@Param('tenantId') tenantId: string) {
    return this.service.findAllByTenant(tenantId);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateTaskStatusDto) {
    return this.service.updateStatus(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
