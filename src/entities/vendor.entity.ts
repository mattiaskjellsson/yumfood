import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Tag } from './tag.entity';
import { Order } from './order.entity';

@Entity()
export class Vendor extends AYumEntity {
  @Column()
  name: string;

  @ManyToMany(t => Tag, v => v.vendors)
  @JoinTable()
  tags: Tag[];

  @OneToMany(t => Order, o => o.vendor)
  orders: Order[];
}
