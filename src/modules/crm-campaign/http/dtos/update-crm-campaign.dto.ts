import { PartialType } from '@nestjs/mapped-types';
import { CreateCrmCampaignDto } from './create-crm-campaign.dto';

export class UpdateCrmCampaignDto extends PartialType(CreateCrmCampaignDto) {}
