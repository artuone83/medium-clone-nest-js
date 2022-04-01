import { Controller, Get } from '@nestjs/common';
import { TagsService } from '@app/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get()
  findAll(): string[] {
    return this.tagsService.findAll();
  }
}
