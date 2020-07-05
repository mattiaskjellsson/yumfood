import { Module } from '@nestjs/common';

import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';
import { DatabaseModule } from './../../database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    VendorService,
  ],
  controllers: [
    VendorController,
  ],
  exports: [
  ],
})
export class VendorModule {}
