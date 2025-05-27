import { Module } from '@nestjs/common';
import { ProductRepository } from './infra/prisma/product.repository';
import { CreateProductUseCase } from './application/use-cases/create-produto.use-case';
import { UpdateProductUseCase } from './application/use-cases/update-produto.use-case';
import { ProductsController } from './http/controllers/products.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [
    PrismaService,
    ProductsService,
    ProductRepository,
    CreateProductUseCase,
    UpdateProductUseCase,
  ],
})
export class ProductsModule {}
