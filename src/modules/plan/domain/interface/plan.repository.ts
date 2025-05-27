import { Plan } from 'src/modules/plan/domain/plan.entity';

export abstract class PlanRepository {
  abstract findById(id: string): Promise<Plan | null>;
  abstract findAllWithTenants(): Promise<Plan[]>;
  abstract create(plan: Plan): Promise<Plan>;
}
