import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class CreateAttributeValueUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(value: string, attributeId: string) {
    return this.prisma.attributeValue.create({
      data: { value, attributeId },
    });
  }
}
