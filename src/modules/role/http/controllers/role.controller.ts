import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RoleService } from '../../application/role.service';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { AssignPermissionsDto } from '../dtos/assign-permissions.dto';
import { AssignRoleToUserDto } from '../dtos/assign-role-to-user.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get()
  list() {
    return this.roleService.listRoles();
  }

  @Post(':id/permissions')
  assignPermissions(
    @Param('id') roleId: string,
    @Body() dto: AssignPermissionsDto,
  ) {
    return this.roleService.assignPermissions(roleId, dto.permissionIds);
  }

  @Post('/assign/:userId')
  assignRoleToUser(
    @Param('userId') userId: string,
    @Body() dto: AssignRoleToUserDto,
  ) {
    return this.roleService.assignRoleToUser(userId, dto.roleId);
  }

  @Get('/permissions/all')
  listPermissions() {
    return this.roleService.listPermissions();
  }
}
