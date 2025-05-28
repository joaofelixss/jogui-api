import {
  IsUUID,
  IsEnum,
  IsBoolean,
  IsDateString,
  IsNumber,
} from 'class-validator';

export class CreateFinancialRecordDto {
  @IsEnum(['INCOME', 'EXPENSE'])
  type: 'INCOME' | 'EXPENSE';

  @IsNumber()
  value: number;

  @IsDateString()
  dueDate: string;

  @IsBoolean()
  paid: boolean;

  @IsUUID()
  tenantId: string;
}
