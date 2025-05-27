// src/application/tenant/use-cases/create-tenant.ts
import { Injectable } from '@nestjs/common';
import { PrismaTenantRepository } from 'src/infra/database/prisma/repositories/prisma-tenant.repository';
import { Tenant } from 'src/domain/tenant/tenant.entity';

interface CreateTenantInput {
  name: string;
  slug: string;
}

@Injectable()
export class CreateTenant {
  constructor(private readonly tenantRepository: PrismaTenantRepository) {}

  async execute(input: CreateTenantInput): Promise<Tenant> {
    const { name, slug } = input;

    const tenant = new Tenant(
      crypto.randomUUID(),
      name,
      slug,
      new Date(),
      new Date(),
    );

    await this.tenantRepository.create(tenant);
    return tenant;
  }
}
