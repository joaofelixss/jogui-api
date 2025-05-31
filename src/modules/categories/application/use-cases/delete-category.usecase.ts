import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infra/prisma/categories.repository';
import { GetCategoryUseCase } from './get-category.usecase';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private repository: CategoriesRepository,
    private getCategory: GetCategoryUseCase,
  ) {}

  async execute(tenantId: string, id: string) {
    await this.getCategory.execute(tenantId, id); // garantir que existe
    return this.repository.delete(id);
  }
}
