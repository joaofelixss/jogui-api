// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './core/prisma/prisma.module'; // ajuste o caminho conforme necessário
import { TenantModule } from './modules/tenant/tenant.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { ProductsModule } from './modules/products/products.module';
import { PlanModule } from './modules/plan/plan.module';
import { AttributeModule } from './modules/atrributes/attributes.module';
import { EmployeesModule } from './modules/employees/employees.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AddressesModule } from './modules/addresses/addresses.module';

@Module({
  imports: [
    PrismaModule,
    TenantModule,
    AuthModule,
    UserModule,
    CategoriesModule,
    ProductsModule,
    AttributeModule,
    EmployeesModule,
    OrdersModule,
    AddressesModule,
    PlanModule,
  ],
})
export class AppModule {}
