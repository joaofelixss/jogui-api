import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infra/prisma/categories.repository';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private repository: CategoriesRepository) {}

  execute(tenantId: string, name: string) {
    return this.repository.create(tenantId, name);
  }
}
