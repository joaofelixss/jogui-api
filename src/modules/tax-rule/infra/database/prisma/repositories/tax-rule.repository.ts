import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateTaxRuleDto } from 'src/modules/tax-rule/http/dtos/create-tax-rule.dto';

@Injectable()
export class TaxRuleRepository {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTaxRuleDto) {
    return this.prisma.taxRule.create({ data });
  }

  findAll() {
    return this.prisma.taxRule.findMany();
  }

  findByTenant(tenantId: string) {
    return this.prisma.taxRule.findMany({ where: { tenantId } });
  }

  remove(id: string) {
    return this.prisma.taxRule.delete({ where: { id } });
  }
}
