/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, Logger } from '@nestjs/common';
import { VendorDatabaseService } from '../database/vendor.service';
import { Dish } from '../entities/dish.entity';
import { Vendor } from '../entities/vendor.entity';
import { In } from 'typeorm';
import { TagDatabaseService } from 'src/database/tag.service';

@Injectable()
export class RestaurantService {
  private readonly log: Logger = new Logger(RestaurantService.name);

  constructor(
    private readonly database: VendorDatabaseService,
    private readonly tagDatabase: TagDatabaseService,
  ){}

  public async getAll(tagFilter?: any): Promise<Vendor[]> {
    if (tagFilter && tagFilter.tag && tagFilter.tag.length > 0) {
      const tags = await this.tagDatabase.find({
        where: {
          name: In(tagFilter.tag)
        },
        relations: [
          'vendors',
          'vendors.tags',
        ]
      });
      
      const vendors = tags.map(x => x.vendors).reduce((a, b) => a.concat(b), []);
      return vendors;
    } else {
      return await this.database.find({
        relations: ['tags'],
      });
    }
  }

  public async get(id: string): Promise<Vendor> {
    const restaurant = await this.database.findOne(
      id,
      {
        relations: ['dishes', 'tags']
      });

    if (restaurant) {
      return restaurant;
    } else {
      throw new Error(`No restaurant found with id ${id}`);
    }
  }

  public async getDishes(id: string): Promise<Dish[]> {
    const restaurant = await this.database.findOne(id, {
      relations: [
        'dishes'
      ]
    });
    if (restaurant) {
      return restaurant.dishes;
    } else {
      throw new Error(`No restaurant found with id ${id}`);
    }
  }
}
