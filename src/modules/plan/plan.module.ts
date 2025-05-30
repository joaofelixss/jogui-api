import { Module } from '@nestjs/common';
import { PlanController } from './http/controllers/plan.controller';
import { ListPlansUseCase } from './application/use-cases/list-plans.use-case';
import { CreatePlanUseCase } from './application/use-cases/create-plan.use-case';
import { PlanRepository } from './domain/interface/plan.repository';
import { PrismaPlanRepository } from './infra/prisma/plan.repository';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [PlanController],
  providers: [
    PrismaService,
    {
      provide: PlanRepository,
      useClass: PrismaPlanRepository,
    },
    ListPlansUseCase,
    CreatePlanUseCase,
  ],
})
export class PlanModule {}
