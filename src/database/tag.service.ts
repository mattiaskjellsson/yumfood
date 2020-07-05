/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagDatabaseService extends TypeOrmCrudService<Tag> {
  constructor(@InjectRepository(Tag) repo) {
    super(repo);
  }
}
