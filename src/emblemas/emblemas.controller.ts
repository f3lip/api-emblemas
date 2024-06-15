import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmblemasService } from './emblemas.service';
import { CreateEmblemaDto } from './dto/create-emblema.dto';
import { UpdateEmblemaDto } from './dto/update-emblema.dto';

@Controller('emblemas')
export class EmblemasController {
  constructor(private readonly emblemasService: EmblemasService) {}

  @Post()
  create(@Body() createEmblemaDto: CreateEmblemaDto) {
    return this.emblemasService.create(createEmblemaDto);
  }

  @Get()
  findAll() {
    return this.emblemasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emblemasService.findOne(+id);
  }

  @Get('findOneBySlug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.emblemasService.findOneBySlug(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmblemaDto: UpdateEmblemaDto) {
    return this.emblemasService.update(+id, updateEmblemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emblemasService.remove(+id);
  }
}
