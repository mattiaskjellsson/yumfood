import { Controller, Logger} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Crud({
  model: {
    type: User,
  },
  query: {
    join: {
      orders: { eager: true },
    }
  },
})
@Controller('admin/user')
export class UserController {
  private readonly log: Logger = new Logger(UserService.name);

  constructor(private readonly service: UserService) {}

}