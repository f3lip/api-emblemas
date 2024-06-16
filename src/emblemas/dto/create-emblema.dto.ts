import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEmblemaDto {
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
        this.slug = slug;
        this.name = name;
        this.image = image;
    }
}
