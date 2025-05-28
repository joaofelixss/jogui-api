import { PartialType } from '@nestjs/mapped-types';
import { CreateInternalFeedDto } from './create-internal-feed.dto';

export class UpdateInternalFeedDto extends PartialType(CreateInternalFeedDto) {}
