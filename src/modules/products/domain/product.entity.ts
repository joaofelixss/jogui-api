// src/modules/products/domain/product.entity.ts

import { ProductVariant } from './product-variant.entity';

export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string | null,
    public price: number,
    public image: string | null,
    public tenantId: string,
    public categoryId: string,
    public readonly variants: ProductVariant[] = [],
    public readonly createdAt: Date = new Date(),
  ) {
    // Regra 1: Preço não pode ser negativo
    if (price < 0) {
      throw new Error('O preço do produto não pode ser negativo.');
    }

    // Regra 2: Nome com no mínimo 3 caracteres
    if (!name || name.trim().length < 3) {
      throw new Error('O nome do produto deve ter pelo menos 3 caracteres.');
    }

    // Regra 3: Produto deve ter ao menos uma variação
    if (!variants || variants.length === 0) {
      throw new Error('O produto deve conter ao menos uma variação.');
    }
  }

  addVariant(variant: ProductVariant) {
    this.variants.push(variant);
  }
}
