import { Injectable, Logger } from '@nestjs/common';
import { OrderDto } from '../dto/order';
import { Order } from '../entities/order.entity';
import { OrderDatabaseService } from '../database/order.service';
import { OrderItem } from '../entities/order.item.entity';
import { OrderItemDatabaseService } from '../database/order.item.service';
import { DishDatabaseService } from '../database/dish.service';
import { UserDatabaseService } from '../database/user.service';
import { VendorDatabaseService } from '../database/vendor.service';

@Injectable()
export class OrdersService {
  private readonly log: Logger = new Logger(OrdersService.name);

  constructor(
    private readonly orderDatabase: OrderDatabaseService,
    private readonly dishDatabaseService: DishDatabaseService,
    private readonly orderItemDatabase: OrderItemDatabaseService,
    private readonly userDatabase: UserDatabaseService,
    private readonly vendorDatabase: VendorDatabaseService,
  ) {}

  public async create(orderDto: OrderDto): Promise<Order> {
    const order = new Order();
    order.user = await this.userDatabase.findOne(orderDto.userId);
    order.vendor = await this.vendorDatabase.findOne(orderDto.vendorId);
    order.request = orderDto.request;
    
    const savedOrder = await this.orderDatabase.saveOrder(order);
    
    const orderItems = orderDto.orderItems.map(async x => {
      const oi = new OrderItem();
      oi.dish = await this.dishDatabaseService.findOne(x.dishId);
      oi.order = new Order();
      oi.order.id = savedOrder.id;
      oi.request = x.request;
      return this.orderItemDatabase.save(oi);
    });

    savedOrder.orderItems = await Promise.all(orderItems);

    return savedOrder;
  }

  public async userOrders(id: string): Promise<Order[]> {
    const user = await this.userDatabase.findOne({
      where: { id },
      relations: [
        'orders',
        'orders.orderItems',
        'orders.vendor',
        'orders.vendor.tags'
      ],
    });

    return user.orders;
  }

  public async vendorOrders(id: string): Promise<Order[]> {
    throw Error(`Not implemented yet`);
  }
}
