import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AutoNotificationService } from '../../application/auto-notification.service';
import { CreateAutoNotificationDto } from '../dtos/create-auto-notification.dto';
import { UpdateAutoNotificationDto } from '../dtos/update-auto-notification.dto';

@Controller('auto-notifications')
export class AutoNotificationController {
  constructor(private readonly service: AutoNotificationService) {}

  @Post()
  create(@Body() dto: CreateAutoNotificationDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAutoNotificationDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
