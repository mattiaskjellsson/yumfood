import { Controller, Logger, Get, Param, Res } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  private readonly log: Logger = new Logger(RestaurantController.name);

  constructor(
    private readonly service: RestaurantService
  ) {}

  @Get()
  public async list(): Promise<any> {
    this.log.debug(`List vendors`);
    try {
      return this.service.getAll();
    } catch (e) {
      this.log.error(e);
    }
  }

  @Get('/:id')
  public async getVendor(@Param('id') id: string): Promise<any> {
    try {
      this.log.debug('Get vendor ${id}')
      return await this.service.get(id);
    } catch (e) {
      this.log.error(e);
    }
  }

  @Get('/:id/dishes')
  public async getDishes(@Param('id') id: string): Promise<any> {
    try {
      this.log.debug(`Get dishes for restaurant: ${id}`);
      return this.service.getDishes(id);
    } catch (e) {
      this.log.error(e);
    }
  }
}
