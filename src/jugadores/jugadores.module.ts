import { Module } from '@nestjs/common'
import { JugadoresController } from './jugadores.controller';
import { jugadoresService } from './jugadores.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers:[JugadoresController],
    providers:[jugadoresService],
    imports:[PrismaModule]
})
export class JugadoresModule {

}