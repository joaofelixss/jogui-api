import { Injectable } from '@nestjs/common';
import { ActivityLogRepository } from '../../infra/prisma/activity-log.repository';

@Injectable()
export class CreateActivityLogUseCase {
  constructor(private readonly repository: ActivityLogRepository) {}

  execute(input: { userId: string; tenantId: string; action: string }) {
    return this.repository.create(input);
  }
}
