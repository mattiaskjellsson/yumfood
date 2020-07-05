/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Logger, Get, Param, Response, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  private readonly log: Logger = new Logger(RestaurantController.name);

  constructor(
    private readonly service: RestaurantService
  ) {}

  @Get()
  public async list(@Response() res, @Query() query): Promise<any> {
    try {
      const vendors = await this.service.getAll(query);
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
      const dishes = await this.service.getDishes(id);
      res.status(200).json(dishes).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }
}
