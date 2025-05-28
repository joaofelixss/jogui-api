import { Controller, Post, Get, Body } from '@nestjs/common';
import { StockMovementsService } from '../../application/stock-movements.service';
import { CreateStockMovementDto } from '../dtos/create-stock-movement.dto';

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
