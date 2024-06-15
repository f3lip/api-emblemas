import { PartialType } from '@nestjs/mapped-types';
import { CreateEmblemaDto } from './create-emblema.dto';
import { IsString } from 'class-validator';

export class UpdateEmblemaDto extends PartialType(CreateEmblemaDto) {
    @IsString()
    slug: string;
  
    @IsString()
    name: string;
  
    @IsString()
    image: string;
}
