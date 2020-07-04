import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';
import { Tag } from '../entities/tag.entity';
import { Vendor } from '../entities/vendor.entity';
import { VendorDatabaseService } from './vendor.service';
import { OrderItem } from '../entities/order.item.entity';
import { Dish } from '../entities/dish.entity';

const enteties = [
  Dish,
  Order,
  OrderItem,
  Tag,
  User,
  Vendor,
];

const services: any[] = [
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
