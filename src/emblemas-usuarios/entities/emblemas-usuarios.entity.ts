import { Emblemas } from 'src/emblemas/entities/emblemas.entity';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({name: 'emblemas_usuarios'})
export class EmblemasUsuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Emblemas, emblemas => emblemas.id)
  @JoinColumn({name: 'emblemas'})
  emblemas: Emblemas;

  @ManyToOne(type => Usuarios, usuarios => usuarios.id)
  @JoinColumn({name: 'usuarios'})
  usuarios: Usuarios;
}