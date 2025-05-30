import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { FinancialService } from '../../application/financial.service';
import { CreateFinancialRecordDto } from '../dtos/create-financial-record.dto';
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
@Controller('financial')
export class FinancialController {
  constructor(private service: FinancialService) {}

  @Post()
  createRecord(@Body() dto: CreateFinancialRecordDto) {
    return this.service.createRecord(dto);
  }

  @Get()
  findAll() {
    return this.service.findAllRecords();
  }

  @Get('history/:recordId')
  getHistory(@Param('recordId') recordId: string) {
    return this.service.getHistory(recordId);
  }
}
