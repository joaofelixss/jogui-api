import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infra/prisma/product.repository';
import { CreateProductDto } from '../../http/dtos/create-product.dto';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable()
export class CreateProductUseCase {
  constructor(private produtoRepository: ProductRepository) {}

  async execute(tenantId: string, dto: CreateProductDto) {
    const produto = ProductMapper.toDomainFromDto(dto, tenantId);
    return this.produtoRepository.create(produto);
  }
}
