import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { InternalFeedService } from '../../application/internal-feed.service';
import { CreateInternalFeedDto } from '../dtos/create-internal-feed.dto';
import { UpdateInternalFeedDto } from '../dtos/update-internal-feed.dto';

@Controller('internal-feeds')
export class InternalFeedController {
  constructor(private service: InternalFeedService) {}

  @Post()
  create(@Body() dto: CreateInternalFeedDto) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInternalFeedDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
