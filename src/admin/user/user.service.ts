import { Injectable } from '@nestjs/common';
import { UserDatabaseService } from '../../database/user.service';

@Injectable()
export class UserService extends UserDatabaseService {}

