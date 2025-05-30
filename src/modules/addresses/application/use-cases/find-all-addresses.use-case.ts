import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../../infra/prisma/addresses.repository';

@Injectable()
export class FindAllAddressesByUserUseCase {
  constructor(private repository: AddressRepository) {}

  execute(userId: string) {
    return this.repository.findByUser(userId);
  }
}
