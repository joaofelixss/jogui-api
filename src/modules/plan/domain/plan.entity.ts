// src/modules/plan/domain/plan.entity.ts
import { Tenant } from 'src/domain/tenant/tenant.entity';
export class Plan {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly tenants?: Tenant[], // Relação com tenants
  ) {}
}
