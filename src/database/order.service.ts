/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderDatabaseService extends TypeOrmCrudService<Order> {
  private readonly log: Logger = new Logger(OrderDatabaseService.name);

  constructor(@InjectRepository(Order) repo) {
    super(repo);
  }

  public async saveOrder(o: Order) : Promise<Order> {
    const oo = await this.repo.save(o);  
    return oo;
  }
}
