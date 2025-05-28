import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateCrmCampaignDto } from '../http/dtos/create-crm-campaign.dto';
import { UpdateCrmCampaignDto } from '../http/dtos/update-crm-campaign.dto';

@Injectable()
export class CrmCampaignService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateCrmCampaignDto) {
    return this.prisma.crmCampaign.create({ data: dto });
  }

  findAll() {
    return this.prisma.crmCampaign.findMany({ where: { isDeleted: false } });
  }

  findOne(id: string) {
    return this.prisma.crmCampaign.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateCrmCampaignDto) {
    return this.prisma.crmCampaign.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.crmCampaign.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}
