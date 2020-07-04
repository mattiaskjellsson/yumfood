import { Controller, Logger} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { VendorService } from './vendor.service';
import { Vendor } from '../../entities/vendor.entity';

@Crud({
  model: {
    type: Vendor,
  },
})
@Controller('admin/vendor')
export class VendorController {
  private readonly log: Logger = new Logger(VendorController.name);

  constructor(private readonly service: VendorService) {}

}
