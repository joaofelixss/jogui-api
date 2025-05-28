import { Injectable } from '@nestjs/common';
import { TaxRuleRepository } from '../infra/database/prisma/repositories/tax-rule.repository';
import { CreateTaxRuleDto } from '../http/dtos/create-tax-rule.dto';

@Injectable()
export class TaxRuleService {
  constructor(private repo: TaxRuleRepository) {}

  create(data: CreateTaxRuleDto) {
    return this.repo.create(data);
  }

  findAll() {
    return this.repo.findAll();
  }

  findByTenant(tenantId: string) {
    return this.repo.findByTenant(tenantId);
  }

  remove(id: string) {
    return this.repo.remove(id);
  }
}
