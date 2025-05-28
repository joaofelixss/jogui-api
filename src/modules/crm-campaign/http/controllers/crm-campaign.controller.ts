import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CrmCampaignService } from '../../application/crm-campaign.service';
import { CreateCrmCampaignDto } from '../dtos/create-crm-campaign.dto';
import { UpdateCrmCampaignDto } from '../dtos/update-crm-campaign.dto';

@Controller('crm-campaigns')
export class CrmCampaignController {
  constructor(private service: CrmCampaignService) {}

  @Post()
  create(@Body() dto: CreateCrmCampaignDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateCrmCampaignDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
