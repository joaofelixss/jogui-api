import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OrderStatus } from 'generated/prisma';

class OrderItemDto {
  @IsUUID()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}

export class CreateOrderDto {
  @IsUUID()
  clientId: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsNumber()
  total: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
