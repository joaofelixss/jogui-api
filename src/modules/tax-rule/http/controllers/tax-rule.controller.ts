import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaxRuleService } from '../../application/tax-rule.service';
import { CreateTaxRuleDto } from '../dtos/create-tax-rule.dto';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
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
