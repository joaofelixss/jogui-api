import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateRoleDto } from '../http/dtos/create-role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(dto: CreateRoleDto) {
    return this.prisma.role.create({ data: dto });
  }

  async listRoles() {
    return this.prisma.role.findMany({ include: { permissions: true } });
  }

  async assignPermissions(roleId: string, permissionIds: string[]) {
    const data = permissionIds.map((permissionId) => ({
      roleId,
      permissionId,
    }));
    await this.prisma.rolePermission.createMany({
      data,
      skipDuplicates: true,
    });
  }

  async assignRoleToUser(userId: string, roleId: string) {
    await this.prisma.userRole.create({
      data: { userId, roleId },
    });
  }

  async listPermissions() {
    return this.prisma.permission.findMany();
  }
}
