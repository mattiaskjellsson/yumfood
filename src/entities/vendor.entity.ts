import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Tag } from './tag.entity';
import { Order } from './order.entity';
import { Dish } from './dish.entity';
import { IsDefined, MaxLength, IsArray } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Vendor extends AYumEntity {
  @ApiProperty()
  @Column({ length: 128})
  @IsDefined({ always: true})
  @MaxLength( 128, { always: true})
  name: string;

  @ApiProperty()
  @ManyToMany(t => Tag, v => v.vendors, { nullable: false})
  @IsArray({ always: true})
  @JoinTable()
  tags: Tag[];

  @ApiProperty()
  @OneToMany(t => Order, o => o.vendor, { nullable: true})
  @IsArray({ always: true})
  orders: Order[];

  @ApiProperty()
  @OneToMany(t => Dish, d => d.vendor, { nullable: false})
  @IsArray({ always: true})
  dishes: Dish[];
}
