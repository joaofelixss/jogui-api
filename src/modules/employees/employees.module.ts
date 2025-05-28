// employees.module.ts
import { Module } from '@nestjs/common';
import { EmployeesService } from './application/employees.service';
import { EmployeesController } from './http/controllers/employees.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService, PrismaService],
})
export class EmployeesModule {}
