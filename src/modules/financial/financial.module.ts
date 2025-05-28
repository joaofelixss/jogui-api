import { Module } from '@nestjs/common';
import { FinancialController } from './http/controllers/financial.controller';
import { FinancialService } from './application/financial.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [FinancialController],
  providers: [FinancialService, PrismaService],
})
export class FinancialModule {}
