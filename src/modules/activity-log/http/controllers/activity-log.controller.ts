import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ActivityLogService } from '../../application/activity-log.service';
import { CreateActivityLogDto } from '../dtos/create-activity-log.dto';

@Controller('activity-logs')
export class ActivityLogController {
  constructor(private service: ActivityLogService) {}

  @Post()
  create(@Body() dto: CreateActivityLogDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.service.findByUser(userId);
  }
}
