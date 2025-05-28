import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateInternalFeedDto } from '../http/dtos/create-internal-feed.dto';
import { UpdateInternalFeedDto } from '../http/dtos/update-internal-feed.dto';

@Injectable()
export class InternalFeedService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateInternalFeedDto) {
    return this.prisma.internalFeed.create({ data: dto });
  }

  findAll() {
    return this.prisma.internalFeed.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.internalFeed.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateInternalFeedDto) {
    return this.prisma.internalFeed.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.internalFeed.delete({ where: { id } });
  }
}
