import { AutoNotification } from 'generated/prisma';

export class AutoNotificationResponseDto {
  constructor(data: AutoNotification) {
    Object.assign(this, data);
  }

  id: string;
  type: string;
  event: string;
  message: string;
  active: boolean;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}
