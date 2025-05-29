import { Controller, Post, Patch, Get, Body, Param } from '@nestjs/common';
import { StockService } from '../../application/stock.service';
import { CreateStockDto } from '../dtos/create-stock.dto';
import { UpdateStockDto } from '../dtos/update-stock.dto';

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
