// src/http/controllers/tenant.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateTenant } from 'src/application/tenant/use-cases/create-tenant';
import { CreateTenantDto } from '../dtos/create-tenant.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { SuperAdminGuard } from 'src/core/guards/super-admin.guard';

@UseGuards(JwtAuthGuard, SuperAdminGuard)
@Controller('admin/tenants')
export class TenantController {
  constructor(private readonly createTenant: CreateTenant) {}

  @Post()
  async create(@Body() body: CreateTenantDto) {
    const tenant = await this.createTenant.execute({
      name: body.name,
      slug: body.slug,
      planId: body.planId,
    });

    return {
      tenant,
    };
  }
}
