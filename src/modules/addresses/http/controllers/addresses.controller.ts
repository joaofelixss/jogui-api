import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AddressesService } from '../../application/addresses.service';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { UpdateAddressDto } from '../dtos/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private service: AddressesService) {}

  @Post()
  create(@Body() dto: CreateAddressDto) {
    return this.service.create(dto);
  }

  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.service.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAddressDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
