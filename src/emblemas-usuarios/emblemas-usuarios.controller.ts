import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmblemasUsuariosService } from './emblemas-usuarios.service';
import { CreateEmblemasUsuarioDto } from './dto/create-emblemas-usuario.dto';
import { UpdateEmblemasUsuarioDto } from './dto/update-emblemas-usuario.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EmblemasUsuarios } from './entities/emblemas-usuarios.entity';

@ApiTags('Emblemas Usuários')
@Controller('emblemas-usuarios')
export class EmblemasUsuariosController {
  constructor(private readonly emblemasUsuariosService: EmblemasUsuariosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: EmblemasUsuarios,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  create(@Body() createEmblemasUsuarioDto: CreateEmblemasUsuarioDto) {
    return this.emblemasUsuariosService.create(createEmblemasUsuarioDto);
  }

  @Get()
  @ApiOkResponse({
    type: EmblemasUsuarios,
    isArray: true,
  })
  findAll() {
    return this.emblemasUsuariosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: EmblemasUsuarios,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.emblemasUsuariosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: EmblemasUsuarios,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  update(@Param('id') id: string, @Body() updateEmblemasUsuarioDto: UpdateEmblemasUsuarioDto) {
    return this.emblemasUsuariosService.update(+id, updateEmblemasUsuarioDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Excluído com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  remove(@Param('id') id: string) {
    return this.emblemasUsuariosService.remove(+id);
  }

  @Post('resgatarEmblemaBySlug/:slug/:idUsuario')
  @ApiCreatedResponse({
    description: 'Resgatado com sucesso',
    type: EmblemasUsuarios,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  resgatarEmblemaBySlug(@Param('slug') slug: string, @Param('idUsuario') idUsuario: number) {
    return this.emblemasUsuariosService.resgatarEmblemaBySlug(slug, idUsuario);
  }

  @Get('listarEmblemasByUsuario/:idUsuario')
  @ApiOkResponse({
    type: EmblemasUsuarios,
    isArray: true,
  })
  listarEmblemasByUsuario(@Param('idUsuario') idUsuario: number) {
    return this.emblemasUsuariosService.listarEmblemasByUsuario(idUsuario);
  }
}
