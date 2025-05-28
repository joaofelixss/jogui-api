// src/domain/tenant/tenant.entity.ts
export class Tenant {
  constructor(
    public readonly id: string,
    public name: string,
    public slug: string,
    public planId: string,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
