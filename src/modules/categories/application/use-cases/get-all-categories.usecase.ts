import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../infra/prisma/categories.repository';

@Injectable()
export class GetAllCategoriesUseCase {
  constructor(private repository: CategoriesRepository) {}

  execute(tenantId: string) {
    return this.repository.findAll(tenantId);
  }
}
