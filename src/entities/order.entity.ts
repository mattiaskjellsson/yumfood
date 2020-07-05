import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { User } from './user.entity';
import { Vendor } from './vendor.entity';
import { OrderItem } from './order.item.entity';
import { IsDefined, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order extends AYumEntity {
  @ApiProperty()
  @IsDefined({ always: true})
  @ManyToOne(t => User, u => u.orders, { nullable: false})
  user: User;

  @ApiProperty()
  @IsDefined({ always: true})
  @ManyToOne(t => Vendor, v => v.orders, { nullable: false})
  vendor: Vendor;

  @ApiProperty()
  @IsDefined({ always: true})
  @IsArray({ always: true})
  @OneToMany(t => OrderItem, oi => oi.order, { nullable: false})
  orderItems: OrderItem[];

  @ApiProperty()
  @Column({ nullable: true})
  @IsDefined({ always: false})
  @IsString({ always: false})
  request: string;
}
