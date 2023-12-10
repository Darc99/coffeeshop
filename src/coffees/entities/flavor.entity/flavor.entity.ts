import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from '../coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  // @ManyToMany(type => Coffee, coffee => coffee.flavors)
  @ManyToMany(type => Coffee, (Coffee) => Coffee.flavors)
  coffees: Coffee[];
}
