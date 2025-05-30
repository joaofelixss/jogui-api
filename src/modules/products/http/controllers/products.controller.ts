// src/modules/products/http/controllers/products.controller.ts
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
import { ProductsService } from '../../products.service';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';
import { Headers } from '@nestjs/common';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Plan } from 'src/core/entities/plan.entity';
import { PlansGuard } from 'src/core/guards/plans.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() dto: CreateProductDto, @CurrentUser() user: AuthUser) {
    return this.productsService.create(user.tenantId, dto);
  }

  @Get()
  async findAll(@CurrentUser() user: AuthUser) {
    return this.productsService.findAll(user.tenantId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.productsService.findOne(user.tenantId, id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.productsService.update(user.tenantId, id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.productsService.remove(user.tenantId, id);
  }
}
