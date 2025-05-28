import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { TaxRuleService } from '../../application/tax-rule.service';
import { CreateTaxRuleDto } from '../dtos/create-tax-rule.dto';

@Controller('tax-rules')
export class TaxRuleController {
  constructor(private service: TaxRuleService) {}

  @Post()
  create(@Body() dto: CreateTaxRuleDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('tenant/:tenantId')
  findByTenant(@Param('tenantId') tenantId: string) {
    return this.service.findByTenant(tenantId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
