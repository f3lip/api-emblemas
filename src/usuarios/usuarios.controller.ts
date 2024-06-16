import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Usuarios } from './entities/usuarios.entity';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: Usuarios,
    isArray: false,
  })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get()
  @ApiOkResponse({
    type: Usuarios,
    isArray: true,
  })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: Usuarios,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: Usuarios,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Excluído com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
