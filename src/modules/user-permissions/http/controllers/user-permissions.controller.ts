import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { UserPermissionsService } from '../../application/user-permissions.service';
import { CreatePermissionDto } from '../dtos/create-permission.dto';
import { AssignPermissionDto } from '../dtos/assign-permission.dto';

@Controller('permissions')
export class UserPermissionsController {
  constructor(private service: UserPermissionsService) {}

  @Post()
  createPermission(@Body() dto: CreatePermissionDto) {
    return this.service.createPermission(dto);
  }

  @Get()
  findAllPermissions() {
    return this.service.findAllPermissions();
  }

  @Get('user/:userId')
  findUserPermissions(@Param('userId') userId: string) {
    return this.service.findUserPermissions(userId);
  }

  @Post('assign')
  assignPermission(@Body() dto: AssignPermissionDto) {
    return this.service.assignPermission(dto);
  }

  @Delete(':id')
  removeUserPermission(@Param('id') id: string) {
    return this.service.removePermission(id);
  }
}
