import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './infra/auth.service';
import { AuthController } from './http/auth.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { JwtStrategy } from './infra/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'jogui-secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
