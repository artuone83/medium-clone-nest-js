import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  findAll() {
    return ['hello', 'first', 'service', 'power on', 'absolute paths on'];
  }
}
