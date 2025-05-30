import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../../infra/prisma/addresses.repository';

@Injectable()
export class DeleteAddressUseCase {
  constructor(private repository: AddressRepository) {}

  execute(id: string) {
    return this.repository.delete(id);
  }
}
