import { Module } from '@nestjs/common';
import { StockService } from './application/stock.service';
import { StockController } from './http/controllers/stock.controller';

@Module({
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
