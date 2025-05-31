import { Injectable } from '@nestjs/common';
import { AutoNotificationRepository } from '../../infra/prisma/auto-notification.repository';
import { CreateAutoNotificationDto } from '../../http/dtos/create-auto-notification.dto';

@Injectable()
export class CreateAutoNotificationUseCase {
  constructor(private repository: AutoNotificationRepository) {}

  execute(dto: CreateAutoNotificationDto) {
    return this.repository.create(dto);
  }
}
