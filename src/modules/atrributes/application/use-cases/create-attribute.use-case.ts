import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CreateAttributeUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(name: string, tenantId: string) {
    return this.prisma.attribute.create({
      data: { name, tenantId },
    });
  }
}
