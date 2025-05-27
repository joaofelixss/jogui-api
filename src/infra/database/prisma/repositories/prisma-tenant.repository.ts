// src/infra/database/prisma/repositories/prisma-tenant.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Tenant } from 'src/domain/tenant/tenant.entity';

@Injectable()
export class PrismaTenantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(tenant: Tenant): Promise<void> {
    await this.prisma.tenant.create({
      data: {
        id: tenant.id,
        name: tenant.name,
        createdAt: tenant.createdAt,
        plan: {
          connect: { id: tenant.planId },
        },
      },
    });
  }
}
