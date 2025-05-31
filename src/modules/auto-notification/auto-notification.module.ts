// src/modules/auto-notifications/auto-notification.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AutoNotificationController } from './http/controllers/auto-notification.controller';
import { AutoNotificationRepository } from './infra/prisma/auto-notification.repository';
import { CreateAutoNotificationUseCase } from './application/use-cases/create-auto-notification.use-case';
import { FindAllAutoNotificationsUseCase } from './application/use-cases/find-all-auto-notifications.use-case';
import { FindOneAutoNotificationUseCase } from './application/use-cases/find-one-auto-notification.use-case';
import { UpdateAutoNotificationUseCase } from './application/use-cases/update-auto-notification.use-case';
import { DeleteAutoNotificationUseCase } from './application/use-cases/delete-auto-notification.use-case';

@Module({
  controllers: [AutoNotificationController],
  providers: [
    PrismaService,
    AutoNotificationRepository,
    CreateAutoNotificationUseCase,
    FindAllAutoNotificationsUseCase,
    FindOneAutoNotificationUseCase,
    UpdateAutoNotificationUseCase,
    DeleteAutoNotificationUseCase,
  ],
})
export class AutoNotificationModule {}
