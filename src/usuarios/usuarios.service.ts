import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Usuarios } from '@prisma/client';

@Injectable()
export class UsuariosService {

constructor( private readonly prisma : PrismaService){


}

  async create(data : Usuarios) : Promise<Usuarios> {
    return  await this.prisma.usuarios.create({
      data

    })
  }

  async findAll() : Promise<Usuarios[]> {

    try {
      const usuarios =  await this.prisma.usuarios.findMany()
      if(!usuarios){
          throw new NotFoundException('Usuarios no encontrados')
      }
      return usuarios
    } catch (error) {
      throw new NotFoundException('Usuarios no encontrados')
      
    }
     
  }

  async findOne(id: number ) : Promise<Usuarios> {

    try {

       const usuario = await this.prisma.usuarios.findUnique({
      where: { id }
    })
    if(!usuario){
      throw new NotFoundException('Usuario no encontradossss')
  }
  return usuario
    } catch (error) {
       throw new NotFoundException('Usuario no encontrado')
      
    }
   
  }

  async update(id: number, data : Usuarios) : Promise<Usuarios> {
     return await this.prisma.usuarios.update({
       where: { id },
       data
     })
  }

  async remove(id: number, data : Usuarios) : Promise<Usuarios> {
    return await this.prisma.usuarios.delete({
      where: { id }
     
    })
  }
}
