import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUsuarioDto {
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
        this.user = user;
        this.name = name;
    }
}
