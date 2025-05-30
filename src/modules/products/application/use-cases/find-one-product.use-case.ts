// src/modules/products/application/use-cases/find-one-product.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../infra/prisma/product.repository';

@Injectable()
export class FindOneProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(tenantId: string, productId: string) {
    const product = await this.productRepository.findOne(tenantId, productId);

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }
}
