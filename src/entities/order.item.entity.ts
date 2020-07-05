import { Column, Entity, ManyToOne } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Dish } from './dish.entity';
import { Order } from './order.entity';
import { IsDefined, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class OrderItem extends AYumEntity {
  @ApiProperty()
  @IsDefined({ always: true })
  @ManyToOne(t => Order, u => u.orderItems, { nullable: false})
  order: Order;

  @ApiProperty()
  @IsDefined({ always: true })
  @ManyToOne(t => Dish, d => d.orderItems, { nullable: false })
  dish: Dish;

  @ApiProperty()
  @Column({ nullable: true})
  @IsString({ always: false})
  request: string;
}
