import { Module } from '@nestjs/common';
import { CreateCategoryUseCase } from './application/use-cases/create-category.usecase';
import { CategoriesController } from './http/controllers/categories.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CategoriesRepository } from './infra/prisma/categories.repository';
import { DeleteCategoryUseCase } from './application/use-cases/delete-category.usecase';
import { GetAllCategoriesUseCase } from './application/use-cases/get-all-categories.usecase';
import { GetCategoryUseCase } from './application/use-cases/get-category.usecase';
import { UpdateCategoryUseCase } from './application/use-cases/update-category.usecase';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesRepository,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    GetAllCategoriesUseCase,
    GetCategoryUseCase,
    PrismaService,
  ],
})
export class CategoriesModule {}
