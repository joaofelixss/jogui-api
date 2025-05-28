import { IsString } from 'class-validator';

export class CreateInternalFeedDto {
  @IsString()
  authorId: string;

  @IsString()
  message: string;

  @IsString()
  tenantId: string;
}
