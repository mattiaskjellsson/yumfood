import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Vendor } from './vendor.entity';
import { OrderItem } from './order.item.entity';
import { IsString, IsNumber, Min, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Dish extends AYumEntity {
  @ApiProperty()
  @ManyToOne(t => Vendor, u => u.dishes)
  vendor: Vendor;

  @ApiProperty()
  @Column()
  @IsDefined({always: true})
  @IsString({ always: true})
  name: string;

  @ApiProperty()
  @Column()
  @IsDefined({ always: true})
  @IsNumber()
  @Min(0, {always: true})
  price: number;

  @ApiProperty()
  @OneToMany(t => OrderItem, oi => oi.dish, { nullable: true})
  @IsDefined({ always: false})
  orderItems: OrderItem[];
}
