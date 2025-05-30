// src/modules/addresses/domain/address.entity.ts
export class Address {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly zip: string,
    public readonly city: string,
    public readonly state: string,
    public readonly street: string,
    public readonly number: string,
    public readonly complement?: string,
  ) {}
}
