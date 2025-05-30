// src/modules/addresses/addresses.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AddressesController } from './http/controllers/addresses.controller';
import { CreateAddressUseCase } from './application/use-cases/create-addresses.use-case';
import { FindAllAddressesByUserUseCase } from './application/use-cases/find-all-addresses.use-case';
import { FindOneAddressUseCase } from './application/use-cases/find-one-addresses.use-case';
import { UpdateAddressUseCase } from './application/use-cases/update-addresses.use-case';
import { DeleteAddressUseCase } from './application/use-cases/delete-addresses.use-case';
import { AddressRepository } from './infra/prisma/addresses.repository';

@Module({
  controllers: [AddressesController],
  providers: [
    PrismaService,
    AddressRepository,
    CreateAddressUseCase,
    FindAllAddressesByUserUseCase,
    FindOneAddressUseCase,
    UpdateAddressUseCase,
    DeleteAddressUseCase,
  ],
})
export class AddressesModule {}
