import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { VendorDatabaseService } from '../database/vendor.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    RestaurantController
  ],
  providers: [
    RestaurantService,
    VendorDatabaseService,
  ]
})
export class RestaurantModule {}
