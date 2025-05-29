import { Role } from 'src/core/entities/user.entity';

export type AuthUser = {
  userId: string;
  email: string;
  role: Role;
  tenantId: string;
};
