import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios } from './entities/usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private usuariosRepository: Repository<Usuarios>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosRepository.save(createUsuarioDto);;
  }

  async findAll(): Promise<Usuarios[]>{
    return await this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuarios> {
    return await this.usuariosRepository.findOneBy({id});
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    return this.usuariosRepository.delete(id);
  }
}
