import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateAutoNotificationDto } from '../dtos/create-auto-notification.dto';
import { UpdateAutoNotificationDto } from '../dtos/update-auto-notification.dto';
import { Plans } from 'src/core/decorators/plans.decorator';
import { Roles } from 'src/core/decorators/roles.decorator';
import { Role } from 'src/core/entities/user.entity';
import { Plan } from 'src/core/entities/plan.entity';
import { RolesGuard } from 'src/core/guards/roles.guard';
import { PlansGuard } from 'src/core/guards/plans.guard';
import { JwtAuthGuard } from 'src/modules/auth/infra/jwt-auth.guard';
import { CreateAutoNotificationUseCase } from '../../application/use-cases/create-auto-notification.use-case';
import { FindAllAutoNotificationsUseCase } from '../../application/use-cases/find-all-auto-notifications.use-case';
import { FindOneAutoNotificationUseCase } from '../../application/use-cases/find-one-auto-notification.use-case';
import { UpdateAutoNotificationUseCase } from '../../application/use-cases/update-auto-notification.use-case';
import { DeleteAutoNotificationUseCase } from '../../application/use-cases/delete-auto-notification.use-case';

@Controller('auto-notifications')
@Roles(Role.ADMIN)
@Plans(Plan.GESTAO_PRO, Plan.PONTO)
@UseGuards(JwtAuthGuard, RolesGuard, PlansGuard)
export class AutoNotificationController {
  constructor(
    private readonly createUseCase: CreateAutoNotificationUseCase,
    private readonly findAllUseCase: FindAllAutoNotificationsUseCase,
    private readonly findOneUseCase: FindOneAutoNotificationUseCase,
    private readonly updateUseCase: UpdateAutoNotificationUseCase,
    private readonly deleteUseCase: DeleteAutoNotificationUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateAutoNotificationDto) {
    return this.createUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneUseCase.execute(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAutoNotificationDto) {
    return this.updateUseCase.execute(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteUseCase.execute(id);
  }
}
