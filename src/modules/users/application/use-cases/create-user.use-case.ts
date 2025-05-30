// src/modules/users/application/use-cases/create-user.use-case.ts
import { Injectable } from '@nestjs/common';
import { PrismaUserRepository } from '../../infra/prisma/prisma-user.repository';
import { hash } from 'bcrypt';

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  tenantId: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: PrismaUserRepository) {}

  async execute(input: CreateUserInput) {
    const hashedPassword = await hash(input.password, 10);

    const user = await this.userRepository.create({
      ...input,
      password: hashedPassword,
    });

    return { user };
  }
}
