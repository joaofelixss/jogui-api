import { Module } from '@nestjs/common';
import { RoleService } from './application/role.service';
import { RoleController } from './http/controllers/role.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService, PrismaService],
})
export class RoleModule {}
