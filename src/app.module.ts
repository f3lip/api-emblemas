import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmblemasModule } from './emblemas/emblemas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Emblemas } from './emblemas/entities/emblemas.entity';
import { EmblemasUsuariosModule } from './emblemas-usuarios/emblemas-usuarios.module';
import { EmblemasUsuarios } from './emblemas-usuarios/entities/emblemas-usuarios.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuarios } from './usuarios/entities/usuarios.entity';

@Module({
  imports: [EmblemasModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'desafioemblemas',
      entities: [Emblemas, EmblemasUsuarios, Usuarios],
      synchronize: false,
    }),
    EmblemasModule,
    EmblemasUsuariosModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
