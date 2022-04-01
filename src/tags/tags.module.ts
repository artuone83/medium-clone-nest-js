import { Module } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';
import { TagsController } from '@app/tags/tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
