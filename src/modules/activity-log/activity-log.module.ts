import { Module } from '@nestjs/common';
import { ActivityLogController } from './http/controllers/activity-log.controller';
import { ActivityLogService } from './application/activity-log.service';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [ActivityLogController],
  providers: [ActivityLogService, PrismaService],
})
export class ActivityLogModule {}
