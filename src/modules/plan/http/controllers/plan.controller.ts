// src/modules/plan/http/controllers/plan.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ListPlansUseCase } from '../../application/use-cases/list-plans.use-case';
import { CreatePlanUseCase } from '../../application/use-cases/create-plan.use-case';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { SuperAdminGuard } from 'src/core/guards/super-admin.guard';

@UseGuards(JwtAuthGuard, SuperAdminGuard)
@Controller('admin/plans')
export class PlanController {
  constructor(
    private readonly listPlans: ListPlansUseCase,
    private readonly createPlan: CreatePlanUseCase,
  ) {}

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

  @Post()
  async create(@Body() body: { name: string }) {
    const plan = await this.createPlan.execute(body.name);
    return {
      id: plan.id,
      name: plan.name,
    };
  }
}
