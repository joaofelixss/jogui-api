import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { PlanRepository } from '../../domain/interface/plan.repository';
import { PrismaPlanMapper } from '../../application/mappers/plan.mapper';
import { Plan } from '../../domain/plan.entity';

@Injectable()
export class PrismaPlanRepository implements PlanRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Plan | null> {
    const plan = await this.prisma.plan.findUnique({
      where: { id },
      include: { tenants: true },
    });

    return plan ? PrismaPlanMapper.toDomain(plan) : null;
  }

  async findAllWithTenants(): Promise<Plan[]> {
    const plans = await this.prisma.plan.findMany({
      include: { tenants: true },
    });

    return plans.map(PrismaPlanMapper.toDomain);
  }
}
