import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @IsUUID()
  userId: string;

  @IsString()
  zip: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  street: string;

  @IsString()
  number: string;

  @IsOptional()
  @IsString()
  complement?: string;
}
