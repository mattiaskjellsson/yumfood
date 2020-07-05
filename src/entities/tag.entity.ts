import { Column, Entity, ManyToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Vendor } from './vendor.entity';
import { IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Tag extends AYumEntity {
  @ApiProperty()
  @Column({ nullable: false})
  @IsDefined({ always: true })
  name: string;

  @ApiProperty()
  @ManyToMany(t => Vendor, v => v.tags)
  vendors: Vendor[];
}
