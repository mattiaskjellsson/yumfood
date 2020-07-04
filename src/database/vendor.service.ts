import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Vendor } from '../entities/vendor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VendorDatabaseService extends TypeOrmCrudService<Vendor> {
  constructor(@InjectRepository(Vendor) repo) {
    super(repo);
  }

}
