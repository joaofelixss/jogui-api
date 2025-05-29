import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PLANS_KEY } from '../decorators/plans.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';

@Injectable()
export class PlansGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPlans = this.reflector.getAllAndOverride<string[]>(
      PLANS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPlans || requiredPlans.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: AuthUser = request.user;

    if (!user || !user.plan || !requiredPlans.includes(user.plan)) {
      throw new ForbiddenException(
        'Seu plano atual não permite acessar este recurso',
      );
    }

    return true;
  }
}
