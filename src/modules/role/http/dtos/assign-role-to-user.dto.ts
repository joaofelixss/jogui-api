import { IsUUID } from 'class-validator';

export class AssignRoleToUserDto {
  @IsUUID()
  roleId: string;
}
