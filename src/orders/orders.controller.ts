/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Logger, Post, Body, Get, Param, Response, Res } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from '../dto/order';
import { Order } from '../entities/order.entity';

@Controller('orders')
export class OrdersController {
  private readonly log: Logger = new Logger(OrdersController.name);

  constructor(
    private readonly service: OrdersService,
  ){}

  @Post()
  public async placeOrder(
    @Response() res,
    @Body() order: OrderDto, 
  ) {
    try {
      const o: Order = await this.service.create(order);
      res.status(200).json(o).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }

  @Get('user/:id')
  public async user(
    @Param('id') id: string,
    @Res() resp: any,
  ) {
    try {
      const orders = this.service.userOrders(id);
      resp.status(200).json(orders).send();
    } catch (e) {
      this.log.error(e);
      resp.status(500).json(e).send();
    }
  }

  @Get('vendor/:id')
  public async vendor(
    @Param('id') id: string,
    @Res() res: any,
  ) {
    try {
      const orders = this.service.vendorOrders(id);
      res.status(200).json(orders).send();
    } catch (e) {
      this.log.error(e);
      res.status(500).json(e).send();
    }
  }
}
