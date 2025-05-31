import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { UpdateCategoryDto } from '../dtos/update-category.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';
import { CreateCategoryUseCase } from '../../application/use-cases/create-category.usecase';
import { GetAllCategoriesUseCase } from '../../application/use-cases/get-all-categories.usecase';
import { GetCategoryUseCase } from '../../application/use-cases/get-category.usecase';
import { UpdateCategoryUseCase } from '../../application/use-cases/update-category.usecase';
import { DeleteCategoryUseCase } from '../../application/use-cases/delete-category.usecase';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('categories')
export class CategoriesController {
  constructor(
    private createCategory: CreateCategoryUseCase,
    private getAllCategories: GetAllCategoriesUseCase,
    private getCategory: GetCategoryUseCase,
    private updateCategory: UpdateCategoryUseCase,
    private deleteCategory: DeleteCategoryUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateCategoryDto, @CurrentUser() user: AuthUser) {
    return this.createCategory.execute(user.tenantId, dto.name);
  }

  @Get()
  findAll(@CurrentUser() user: AuthUser) {
    return this.getAllCategories.execute(user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.getCategory.execute(user.tenantId, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.updateCategory.execute(user.tenantId, id, dto.name);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.deleteCategory.execute(user.tenantId, id);
  }
}
