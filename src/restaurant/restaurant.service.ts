import { Injectable, Logger } from '@nestjs/common';
import { VendorDatabaseService } from '../database/vendor.service';
import { Dish } from '../entities/dish.entity';
import { Vendor } from '../entities/vendor.entity';

@Injectable()
export class RestaurantService {
  private readonly log: Logger = new Logger(RestaurantService.name);

  constructor(
    private readonly database: VendorDatabaseService
  ){}

  public async getAll(): Promise<Vendor[]> {
    this.log.debug(`Get all vendors`);
    const restaurants = await this.database.find();
    return restaurants;
  }

  public async get(id: string): Promise<Vendor> {
    this.log.debug(`Get vendor ${id}`);
    const restaurant = await this.database.findOne(id);

    if (restaurant) {
      return restaurant;
    } else {
      throw new Error(`No restaurant found with id ${id}`);
    }
  }

  public async getDishes(id: string): Promise<Dish[]> {
    this.log.debug(`Get dishes for vendor ${id}`);
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
