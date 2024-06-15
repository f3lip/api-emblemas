import { Module, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuarios.entity';

@Module({
  controllers: [UsuariosController],
  imports: [TypeOrmModule.forFeature([Usuarios])],
  providers: [UsuariosService, Usuarios],
  exports: [TypeOrmModule, UsuariosService]
})
export class UsuariosModule {}