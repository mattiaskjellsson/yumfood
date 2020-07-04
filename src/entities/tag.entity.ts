import { Column, Entity, ManyToMany } from 'typeorm';
import { AYumEntity } from './aYumEntity';
import { Vendor } from './vendor.entity';

@Entity()
export class Tag extends AYumEntity {
  @Column()
  name: string;

  @ManyToMany(t => Vendor, v => v.tags)
  vendors: Vendor[];
}
