import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from '../infra/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }
}
