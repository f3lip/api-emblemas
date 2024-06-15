import { Injectable, Inject, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmblemasUsuarioDto } from './dto/create-emblemas-usuario.dto';
import { UpdateEmblemasUsuarioDto } from './dto/update-emblemas-usuario.dto';
import { EmblemasUsuarios } from './entities/emblemas-usuarios.entity';
import { EmblemasService } from '../emblemas/emblemas.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class EmblemasUsuariosService {
  constructor(
    @InjectRepository(EmblemasUsuarios)
    private emblemasUsuariosRepository: Repository<EmblemasUsuarios>,
  ) {}

  @Inject(EmblemasService)
  private readonly emblemasService: EmblemasService;

  @Inject(UsuariosService)
  private readonly usuariosService: UsuariosService;

  create(createEmblemasUsuarioDto: CreateEmblemasUsuarioDto) {
    return this.emblemasUsuariosRepository.save(createEmblemasUsuarioDto);
  }

  async resgatarEmblemaBySlug(slug: string, idUsuario: number): Promise<EmblemasUsuarios> {
    const emblemaDB = await this.emblemasService.findOneBySlug(slug);
    const usuarioDB = await this.usuariosService.findOne(idUsuario);
    if(await this.validarEmblemaResgatadoAnteriormente(emblemaDB.id, usuarioDB.id)) {
      throw new ForbiddenException("O usuário '" + usuarioDB.user + "' já resgatou o emblema '" + emblemaDB.name + "' (slug: '" + emblemaDB.slug +"').");
    } else {
      const emblemaUsuario = new CreateEmblemasUsuarioDto(emblemaDB, usuarioDB);
      return this.create(emblemaUsuario);
    }
  }

  async listarEmblemasByUsuario(idUsuario: number): Promise<EmblemasUsuarios[]> {
    return this.emblemasUsuariosRepository.find({
      select: {
        emblemas: {
          id: true,
          slug: true,
          name: true,
          image: true
        }
      },
      relations: {
        emblemas: true
      },
      where: {
        usuarios: { 
          id: idUsuario
        }
      }
    });
  }

  async findAll() {
    return this.emblemasUsuariosRepository.find();
  }

  async findOne(id: number) {
    return this.emblemasUsuariosRepository.findBy({id});
  }

  async update(id: number, updateEmblemasUsuarioDto: UpdateEmblemasUsuarioDto) {
    return this.emblemasUsuariosRepository.update(id, updateEmblemasUsuarioDto);
  }

  async remove(id: number) {
    return this.emblemasUsuariosRepository.delete(id);
  }

  async validarEmblemaResgatadoAnteriormente(idEmblema: number, idUsuario: number): Promise<Boolean> {
    return this.emblemasUsuariosRepository.exists({
      where: {
        emblemas: {
          id: idEmblema
        }, 
        usuarios: {
          id: idUsuario
        }
      }
    });
  }
}
