import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateOrderDto } from '../http/dtos/create-order.dto';
import { UpdateOrderDto } from '../http/dtos/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        clientId: dto.clientId,
        status: dto.status,
        total: dto.total,
        items: {
          create: dto.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { items: true },
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      where: { isDeleted: false },
      include: { client: true, items: true },
    });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { client: true, items: true },
    });

    if (!order) throw new NotFoundException('Pedido não encontrado');
    return order;
  }

  update(id: string, dto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: {
        status: dto.status,
        total: dto.total,
      },
    });
  }

  softDelete(id: string) {
    return this.prisma.order.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}
