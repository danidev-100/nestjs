import { Injectable } from "@nestjs/common";

@Injectable()
export class jugadoresService{
    getJugadores(){
        return [
            {id:1, nombre:'jugador1'},
            {id:2, nombre:'jugador2'},
            {id:3, nombre:'jugador3'}
        ]
    }
    getJugador(id:number){
       
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