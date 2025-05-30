import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { StockMovementsService } from '../../application/stock-movements.service';
import { CreateStockMovementDto } from '../dtos/create-stock-movement.dto';
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
@Controller('stock-movements')
export class StockMovementsController {
  constructor(private service: StockMovementsService) {}

  @Post()
  create(@Body() dto: CreateStockMovementDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
