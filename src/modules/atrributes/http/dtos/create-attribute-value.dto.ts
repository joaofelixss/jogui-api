import { IsString, IsUUID } from 'class-validator';

export class CreateAttributeValueDto {
  @IsString()
  value: string;

  @IsUUID()
  attributeId: string;
}
