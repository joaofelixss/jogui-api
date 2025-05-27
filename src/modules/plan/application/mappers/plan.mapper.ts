import { Plan } from '../../domain/plan.entity';
import { Tenant } from 'src/domain/tenant/tenant.entity';

export class PrismaPlanMapper {
  static toDomain(raw: any): Plan {
    return new Plan(
      raw.id,
      raw.name,
      raw.tenants?.map(
        (tenant: any) =>
          new Tenant(
            tenant.id,
            tenant.name,
            tenant.slug,
            tenant.planId,
            tenant.createdAt,
            tenant.updatedAt,
          ),
      ),
    );
  }
  static toPrisma(plan: Plan) {
    return {
      id: plan.id,
      name: plan.name,
      tenants: plan.tenants?.map((tenant) => ({
        id: tenant.id,
        // adicione outras propriedades que forem necessárias
      })),
    };
  }
}
