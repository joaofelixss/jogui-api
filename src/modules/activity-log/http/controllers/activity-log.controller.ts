import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateActivityLogUseCase } from '../../application/use-cases/create-activity-log.use-case';
import { FindAllActivityLogsUseCase } from '../../application/use-cases/find-all-activity-logs.use-case';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { AuthUser } from 'src/modules/auth/types/auth-user';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';

@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
@Controller('activity-logs')
export class ActivityLogController {
  constructor(
    private readonly createUseCase: CreateActivityLogUseCase,
    private readonly findAllUseCase: FindAllActivityLogsUseCase,
  ) {}

  @Get()
  async findAll(@CurrentUser() user: AuthUser) {
    return this.findAllUseCase.execute(user.tenantId);
  }

  @Post()
  async create(
    @Body() body: { action: string },
    @CurrentUser() user: AuthUser,
  ) {
    return this.createUseCase.execute({
      action: body.action,
      tenantId: user.tenantId,
      userId: user.userId,
    });
  }
}
