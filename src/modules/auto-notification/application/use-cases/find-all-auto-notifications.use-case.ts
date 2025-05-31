import { Injectable } from '@nestjs/common';
import { AutoNotificationRepository } from '../../infra/prisma/auto-notification.repository';

@Injectable()
export class FindAllAutoNotificationsUseCase {
  constructor(private repository: AutoNotificationRepository) {}

  execute() {
    return this.repository.findAll();
  }
}
