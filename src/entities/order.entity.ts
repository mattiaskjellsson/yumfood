import { Column, Entity, ManyToOne } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { User } from './user.entity';
import { Vendor } from './vendor.entity';

@Entity()
export class Order extends AYumEntity {
  @ManyToOne(t => User, u => u.orders)
  user: User;

  @ManyToOne(t => Vendor, v => v.orders)
  vendor: Vendor;

  @Column()
  request: string;
}
