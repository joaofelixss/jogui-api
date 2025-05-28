import { Module } from '@nestjs/common';
import { TaxRuleController } from './http/controllers/tax-rule.controller';
import { TaxRuleService } from './application/tax-rule.service';
import { TaxRuleRepository } from './infra/database/prisma/repositories/tax-rule.repository';

@Module({
  controllers: [TaxRuleController],
  providers: [TaxRuleService, TaxRuleRepository],
})
export class TasxRuleModule {}
