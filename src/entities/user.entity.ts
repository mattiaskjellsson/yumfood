import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Order } from './order.entity';

@Entity()
@Unique(['email'])
export class User extends AYumEntity {
  @Column()
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  lastLoggedIn: Date;

  @Column({ default: false })
  emailConfirmed: boolean;

  @Column({ nullable: true })
  confirmToken: string;

  @Column({ nullable: true })
  confirmTokenExpires: Date;

  @Column({ nullable: true })
  newPasswordToken: string;

  @OneToMany(t => Order, o => o.user)
  orders: Order[];
}
