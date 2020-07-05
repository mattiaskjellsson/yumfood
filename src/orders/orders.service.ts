import { Injectable, Logger } from '@nestjs/common';
import { OrderDto } from '../dto/order';
import { Order } from '../entities/order.entity';
import { OrderDatabaseService } from '../database/order.service';
import { OrderItem } from '../entities/order.item.entity';
// import { Dish } from '../entities/dish.entity';
import { OrderItemDatabaseService } from '../database/order.item.service';
// import { User } from '../entities/user.entity';
// import { Vendor } from '../entities/vendor.entity';
import { DishDatabaseService } from '../database/dish.service';
import { UserDatabaseService } from '../database/user.service';
import { VendorDatabaseService } from '../database/vendor.service';

@Injectable()
export class OrdersService {
  private readonly log: Logger = new Logger(OrdersService.name);
  constructor(
    private readonly orderDatabase: OrderDatabaseService,
    private readonly orderItemDatabase: OrderItemDatabaseService,
    private readonly dishDatabase: DishDatabaseService,
    private readonly userDatabase: UserDatabaseService,
    private readonly vendorDatabase: VendorDatabaseService,
  ) {}

  public async create(orderDto: OrderDto): Promise<Order> {
    const order = new Order();
    order.user = await this.userDatabase.findOne(orderDto.userId);
    order.vendor = await this.vendorDatabase.findOne(orderDto.vendorId);
    this.log.debug('1');

    const orderItemPromises = orderDto.orderItems.map(async x => {
      const oi = new OrderItem();
      oi.dish = await this.dishDatabase.findOne(x.dishId);
      oi.request = x.request;
      return await this.orderItemDatabase.createOne(null, oi);
    });

    this.log.debug('2');
    order.orderItems = await Promise.all(orderItemPromises);
    this.log.debug('3');
    order.request = orderDto.request;

    this.log.debug(`Order created: ${order}`);
    const savedOrder = await this.orderDatabase.createOne(null, order);
    this.log.debug(`Saved order: ${JSON.stringify(savedOrder)}`);
    return savedOrder;
  }

  public async userOrders(id: string): Promise<Order[]> {
    throw Error(`Not implemented yet`);
  }

  public async vendorOrders(id: string): Promise<Order[]> {
    throw Error(`Not implemented yet`);
  }
}
