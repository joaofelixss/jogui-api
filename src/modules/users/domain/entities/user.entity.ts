import { Role } from 'src/core/entities/user.entity';

// src/modules/users/domain/entities/user.entity.ts
export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  tenantId: string;
  createdAt: Date;
}
