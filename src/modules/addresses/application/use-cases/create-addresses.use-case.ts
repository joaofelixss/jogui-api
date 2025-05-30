import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../../infra/prisma/addresses.repository';

@Injectable()
export class CreateAddressUseCase {
  constructor(private repository: AddressRepository) {}

  execute(input: {
    userId: string;
    zip: string;
    city: string;
    state: string;
    street: string;
    number: string;
    complement?: string;
  }) {
    return this.repository.create(input);
  }
}
