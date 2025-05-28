import { IsString, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class CreateCrmCampaignDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  tenantId: string;

  @IsOptional()
  @IsBoolean()
  isDeleted?: boolean;
}
