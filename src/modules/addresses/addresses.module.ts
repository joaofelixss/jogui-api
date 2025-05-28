import { Module } from '@nestjs/common';
import { AddressesService } from './application/addresses.service';
import { AddressesController } from './http/controllers/addresses.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService, PrismaService],
})
export class AddressesModule {}
