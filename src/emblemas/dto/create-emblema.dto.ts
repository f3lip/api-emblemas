import { IsString } from 'class-validator';

export class CreateEmblemaDto {
    @IsString()
    slug: string;
  
    @IsString()
    name: string;
  
    @IsString()
    image: string;
}
