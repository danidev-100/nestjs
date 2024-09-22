import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports:[PrismaModule]
})
export class UsuariosModule {}
