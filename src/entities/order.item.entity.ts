import { Column, Entity, ManyToOne } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Dish } from './dish.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem extends AYumEntity {
  @ManyToOne(t => Order, u => u.orderItems)
  order: Order;

  @ManyToOne(t => Dish, d => d.orderItems)
  dish: Dish;

  @Column()
  request: string;
}
