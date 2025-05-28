import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAddressDto } from '../http/dtos/create-address.dto';
import { UpdateAddressDto } from '../http/dtos/update-address.dto';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAddressDto) {
    return this.prisma.address.create({ data: dto });
  }

  findAllByUser(userId: string) {
    return this.prisma.address.findMany({ where: { userId } });
  }

  async findOne(id: string) {
    const address = await this.prisma.address.findUnique({ where: { id } });
    if (!address) throw new NotFoundException('Endereço não encontrado');
    return address;
  }

  update(id: string, dto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: string) {
    return this.prisma.address.delete({ where: { id } });
  }
}
