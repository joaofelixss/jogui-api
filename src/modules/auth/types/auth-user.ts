import { Role } from 'src/core/entities/user.entity';

export type AuthUser = {
  sub: string; // ID do usuário
  email: string;
  role: Role;
  tenantId: string;
};
