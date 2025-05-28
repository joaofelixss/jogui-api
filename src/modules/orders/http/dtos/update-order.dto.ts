import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { OrderStatus } from 'generated/prisma';

export class UpdateOrderDto {
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;

  @IsNumber()
  @IsOptional()
  total?: number;
}
