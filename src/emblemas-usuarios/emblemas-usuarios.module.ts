import { Module } from '@nestjs/common';
import { EmblemasUsuariosService } from './emblemas-usuarios.service';
import { EmblemasUsuariosController } from './emblemas-usuarios.controller';
import { EmblemasUsuarios } from './entities/emblemas-usuarios.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmblemasModule } from 'src/emblemas/emblemas.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  controllers: [EmblemasUsuariosController],
  imports: [TypeOrmModule.forFeature([EmblemasUsuarios]), EmblemasModule, UsuariosModule],
  providers: [EmblemasUsuariosService, EmblemasUsuarios],
  exports: [TypeOrmModule]
})
export class EmblemasUsuariosModule {}
