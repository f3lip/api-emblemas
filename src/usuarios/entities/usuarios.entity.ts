import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    name: string;
}
