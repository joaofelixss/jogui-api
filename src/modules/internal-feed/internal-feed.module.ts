import { Module } from '@nestjs/common';
import { InternalFeedService } from './application/internal-feed.service';
import { InternalFeedController } from './http/controllers/internal-feed.controller';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Module({
  controllers: [InternalFeedController],
  providers: [InternalFeedService, PrismaService],
})
export class InternalFeedModule {}
