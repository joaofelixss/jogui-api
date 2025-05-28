import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoNotificationDto } from './create-auto-notification.dto';

export class UpdateAutoNotificationDto extends PartialType(
  CreateAutoNotificationDto,
) {}
