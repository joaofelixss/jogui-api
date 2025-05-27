import { Controller, Get } from '@nestjs/common';
import { ListPlansUseCase } from '../../use-cases/list-plans.use-case';

@Controller('plans')
export class PlanController {
  constructor(private readonly listPlans: ListPlansUseCase) {}

  @Get()
  async findAll() {
    const plans = await this.listPlans.execute();

    return plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      tenants: plan.tenants?.map((t) => ({
        id: t.id,
        name: t.name,
        slug: t.slug,
      })),
    }));
  }
}
