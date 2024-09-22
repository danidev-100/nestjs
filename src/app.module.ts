import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FotocopiasModule } from './fotocopias/fotocopias.module';
@Module({
  imports: [ UsuariosModule, FotocopiasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
