// src/modules/employees/http/dtos/create-employee.dto.ts
import { IsString, IsNumber, IsEmail, IsEnum } from 'class-validator';
import { Role } from 'src/core/entities/user.entity';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  position: string;

  @IsNumber()
  salary: number;

  @IsEnum(Role)
  role: Role;
}
