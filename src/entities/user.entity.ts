import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Order } from './order.entity';

@Entity()
@Unique(['email'])
export class User extends AYumEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  lastLoggedIn: Date;

  @Column({ default: false })
  emailConfirmed: boolean;

  @Column({ nullable: true })
  confirmToken: string;

  @Column({ nullable: true })
  confirmTokenExpires: Date;

  @OneToMany(t => Order, o => o.user, {nullable: true})
  orders: Order[];
}
