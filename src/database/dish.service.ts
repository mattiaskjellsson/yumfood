/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from '../entities/dish.entity';

@Injectable()
export class DishDatabaseService extends TypeOrmCrudService<Dish> {
  constructor(@InjectRepository(Dish) repo) {
    super(repo);
  }
}
