import { IsString, IsInt, Min } from 'class-validator';

export class CreateStockDto {
  @IsString()
  productId: string;

  @IsInt()
  @Min(0)
  quantity: number;
}
