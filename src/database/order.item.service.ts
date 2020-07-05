/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from '../entities/order.item.entity';

@Injectable()
export class OrderItemDatabaseService extends TypeOrmCrudService<OrderItem> {
  constructor(@InjectRepository(OrderItem) repo) {
    super(repo);
  }

  public async save(oi: OrderItem): Promise<OrderItem> {
      return await this.repo.save(oi);
  }
}
