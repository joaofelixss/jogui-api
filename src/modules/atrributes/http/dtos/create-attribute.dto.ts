import { IsString, IsUUID } from 'class-validator';

export class CreateAttributeDto {
  @IsString()
  name: string;

  @IsUUID()
  tenantId: string;
}
