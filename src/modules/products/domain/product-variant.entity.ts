import { VariantAttribute } from './variant-attribute.entity';

export class ProductVariant {
  constructor(
    public readonly id: string,
    public name: string,
    public price: number,
    public stock: number,
    public sku: string,
    public tenantId: string,
    public readonly attributes: VariantAttribute[] = [],
  ) {}

  addAttribute(attr: VariantAttribute) {
    this.attributes.push(attr);
  }
}
