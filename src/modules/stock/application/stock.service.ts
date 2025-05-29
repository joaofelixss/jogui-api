import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class StockService {
  constructor(private readonly prisma: PrismaService) {}

  async create(productId: string, quantity: number) {
    return this.prisma.stock.create({
      data: {
        productId,
        quantity,
      },
    });
  }

  async update(productId: string, quantity: number) {
    const stock = await this.prisma.stock.findUnique({ where: { productId } });
    if (!stock) throw new NotFoundException('Estoque não encontrado');

    return this.prisma.stock.update({
      where: { productId },
      data: { quantity },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.stock.findUnique({
      where: { productId },
    });
  }
}
