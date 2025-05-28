import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateActivityLogDto } from '../http/dtos/create-activity-log.dto';

@Injectable()
export class ActivityLogService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateActivityLogDto) {
    return this.prisma.activityLog.create({
      data: {
        userId: dto.userId,
        action: dto.action,
      },
    });
  }

  findAll() {
    return this.prisma.activityLog.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findByUser(userId: string) {
    return this.prisma.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
