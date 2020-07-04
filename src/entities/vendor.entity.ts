import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Tag } from './tag.entity';
import { Order } from './order.entity';
import { Dish } from './dish.entity';

@Entity()
export class Vendor extends AYumEntity {
  @Column({ length: 128})
  name: string;

  @ManyToMany(t => Tag, v => v.vendors)
  @JoinTable()
  tags: Tag[];

  @OneToMany(t => Order, o => o.vendor)
  orders: Order[];

  @OneToMany(t => Dish, d => d.vendor)
  dishes: Dish[];
}
