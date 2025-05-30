import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { UpdateAddressDto } from '../../http/dtos/update-address.dto';

@Injectable()
export class AddressRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    userId: string;
    zip: string;
    city: string;
    state: string;
    street: string;
    number: string;
    complement?: string;
  }) {
    return this.prisma.address.create({ data });
  }

  async findByUser(userId: string) {
    return this.prisma.address.findMany({
      where: { userId },
    });
  }

  async findOne(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateAddressDto) {
    return this.prisma.address.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.address.delete({ where: { id } });
  }
}
