import { Controller, Logger, Post, Body, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from 'src/dto/order';
import { Order } from 'src/entities/order.entity';

@Controller('orders')
export class OrdersController {
  private readonly log: Logger = new Logger(OrdersController.name);

  constructor(
    private readonly service: OrdersService,
  ){}

  @Post()
  public async placeOrder(@Body() order: OrderDto): Promise<any> {
    this.log.debug(`Place Order ${JSON.stringify(order)}`);
  }

  @Get('user/:id')
  public async userOrders(@Param('id') id: string): Promise<Order[]> {
    this.log.debug(`Get users (${id}) orders`);

    return null;
  }
}
