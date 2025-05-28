// src/http/controllers/tenant/tenant.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateTenant } from 'src/application/tenant/use-cases/create-tenant';
import { CreateTenantDto } from './dto/create-tenant.dto';

@Controller('tenants')
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
