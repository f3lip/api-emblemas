import { IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    user: string;

    @IsString()
    name: string;
}
