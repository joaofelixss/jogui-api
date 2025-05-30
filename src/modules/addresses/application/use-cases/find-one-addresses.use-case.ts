import { Injectable, NotFoundException } from '@nestjs/common';
import { AddressRepository } from '../../infra/prisma/addresses.repository';

@Injectable()
export class FindOneAddressUseCase {
  constructor(private repository: AddressRepository) {}

  async execute(id: string) {
    const address = await this.repository.findOne(id);
    if (!address) throw new NotFoundException('Endereço não encontrado');
    return address;
  }
}
