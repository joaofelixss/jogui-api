import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../infra/prisma/product.repository';
import { UpdateProductDto } from '../../http/dtos/create-product.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(tenantId: string, id: string, dto: UpdateProductDto) {
    const existing = await this.productRepository.findById(id, tenantId);
    if (!existing) throw new NotFoundException('Produto não encontrado');

    return this.productRepository.update(id, tenantId, dto);
  }
}
