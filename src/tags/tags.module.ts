import { Module } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';

@Module({
  providers: [TagsService],
})
export class TagsModule {}
