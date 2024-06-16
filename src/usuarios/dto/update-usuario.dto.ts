import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @ApiProperty({
        type: String,
        description: 'Login do Usuário',
    })
    @IsString()
    user: string;

    @ApiProperty({
        type: String,
        description: 'Nome do Usuário',
    })
    @IsString()
    name: string;

    constructor( user: string, name: string) {
        super();
        this.user = user;
        this.name = name;
    }
}
