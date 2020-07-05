import { Column, Entity, OneToMany, Unique } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Order } from './order.entity';
import { IsString, IsDefined, IsBoolean, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['email'])
export class User extends AYumEntity {
  @ApiProperty()
  @Column({nullable: false})
  @IsString({ always: true})
  name: string;

  @ApiProperty()
  @Column({nullable: false})
  @IsEmail()
  @IsDefined({ always: true})
  email: string;

  @ApiProperty()
  @Column({nullable: false})
  @IsString({always: true})
  password: string;

  @ApiProperty()
  @Column({ nullable: true })
  @IsDefined({ always: false})
  lastLoggedIn: Date;

  @ApiProperty()
  @Column({ default: false })
  @IsDefined({ always: true})
  @IsBoolean({ always: true})
  emailConfirmed: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  @IsDefined({ always: false})
  @IsString({ always: true })
  confirmToken: string;

  @ApiProperty()
  @Column({ nullable: true })
  @IsDefined({ always: false})
  confirmTokenExpires: Date;

  @ApiProperty()
  @OneToMany(t => Order, o => o.user, {nullable: true})
  @IsDefined({ always: false})
  orders: Order[];
}
