// src/modules/products/http/controllers/products.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { FindAllProductsUseCase } from '../../application/use-cases/find-all-products.use-case';
import { FindOneProductUseCase } from '../../application/use-cases/find-one-product.use-case';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly findAllProductsUseCase: FindAllProductsUseCase,
    private readonly findOneProductUseCase: FindOneProductUseCase,
  ) {}

  @Get(':tenantId')
  async findAll(@Param('tenantId') tenantId: string) {
    return this.findAllProductsUseCase.execute(tenantId);
  }

  @Get(':tenantId/product/:id')
  async findOne(@Param('tenantId') tenantId: string, @Param('id') id: string) {
    return this.findOneProductUseCase.execute(tenantId, id);
  }
}
