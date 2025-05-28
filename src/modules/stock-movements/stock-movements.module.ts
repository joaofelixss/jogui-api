import { Module } from '@nestjs/common';
import { StockMovementsService } from './application/stock-movements.service';
import { StockMovementsController } from './http/controllers/stock-movements.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [StockMovementsController],
  providers: [StockMovementsService, PrismaService],
})
export class StockMovementsModule {}
