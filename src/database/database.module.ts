import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { Tag } from '../entities/tag.entity';
import { Vendor } from '../entities/vendor.entity';
import { VendorDatabaseService } from './vendor.service';
import { OrderItem } from '../entities/order.item.entity';
import { Dish } from '../entities/dish.entity';
import { OrderItemDatabaseService } from './order.item.service';
import { OrderDatabaseService } from './order.service';
import { DishDatabaseService } from './dish.service';
import { UserDatabaseService } from './user.service';

const enteties = [
  Dish,
  Order,
  OrderItem,
  Tag,
  User,
  Vendor,
];

const services: any[] = [
  DishDatabaseService,
  OrderItemDatabaseService,
  OrderDatabaseService,
  UserDatabaseService,
  VendorDatabaseService,
];

@Module({
  providers: [
  ].concat(services),
  imports: [
    TypeOrmModule.forFeature(enteties),
  ],
  exports: [
    TypeOrmModule.forFeature(enteties),
  ].concat(services),
})
export class DatabaseModule {
}
