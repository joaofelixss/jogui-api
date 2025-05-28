import { Module } from '@nestjs/common';
import { CrmCampaignService } from './application/crm-campaign.service';
import { CrmCampaignController } from './http/controllers/crm-campaign.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [CrmCampaignController],
  providers: [CrmCampaignService, PrismaService],
})
export class CrmCampaignModule {}
