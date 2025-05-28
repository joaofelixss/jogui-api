import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Product } from '../../domain/product.entity';
import { UpdateProductDto } from '../../http/dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(produto: Product) {
    return this.prisma.product.create({
      data: {
        id: produto.id,
        name: produto.name,
        description: produto.description,
        price: produto.price,
        image: produto.image,
        tenantId: produto.tenantId,
        categoryId: produto.categoryId,
        createdAt: produto.createdAt,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.product.findMany({
      where: { tenantId },
      include: { category: true },
    });
  }

  async findById(id: string, tenantId: string) {
    return this.prisma.product.findFirst({
      where: { id, tenantId },
    });
  }

  async update(id: string, tenantId: string, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: string, tenantId: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
