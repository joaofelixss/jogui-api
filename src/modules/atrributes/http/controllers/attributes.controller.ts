import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateAttributeDto } from '../dtos/create-attribute.dto';
import { CreateAttributeValueDto } from '../dtos/create-attribute-value.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CreateAttributeUseCase } from '../../application/use-cases/create-attribute.use-case';
import { CreateAttributeValueUseCase } from '../../application/use-cases/create-attribute-value.use-case';

@UseGuards(JwtAuthGuard)
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
