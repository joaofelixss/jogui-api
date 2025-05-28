import { IsNotEmpty, IsUUID, IsInt, IsIn, IsOptional } from 'class-validator';

export class CreateStockMovementDto {
  @IsUUID()
  productId: string;

  @IsUUID()
  createdById: string;

  @IsInt()
  quantity: number;

  @IsIn(['IN', 'OUT', 'ADJUST'])
  type: string;

  @IsOptional()
  @IsNotEmpty()
  reason?: string;
}
