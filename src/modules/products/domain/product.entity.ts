export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string | null,
    public price: number,
    public image: string | null,
    public tenantId: string,
    public categoryId: string,
    public createdAt: Date,
  ) {}
}
