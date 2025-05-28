import { Module } from '@nestjs/common';
import { TasksController } from './http/controllers/tasks.controller';
import { TasksService } from './application/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
