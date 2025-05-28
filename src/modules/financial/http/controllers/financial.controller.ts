import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { FinancialService } from '../../application/financial.service';
import { CreateFinancialRecordDto } from '../dtos/create-financial-record.dto';

@Controller('financial')
export class FinancialController {
  constructor(private service: FinancialService) {}

  @Post()
  createRecord(@Body() dto: CreateFinancialRecordDto) {
    return this.service.createRecord(dto);
  }

  @Get()
  findAll() {
    return this.service.findAllRecords();
  }

  @Get('history/:recordId')
  getHistory(@Param('recordId') recordId: string) {
    return this.service.getHistory(recordId);
  }
}
