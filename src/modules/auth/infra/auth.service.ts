import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from '../http/dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: {
        tenant: {
          include: {
            plan: true,
          },
        },
        UserRole: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuário ou senha inválidos.');
    }

    const userRole = user.UserRole[0]?.role?.name;

    if (!userRole) {
      throw new UnauthorizedException('Usuário sem papel definido.');
    }

    const payload = {
      sub: user.id,
      tenantId: user.tenantId,
      role: userRole,
      plan: user.tenant.plan.name,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
    };
  }
}
