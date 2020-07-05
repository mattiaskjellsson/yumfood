import { Injectable } from '@nestjs/common';

import { VendorDatabaseService } from './../../database/vendor.service';

@Injectable()
export class VendorService extends VendorDatabaseService {
}
