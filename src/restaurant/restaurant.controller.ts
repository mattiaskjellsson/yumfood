/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Logger, Get, Param, Response } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  private readonly log: Logger = new Logger(RestaurantController.name);

  constructor(
    private readonly service: RestaurantService
  ) {}

  @Get()
  public async list(@Response() res): Promise<any> {
    this.log.debug(`List vendors`);
    try {
      const vendors = await this.service.getAll();
      res.status(200).json(vendors).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }

  @Get('/:id')
  public async getVendor(
    @Param('id') id: string,
    @Response() res): Promise<any> {
    try {
      this.log.debug('Get vendor ${id}')
      const vendor = await this.service.get(id);
      res.status(200).json(vendor).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }

  @Get('/:id/dishes')
  public async getDishes(
    @Param('id') id: string,
    @Response() res): Promise<any> {
    try {
      this.log.debug(`Get dishes for restaurant: ${id}`);
      const dishes = await this.service.getDishes(id);
      res.status(200).json(dishes).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }
}
