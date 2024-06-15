import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Emblemas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  image: string;
}