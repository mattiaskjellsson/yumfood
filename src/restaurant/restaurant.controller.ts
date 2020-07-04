import { Controller, Logger, Get, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  private readonly log: Logger = new Logger(RestaurantController.name);

  constructor(
    private readonly service: RestaurantService
  ) {}

  @Get('/:id/dishes')
  public async getDishes(@Param('id') id: string): Promise<any> {
    this.log.debug(id);

    return this.service.getDishes(id);
  }
}
