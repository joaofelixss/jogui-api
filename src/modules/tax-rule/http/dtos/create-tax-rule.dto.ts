import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateTaxRuleDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsString()
  type: string;

  @IsNumber()
  rate: number;

  @IsOptional()
  @IsString()
  condition?: string;

  @IsString()
  tenantId: string;
}
