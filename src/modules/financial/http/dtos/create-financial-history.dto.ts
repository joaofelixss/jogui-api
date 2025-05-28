import { IsUUID, IsString } from 'class-validator';

export class CreateFinancialHistoryDto {
  @IsUUID()
  recordId: string;

  @IsString()
  action: string;

  @IsUUID()
  changedById: string;
}
