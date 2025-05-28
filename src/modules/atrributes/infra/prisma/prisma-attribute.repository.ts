// src/modules/attributes/infra/prisma/prisma-attribute.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AttributeRepository } from '../../domain/repositories/attribute.repository';

@Injectable()
export class PrismaAttributeRepository implements AttributeRepository {
  constructor(private prisma: PrismaService) {}

  create(data: { name: string; tenantId: string }) {
    return this.prisma.attribute.create({ data });
  }
}
