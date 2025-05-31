import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CategoriesRepository {
  constructor(private prisma: PrismaService) {}

  create(tenantId: string, name: string) {
    return this.prisma.category.create({
      data: {
        name,
        tenantId,
      },
    });
  }

  findAll(tenantId: string) {
    return this.prisma.category.findMany({
      where: { tenantId },
    });
  }

  findById(tenantId: string, id: string) {
    return this.prisma.category.findFirst({
      where: { id, tenantId },
    });
  }

  update(id: string, data: { name: string }) {
    return this.prisma.category.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
