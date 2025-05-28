import { IsUUID, IsString } from 'class-validator';

export class CreateActivityLogDto {
  @IsUUID()
  userId: string;

  @IsString()
  action: string;
}
