import {
  Controller,
  Post,
  Patch,
  Get,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { StockService } from '../../application/stock.service';
import { CreateStockDto } from '../dtos/create-stock.dto';
import { UpdateStockDto } from '../dtos/update-stock.dto';
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
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  create(@Body() body: CreateStockDto) {
    return this.stockService.create(body.productId, body.quantity);
  }

  @Patch(':productId')
  update(@Param('productId') productId: string, @Body() body: UpdateStockDto) {
    return this.stockService.update(productId, body.quantity);
  }

  @Get(':productId')
  get(@Param('productId') productId: string) {
    return this.stockService.findByProduct(productId);
  }
}
