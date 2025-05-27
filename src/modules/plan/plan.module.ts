import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PrismaPlanRepository } from './infra/prisma/plan.repository';
import { PlanRepository } from './domain/interface/plan.repository';
import { ListPlansUseCase } from './use-cases/list-plans.use-case';
import { PlanController } from './http/controllers/plan.controller';

@Module({
  controllers: [PlanController],
  providers: [
    PrismaService,
    ListPlansUseCase,
    {
      provide: PlanRepository,
      useClass: PrismaPlanRepository,
    },
  ],
})
export class PlanModule {}
