import { Module } from '@nestjs/common';
import { AutoNotificationController } from './http/controllers/auto-notification.controller';
import { AutoNotificationService } from './application/auto-notification.service';

@Module({
  controllers: [AutoNotificationController],
  providers: [AutoNotificationService],
})
export class AutoNotificationModule {}
