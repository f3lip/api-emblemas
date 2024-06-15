import { IsObject, IsNotEmptyObject, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';
import { Emblemas } from 'src/emblemas/entities/emblemas.entity';
import { Usuarios } from 'src/usuarios/entities/usuarios.entity';

export class CreateEmblemasUsuarioDto {
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => Emblemas)
    emblemas: Emblemas;

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
