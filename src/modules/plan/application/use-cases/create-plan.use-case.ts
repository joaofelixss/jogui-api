import { Injectable } from '@nestjs/common';
import { PlanRepository } from '../../domain/interface/plan.repository';
import { Plan } from '../../domain/plan.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreatePlanUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(name: string): Promise<Plan> {
    const plan = new Plan(uuidv4(), name, []);

    return await this.planRepository.create(plan);
  }
}
