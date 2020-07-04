import { Module } from '@nestjs/common';

import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [
    VendorService,
  ],
  controllers: [
    VendorController,
  ],
  imports: [
    DatabaseModule,
  ],
  exports: [
  ],
})
export class VendorModule {}
