import { Module } from '@nestjs/common'
import { JugadoresController } from './jugadores.controller';
import { jugadoresService } from './jugadores.service';

@Module({
    controllers:[JugadoresController],
    providers:[jugadoresService]
})
export class JugadoresModule {

}