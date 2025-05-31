import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../../infra/prisma/categories.repository';

@Injectable()
export class GetCategoryUseCase {
  constructor(private repository: CategoriesRepository) {}

  async execute(tenantId: string, id: string) {
    const category = await this.repository.findById(tenantId, id);

    if (!category) {
      throw new NotFoundException('Categoria não encontrada');
    }

    return category;
  }
}
