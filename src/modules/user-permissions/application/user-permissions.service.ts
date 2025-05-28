import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreatePermissionDto } from '../http/dtos/create-permission.dto';
import { AssignPermissionDto } from '../http/dtos/assign-permission.dto';

@Injectable()
export class UserPermissionsService {
  constructor(private prisma: PrismaService) {}

  createPermission(dto: CreatePermissionDto) {
    return this.prisma.permission.create({ data: dto });
  }

  assignPermission(dto: AssignPermissionDto) {
    return this.prisma.userPermission.create({ data: dto });
  }

  findAllPermissions() {
    return this.prisma.permission.findMany();
  }

  findUserPermissions(userId: string) {
    return this.prisma.userPermission.findMany({
      where: { userId },
      include: { permission: true },
    });
  }

  async removePermission(userPermissionId: string) {
    const found = await this.prisma.userPermission.findUnique({
      where: { id: userPermissionId },
    });
    if (!found) throw new NotFoundException('Permissão não encontrada');

    return this.prisma.userPermission.delete({
      where: { id: userPermissionId },
    });
  }
}
