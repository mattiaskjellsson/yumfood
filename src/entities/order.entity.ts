import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { User } from './user.entity';
import { Vendor } from './vendor.entity';
import { OrderItem } from './order.item.entity';

@Entity()
export class Order extends AYumEntity {
  @ManyToOne(t => User, u => u.orders)
  user: User;

  @ManyToOne(t => Vendor, v => v.orders)
  vendor: Vendor;

  @OneToMany(t => OrderItem, oi => oi.order)
  orderItems: OrderItem[];

  @Column()
  request: string;
}
