import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Vendor } from './vendor.entity';
import { OrderItem } from './order.item.entity';

@Entity()
export class Dish extends AYumEntity {
  @ManyToOne(t => Vendor, u => u.dishes)
  vendor: Vendor;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany(t => OrderItem, oi => oi.dish)
  orderItems: OrderItem[];
}
