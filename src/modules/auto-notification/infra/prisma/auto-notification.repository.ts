// src/modules/auto-notifications/infra/prisma/auto-notification.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAutoNotificationDto } from '../../http/dtos/create-auto-notification.dto';
import { UpdateAutoNotificationDto } from '../../http/dtos/update-auto-notification.dto';

@Injectable()
export class AutoNotificationRepository {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAutoNotificationDto) {
    return this.prisma.autoNotification.create({ data: dto });
  }

  findAll() {
    return this.prisma.autoNotification.findMany();
  }

  findOne(id: string) {
    return this.prisma.autoNotification.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateAutoNotificationDto) {
    return this.prisma.autoNotification.update({ where: { id }, data: dto });
  }

  delete(id: string) {
    return this.prisma.autoNotification.delete({ where: { id } });
  }
}
