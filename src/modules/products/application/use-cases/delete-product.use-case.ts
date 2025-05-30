// src/modules/products/application/use-cases/delete-product.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../infra/prisma/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(tenantId: string, id: string) {
    const existing = await this.productRepository.findOne(tenantId, id);

    if (!existing) {
      throw new NotFoundException('Produto não encontrado');
    }

    return this.productRepository.remove(id);
  }
}
