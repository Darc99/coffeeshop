import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity/flavor.entity';

/* eslint-disable prettier/prettier */
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @Column('json', {nullable: true})
  @JoinTable()
  // @ManyToMany(type => Flavor, (flavor) => flavor.coffees)
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees)
  flavors: string[];
}
