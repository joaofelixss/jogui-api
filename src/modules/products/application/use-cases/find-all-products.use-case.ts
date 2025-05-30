// src/modules/products/application/use-cases/find-all-products.use-case.ts
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infra/prisma/product.repository';

@Injectable()
export class FindAllProductsUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(tenantId: string) {
    return this.productRepository.findAll(tenantId);
  }
}
