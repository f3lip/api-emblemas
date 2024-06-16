import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmblemasService } from './emblemas.service';
import { CreateEmblemaDto } from './dto/create-emblema.dto';
import { UpdateEmblemaDto } from './dto/update-emblema.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Emblemas } from './entities/emblemas.entity';

@ApiTags('Emblemas')
@Controller('emblemas')
export class EmblemasController {
  constructor(private readonly emblemasService: EmblemasService) {}

  @ApiCreatedResponse({
    description: 'Criado com sucesso',
    type: Emblemas,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post()
  create(@Body() createEmblemaDto: CreateEmblemaDto) {
    return this.emblemasService.create(createEmblemaDto);
  }

  @Get()
  @ApiOkResponse({
    type: Emblemas,
    isArray: true,
  })
  findAll() {
    return this.emblemasService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: Emblemas,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.emblemasService.findOne(+id);
  }

  @Get('findOneBySlug/:slug')
  @ApiOkResponse({
    type: Emblemas,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  findOneBySlug(@Param('slug') slug: string) {
    return this.emblemasService.findOneBySlug(slug);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: Emblemas,
    isArray: false,
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  update(@Param('id') id: string, @Body() updateEmblemaDto: UpdateEmblemaDto) {
    return this.emblemasService.update(+id, updateEmblemaDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Excluído com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Não encontrado',
  })
  remove(@Param('id') id: string) {
    return this.emblemasService.remove(+id);
  }
}
