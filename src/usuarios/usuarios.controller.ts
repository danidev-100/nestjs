import { Controller, Get, Post, Body, Patch, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async createUser(@Body() data : Usuarios) {

    try {
       const userCreado =  await this.usuariosService.create(data);
       if(!userCreado){
        throw new NotFoundException('usuario no creado')
       }
       return userCreado;
    } catch (error) {
      throw new NotFoundException("no se creo")
    }
   
  }

  @Get()
  async  findAll() {
    return await this.usuariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.usuariosService.findOne(id)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data : Usuarios) {
    return await this.usuariosService.update(id ,data)
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Body() data : Usuarios) {
    return await this.usuariosService.remove(id, data )
  }
}
