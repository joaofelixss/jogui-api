// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module'; // ajuste o caminho conforme necessário
import { TenantModule } from './modules/tenant/tenant.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { PlanModule } from './modules/plan/plan.module';

@Module({
  imports: [
    PrismaModule,
    TenantModule,
    AuthModule,
    UserModule,
    CategoriesModule,
    ProductsModule,
    PlanModule,
  ],
})
export class AppModule {}
