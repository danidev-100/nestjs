import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { jugadoresService } from './jugadores.service';

@Controller('/jugadores')
export class JugadoresController {
  jugadoresService: jugadoresService;

  constructor(jugadoresService: jugadoresService) {
    this.jugadoresService = jugadoresService;
  }

  @Get()
  getAllJugadores() {
    return this.jugadoresService.getJugadores()
  }
  @Post()
  createJugadores(@Body()jugadores: any) {
    return this.jugadoresService.createJugadores(jugadores)
  }
  @Put()
  updateJugadores() {
    return this.jugadoresService.updateJugadores()
  }
  @Delete()
  deleteJugadores() {
    return this.jugadoresService.deleteJugadores()
  }
  @Get('/:id')
  getJugador(@Param('id') id : string) {
    return this.jugadoresService.getJugador(parseInt(id))
  }
}
