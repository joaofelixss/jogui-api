// src/modules/addresses/http/controllers/addresses.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';
import { CreateAddressDto } from '../dtos/create-address.dto';
import { UpdateAddressDto } from '../dtos/update-address.dto';
import { CreateAddressUseCase } from '../../application/use-cases/create-addresses.use-case';
import { FindAllAddressesByUserUseCase } from '../../application/use-cases/find-all-addresses.use-case';
import { FindOneAddressUseCase } from '../../application/use-cases/find-one-addresses.use-case';
import { UpdateAddressUseCase } from '../../application/use-cases/update-addresses.use-case';
import { DeleteAddressUseCase } from '../../application/use-cases/delete-addresses.use-case';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@UseGuards(JwtAuthGuard)
@Controller('addresses')
export class AddressesController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private findAllByUserUseCase: FindAllAddressesByUserUseCase,
    private findOneUseCase: FindOneAddressUseCase,
    private updateUseCase: UpdateAddressUseCase,
    private deleteUseCase: DeleteAddressUseCase,
  ) {}

  @Post()
  create(@Body() body: CreateAddressDto, @CurrentUser() user: AuthUser) {
    return this.createAddressUseCase.execute({ ...body, userId: user.userId });
  }

  @Get()
  findAll(@CurrentUser() user: AuthUser) {
    return this.findAllByUserUseCase.execute(user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateAddressDto) {
    return this.updateUseCase.execute(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
