import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateFinancialRecordDto } from '../http/dtos/create-financial-record.dto';
import { CreateFinancialHistoryDto } from '../http/dtos/create-financial-history.dto';

@Injectable()
export class FinancialService {
  constructor(private prisma: PrismaService) {}

  async createRecord(dto: CreateFinancialRecordDto) {
    const record = await this.prisma.financialRecord.create({
      data: {
        type: dto.type,
        value: dto.value,
        dueDate: new Date(dto.dueDate),
        paid: dto.paid,
        tenantId: dto.tenantId,
      },
    });

    await this.createHistory({
      recordId: record.id,
      action: 'CREATED',
      changedById: 'SYSTEM', // ou passe o ID de quem criou
    });

    return record;
  }

  findAllRecords() {
    return this.prisma.financialRecord.findMany({
      orderBy: { dueDate: 'desc' },
    });
  }

  createHistory(dto: CreateFinancialHistoryDto) {
    return this.prisma.financialHistory.create({
      data: {
        recordId: dto.recordId,
        action: dto.action,
        changedById: dto.changedById,
      },
    });
  }

  getHistory(recordId: string) {
    return this.prisma.financialHistory.findMany({
      where: { recordId },
      orderBy: { timestamp: 'desc' },
    });
  }
}
