import { PartialType } from '@nestjs/mapped-types';
import { CreateEmblemasUsuarioDto } from './create-emblemas-usuario.dto';
import { IsNotEmptyObject, IsNumber, IsObject, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Emblemas } from 'src/emblemas/entities/emblemas.entity';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';

export class UpdateEmblemasUsuarioDto extends PartialType(CreateEmblemasUsuarioDto) {
    @ApiProperty({
        type: Emblemas,
        description: 'Objeto que representa um Emblema',
    })
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => Emblemas)
    emblemas: Emblemas;

    @ApiProperty({
        type: Emblemas,
        description: 'Objeto que representa um Usuário',
    })
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => Usuarios)
    usuarios: Usuarios

    constructor( emblemas: Emblemas, usuarios: Usuarios) {
        super();
        this.emblemas = emblemas;
        this.usuarios = usuarios;
    }
}
