import { Injectable } from '@nestjs/common';
import { PlanRepository } from '../../domain/interface/plan.repository';
import { Plan } from 'src/modules/plan/domain/plan.entity';

@Injectable()
export class ListPlansUseCase {
  constructor(private readonly planRepository: PlanRepository) {}

  async execute(): Promise<Plan[]> {
    return this.planRepository.findAllWithTenants();
  }
}
