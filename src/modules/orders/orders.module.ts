import { Module } from '@nestjs/common';
import { OrdersService } from './application/orders.service';
import { OrdersController } from './http/controllers/orders.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
