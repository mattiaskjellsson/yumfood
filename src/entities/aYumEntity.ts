import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export abstract class AYumEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({name: 'created', type: 'timestamp with time zone' })
  public created: Date;

  @UpdateDateColumn({name: 'updated', type: 'timestamp with time zone' })
  public updated: Date;

  @VersionColumn({ default: 1 })
  version: number;
}
