// src/domain/tenant/tenant.entity.ts
export class Tenant {
  constructor(
    public readonly id: string,
    public name: string,
    public slug: string | null,
    public planId: string,
    public plan?: any,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {}
}
