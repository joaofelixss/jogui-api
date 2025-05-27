// src/modules/users/user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './http/controllers/user.controller';
import { PrismaUserRepository } from './infra/prisma/prisma-user.repository';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';

@Module({
  controllers: [UserController],
  providers: [PrismaUserRepository, CreateUserUseCase],
})
export class UserModule {}
