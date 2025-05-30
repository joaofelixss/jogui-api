import { Injectable } from '@nestjs/common';
import { ProductMapper } from '../mappers/product.mapper';
import { ProductRepository } from '../../infra/prisma/product.repository';
import { CreateProductDto } from '../../http/dtos/create-product.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(tenantId: string, dto: CreateProductDto) {
    const product = ProductMapper.toDomainFromDto(dto, tenantId);
    return this.productRepository.create(product);
  }
}
