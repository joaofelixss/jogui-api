import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ActivityLogController } from './http/controllers/activity-log.controller';
import { ActivityLogRepository } from './infra/prisma/activity-log.repository';
import { CreateActivityLogUseCase } from './application/use-cases/create-activity-log.use-case';
import { FindAllActivityLogsUseCase } from './application/use-cases/find-all-activity-logs.use-case';

@Module({
  controllers: [ActivityLogController],
  providers: [
    PrismaService,
    ActivityLogRepository,
    CreateActivityLogUseCase,
    FindAllActivityLogsUseCase,
  ],
})
export class ActivityLogModule {}
