import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateStockMovementDto } from '../http/dtos/create-stock-movement.dto';

@Injectable()
export class StockMovementsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateStockMovementDto) {
    return this.prisma.stockMovement.create({
      data: {
        productId: dto.productId,
        createdById: dto.createdById,
        quantity: dto.quantity,
        type: dto.type,
        reason: dto.reason,
      },
    });
  }

  findAll() {
    return this.prisma.stockMovement.findMany({
      include: {
        product: true,
        createdBy: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
