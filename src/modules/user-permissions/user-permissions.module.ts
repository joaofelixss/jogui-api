import { Module } from '@nestjs/common';
import { UserPermissionsService } from './application/user-permissions.service';
import { UserPermissionsController } from './http/controllers/user-permissions.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [UserPermissionsController],
  providers: [UserPermissionsService, PrismaService],
})
export class UserPermissionsModule {}
