import { IsObject, IsNotEmptyObject, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { Emblemas } from 'src/emblemas/entities/emblemas.entity';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmblemasUsuarioDto {
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
    usuarios: Usuarios;

    constructor( emblemas: Emblemas, usuarios: Usuarios) {
        this.emblemas = emblemas;
        this.usuarios = usuarios;
    }
}
