// src/modules/products/http/controllers/products.controller.ts
import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Plan } from 'src/core/entities/plan.entity';
import { PlansGuard } from 'src/core/guards/plans.guard';
import { CreateProductUseCase } from '../../application/use-cases/create-produto.use-case';
import { UpdateProductUseCase } from '../../application/use-cases/update-produto.use-case';
import { DeleteProductUseCase } from '../../application/use-cases/delete-product.use-case';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('admin/products')
export class AdminProductsController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateProductDto, @CurrentUser() user: AuthUser) {
    return this.createProductUseCase.execute(user.tenantId, dto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.updateProductUseCase.execute(user.tenantId, id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.deleteProductUseCase.execute(user.tenantId, id);
  }
}
