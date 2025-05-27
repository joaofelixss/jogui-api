// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module'; // ajuste o caminho conforme necessário
import { TenantModule } from './modules/tenant/tenant.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    PrismaModule, // só se não for @Global()
    TenantModule,
    AuthModule,
  ],
})
export class AppModule {}
