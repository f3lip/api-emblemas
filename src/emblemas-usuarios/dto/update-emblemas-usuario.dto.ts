import { PartialType } from '@nestjs/mapped-types';
import { CreateEmblemasUsuarioDto } from './create-emblemas-usuario.dto';
import { IsNumber } from 'class-validator';

export class UpdateEmblemasUsuarioDto extends PartialType(CreateEmblemasUsuarioDto) {
    @IsNumber()
    i_emblemas: number;

    @IsNumber()
    i_usuarios: number;
}
