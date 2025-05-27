import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/users/application/use-cases/create-user.use-case';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private createUser: CreateUserUseCase) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    try {
      const user = await this.createUser.execute(dto);
      return { user };
    } catch (error) {
      if (error.message.includes('Unique constraint failed')) {
        throw new HttpException(
          'E-mail já está em uso.',
          HttpStatus.BAD_REQUEST,
        );
      }

      throw new HttpException(
        'Erro ao criar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
