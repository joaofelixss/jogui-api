import { Injectable } from '@nestjs/common';
import { ActivityLogRepository } from '../../infra/prisma/activity-log.repository';

@Injectable()
export class FindAllActivityLogsUseCase {
  constructor(private readonly repository: ActivityLogRepository) {}

  execute(tenantId: string) {
    return this.repository.findAll(tenantId);
  }
}
