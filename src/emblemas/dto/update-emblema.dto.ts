import { PartialType } from '@nestjs/mapped-types';
import { CreateEmblemaDto } from './create-emblema.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmblemaDto extends PartialType(CreateEmblemaDto) {
    @ApiProperty({
        type: String,
        description: 'Slug do emblema',
    })
    @IsString()
    slug: string;
  
    @ApiProperty({
        type: String,
        description: 'Nome do emblema',
    })
    @IsString()
    name: string;
  
    @ApiProperty({
        type: String,
        description: 'Link da imagem vinculada ao emblema',
    })
    @IsString()
    image: string;

    constructor( slug: string, name: string, image: string) {
        super();
        this.slug = slug;
        this.name = name;
        this.image = image;
    }
}
