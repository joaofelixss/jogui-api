import { Injectable } from '@nestjs/common';
import { AutoNotificationRepository } from '../../infra/prisma/auto-notification.repository';

@Injectable()
export class DeleteAutoNotificationUseCase {
  constructor(private repository: AutoNotificationRepository) {}

  execute(id: string) {
    return this.repository.delete(id);
  }
}
