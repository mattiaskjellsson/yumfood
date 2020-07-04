import { MigrationInterface, QueryRunner, getRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

const users = [
  {
    "name": "Sauer Schaden",
    "email": "Sauer.schaden@example.com",
    "password": "u6BvOBfvZLbFJH_",
  },
  {
    "name": "Marcus Tester",
    "email": "erik@wikgren.com",
    "password": "@!#LFL:EN:VDdlsf",
  },
  {
    "name": "Malin Eklund",
    "email": "malin@eklund.com",
    "password": ")(;:LS::Ddsf;n;vsf",
  },
  {
    "name": "Inspector Macintosh",
    "email": "inspector@apple.com",
    "password": "Jasdf*#N:NL45dgF(FF",
  }
]
export class users1593875426561 implements MigrationInterface {
  private readonly userRepo: Repository<User> = getRepository(User);
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    users.forEach(x => {
      const u = new User();
      u.email = x.email;
      u.name = x.name;
      u.password = x.password;
      u.confirmToken = (Math.floor(+(Math.random().toFixed(5))*100000+1)).toString();
      u.emailConfirmed = false;
      u.confirmTokenExpires = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24 * 30);
      this.userRepo.save(u);
    });

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
