import { Product } from '../../domain/product.entity';
import { CreateProductDto } from '../../http/dtos/create-product.dto';

export class ProductMapper {
  static toDomainFromDto(dto: CreateProductDto, tenantId: string): Product {
    return new Product(
      crypto.randomUUID(),
      dto.name,
      dto.description ?? null,
      dto.price,
      dto.image ?? null,
      tenantId,
      dto.categoryId,
      new Date(),
    );
  }
}
