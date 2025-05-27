// src/modules/tenant/tenant.module.ts
import { Module } from '@nestjs/common';
import { PrismaTenantRepository } from 'src/infra/database/prisma/repositories/prisma-tenant.repository';
import { CreateTenant } from 'src/application/tenant/use-cases/create-tenant';
import { TenantController } from 'src/http/controllers/tenant/tenant.controller';

@Module({
  controllers: [TenantController],
  providers: [PrismaTenantRepository, CreateTenant],
})
export class TenantModule {}
