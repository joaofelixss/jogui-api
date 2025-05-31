import { Injectable } from '@nestjs/common';
import { AutoNotificationRepository } from '../../infra/prisma/auto-notification.repository';
import { UpdateAutoNotificationDto } from '../../http/dtos/update-auto-notification.dto';

@Injectable()
export class UpdateAutoNotificationUseCase {
  constructor(private repository: AutoNotificationRepository) {}

  execute(id: string, dto: UpdateAutoNotificationDto) {
    return this.repository.update(id, dto);
  }
}
