// src/modules/products/application/use-cases/update-product.use-case.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from '../../http/dtos/update-product.dto';
import { ProductRepository } from '../../infra/prisma/product.repository';

@Injectable()
export class UpdateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(tenantId: string, id: string, dto: UpdateProductDto) {
    const existing = await this.productRepository.findOne(tenantId, id);

    if (!existing) {
      throw new NotFoundException('Produto não encontrado');
    }

    return this.productRepository.update(id, dto);
  }
}
