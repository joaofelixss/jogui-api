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
import { CategoriesService } from '../../categories.service';
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

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto, @CurrentUser() user: AuthUser) {
    return this.categoriesService.create(user.tenantId, dto);
  }

  @Get()
  findAll(@CurrentUser() user: AuthUser) {
    return this.categoriesService.findAll(user.tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.categoriesService.findOne(user.tenantId, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.categoriesService.update(user.tenantId, id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.categoriesService.remove(user.tenantId, id);
  }
}
