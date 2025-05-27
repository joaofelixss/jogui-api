// src/modules/users/infra/prisma/prisma-user.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

interface CreateUserPrismaInput {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FUNCIONARIO' | 'CLIENTE';
  tenantId: string;
}

@Injectable()
export class PrismaUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserPrismaInput) {
    return this.prisma.user.create({ data });
  }
}
