// src/modules/attributes/domain/repositories/attribute.repository.ts
export abstract class AttributeRepository {
  abstract create(data: { name: string; tenantId: string }): Promise<any>;
}
