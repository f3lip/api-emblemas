import { Module } from '@nestjs/common';
import { EmblemasService } from './emblemas.service';
import { EmblemasController } from './emblemas.controller';
import { Emblemas } from './entities/emblemas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmblemasController],
  imports: [TypeOrmModule.forFeature([Emblemas])],
  providers: [EmblemasService, Emblemas],
  exports: [TypeOrmModule, EmblemasService]
})
export class EmblemasModule {}
