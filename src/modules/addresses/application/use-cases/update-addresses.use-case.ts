import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../../infra/prisma/addresses.repository';
import { UpdateAddressDto } from '../../http/dtos/update-address.dto';

@Injectable()
export class UpdateAddressUseCase {
  constructor(private repository: AddressRepository) {}

  execute(id: string, dto: UpdateAddressDto) {
    return this.repository.update(id, dto);
  }
}
