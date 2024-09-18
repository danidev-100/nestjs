import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class jugadoresService{
    constructor(private prisma : PrismaService){

    }
    getJugador(id:number){
        this.prisma.jugadores.findMany()
       
    }
    
    async getJugadores(){
        return await this.prisma.jugadores.findMany()
       
    }

    createJugadores(jugadores: any){
        return 'Jugador creado'
    }

    updateJugadores(){
        return 'Jugador actualizado'
    }

    deleteJugadores(){
        return 'Jugador eliminado'
    }


}