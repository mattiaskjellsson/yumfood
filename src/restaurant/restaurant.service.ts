import { Injectable, Logger } from '@nestjs/common';
import { VendorDatabaseService } from '../database/vendor.service';
import { Dish } from '../entities/dish.entity';

@Injectable()
export class RestaurantService {
  private readonly log: Logger = new Logger(RestaurantService.name);

  constructor(
    private readonly database: VendorDatabaseService
  ){}

  public async getDishes(id: string): Promise<Dish[]> {
    const restaurant = await this.database.findOne(id);
    return restaurant.dishes;
  }
}
