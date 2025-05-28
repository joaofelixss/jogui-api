// src/modules/products/domain/product.entity.ts

export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string | null,
    public price: number,
    public image: string | null,
    public readonly tenantId: string,
    public categoryId: string,
    public readonly createdAt: Date,
  ) {}
}
