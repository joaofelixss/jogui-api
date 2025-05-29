import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';

export type AuthUser = {
  userId: string;
  email: string;
  role: Role;
  tenantId: string;
  plan: Plan;
  permissions: string[];
};
