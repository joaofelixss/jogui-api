import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class ActivityLogRepository {
  constructor(private prisma: PrismaService) {}

  create(data: { userId: string; tenantId: string; action: string }) {
    return this.prisma.activityLog.create({ data });
  }

  findAll(userId: string) {
    return this.prisma.activityLog.findMany({
      where: { userId },
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
