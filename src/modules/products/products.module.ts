import { Module } from '@nestjs/common';
import { ProductRepository } from './infra/prisma/product.repository';
import { CreateProductUseCase } from './application/use-cases/create-produto.use-case';
import { UpdateProductUseCase } from './application/use-cases/update-produto.use-case';
import { AdminProductsController } from './http/controllers/admin-products.controller';
import { ProductsController } from './http/controllers/products.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { DeleteProductUseCase } from './application/use-cases/delete-product.use-case';
import { FindAllProductsUseCase } from './application/use-cases/find-all-products.use-case';
import { FindOneProductUseCase } from './application/use-cases/find-one-product.use-case';

@Module({
  controllers: [AdminProductsController, ProductsController],
  providers: [
    PrismaService,
    ProductRepository,
    CreateProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    FindAllProductsUseCase,
    FindOneProductUseCase,
  ],
})
export class ProductsModule {}
