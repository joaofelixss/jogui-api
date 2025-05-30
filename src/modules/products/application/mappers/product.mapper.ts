import { Product } from '../../domain/product.entity';
import { ProductVariant } from '../../domain/product-variant.entity';
import { VariantAttribute } from '../../domain/variant-attribute.entity';
import { CreateProductDto } from '../../http/dtos/create-product.dto';

export class ProductMapper {
  static toDomainFromDto(dto: CreateProductDto, tenantId: string): Product {
    const variants: ProductVariant[] = dto.variants.map((variantDto) => {
      const attributes = variantDto.attributes.map((attr) => {
        return new VariantAttribute(
          crypto.randomUUID(),
          attr.attributeId,
          attr.attributeValueId,
        );
      });

      const variant = new ProductVariant(
        crypto.randomUUID(),
        variantDto.name,
        variantDto.price,
        variantDto.stock,
        variantDto.sku,
        tenantId,
      );

      attributes.forEach((attr) => variant.addAttribute(attr));

      return variant;
    });

    const product = new Product(
      crypto.randomUUID(),
      dto.name,
      dto.description ?? null,
      dto.price,
      dto.image ?? null,
      tenantId,
      dto.categoryId,
      variants, // ✅ Passando as variantes no construtor
    );

    return product;
  }
}
