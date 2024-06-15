import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmblemaDto } from './dto/create-emblema.dto';
import { UpdateEmblemaDto } from './dto/update-emblema.dto';
import { Emblemas } from './entities/emblemas.entity';

@Injectable()
export class EmblemasService {
  constructor(
    @InjectRepository(Emblemas)
    private emblemasRepository: Repository<Emblemas>,
  ) {}

  create(createEmblemaDto: CreateEmblemaDto) {
    return this.emblemasRepository.create(createEmblemaDto);
  }

  async findAll(): Promise<Emblemas[]> {
    return await this.emblemasRepository.find();
  }

  async findOne(id: number): Promise<Emblemas> {
    return await this.emblemasRepository.findOneBy({id});
  }

  async findOneBySlug(slug: string): Promise<Emblemas> {
    return await this.emblemasRepository.findOneBy({slug});
  }

  update(id: number, updateEmblemaDto: UpdateEmblemaDto) {
    return this.emblemasRepository.update(id, updateEmblemaDto)
  }

  remove(id: number) {
    return this.emblemasRepository.delete(id);
  }
}
