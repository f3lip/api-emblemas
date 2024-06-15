import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmblemasUsuariosService } from './emblemas-usuarios.service';
import { CreateEmblemasUsuarioDto } from './dto/create-emblemas-usuario.dto';
import { UpdateEmblemasUsuarioDto } from './dto/update-emblemas-usuario.dto';

@Controller('emblemas-usuarios')
export class EmblemasUsuariosController {
  constructor(private readonly emblemasUsuariosService: EmblemasUsuariosService) {}

  @Post()
  create(@Body() createEmblemasUsuarioDto: CreateEmblemasUsuarioDto) {
    return this.emblemasUsuariosService.create(createEmblemasUsuarioDto);
  }

  @Get()
  findAll() {
    return this.emblemasUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emblemasUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmblemasUsuarioDto: UpdateEmblemasUsuarioDto) {
    return this.emblemasUsuariosService.update(+id, updateEmblemasUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emblemasUsuariosService.remove(+id);
  }

  @Post('resgatarEmblemaBySlug/:slug/:idUsuario')
  resgatarEmblemaBySlug(@Param('slug') slug: string, @Param('idUsuario') idUsuario: number) {
    return this.emblemasUsuariosService.resgatarEmblemaBySlug(slug, idUsuario);
  }

  @Get('listarEmblemasByUsuario/:idUsuario')
  listarEmblemasByUsuario(@Param('idUsuario') idUsuario: number) {
    return this.emblemasUsuariosService.listarEmblemasByUsuario(idUsuario);
  }
}
