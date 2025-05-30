import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateAttributeDto } from '../dtos/create-attribute.dto';
import { CreateAttributeValueDto } from '../dtos/create-attribute-value.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CreateAttributeUseCase } from '../../application/use-cases/create-attribute.use-case';
import { CreateAttributeValueUseCase } from '../../application/use-cases/create-attribute-value.use-case';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('attributes')
export class AttributesController {
  constructor(
    private readonly createAttribute: CreateAttributeUseCase,
    private readonly createAttributeValue: CreateAttributeValueUseCase,
  ) {}

  @Post()
  async create(@Body() dto: CreateAttributeDto) {
    return this.createAttribute.execute(dto.name, dto.tenantId);
  }

  @Post('value')
  async createValue(@Body() dto: CreateAttributeValueDto) {
    return this.createAttributeValue.execute(dto.value, dto.attributeId);
  }
}
