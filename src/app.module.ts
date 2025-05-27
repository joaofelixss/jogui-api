// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module'; // ajuste o caminho conforme necessário
import { TenantModule } from './modules/tenant/tenant.module';

@Module({
  imports: [
    PrismaModule, // só se não for @Global()
    TenantModule,
  ],
})
export class AppModule {}
