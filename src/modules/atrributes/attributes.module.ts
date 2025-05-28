import { Module } from '@nestjs/common';
import { AttributesController } from './http/controllers/attributes.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAttributeUseCase } from './application/use-cases/create-attribute.use-case';
import { PrismaAttributeRepository } from './infra/prisma/prisma-attribute.repository';
import { AttributeRepository } from './domain/repositories/attribute.repository';
import { CreateAttributeValueUseCase } from './application/use-cases/create-attribute-value.use-case';

@Module({
  controllers: [AttributesController],
  providers: [
    PrismaService,
    CreateAttributeUseCase,
    CreateAttributeValueUseCase,
    PrismaAttributeRepository,
    {
      provide: AttributeRepository,
      useClass: PrismaAttributeRepository,
    },
  ],
})
export class AttributeModule {}
