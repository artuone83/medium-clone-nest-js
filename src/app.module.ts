import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagsController } from '@app/tags/tags.controller';
import { TagsModule } from '@app/tags/tags.module';
import { TagsService } from '@app/tags/tags.service';

@Module({
  imports: [TagsModule],
  controllers: [AppController, TagsController],
  providers: [AppService, TagsService],
})
export class AppModule {}
