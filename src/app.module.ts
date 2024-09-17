import { Module } from '@nestjs/common';
import {JugadoresModule} from './jugadores/jugadores.module'
import { CuotasModule } from './cuotas/cuotas.module';
@Module({
  imports: [JugadoresModule, CuotasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
