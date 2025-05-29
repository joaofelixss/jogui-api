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
import { UserPermissionsModule } from './modules/user-permissions/user-permissions.module';
import { StockMovementsModule } from './modules/stock-movements/stock-movements.module';
import { FinancialModule } from './modules/financial/financial.module';
import { ActivityLogModule } from './modules/activity-log/activity-log.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { TasxRuleModule } from './modules/tax-rule/tax-rule.module';
import { AutoNotificationModule } from './modules/auto-notification/auto-notification.module';
import { CrmCampaignModule } from './modules/crm-campaign/crm-campaign.module';
import { InternalFeedModule } from './modules/internal-feed/internal-feed.module';
import { StockModule } from './modules/stock/stock.module';

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
    UserPermissionsModule,
    StockModule,
    StockMovementsModule,
    FinancialModule,
    ActivityLogModule,
    TasksModule,
    TasxRuleModule,
    AutoNotificationModule,
    CrmCampaignModule,
    InternalFeedModule,
    PlanModule,
  ],
})
export class AppModule {}
