import { Module } from '@nestjs/common';
import { FotocopiasService } from './fotocopias.service';
import { FotocopiasController } from './fotocopias.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FotocopiasController],
  providers: [FotocopiasService],
  imports: [PrismaService]
})
export class FotocopiasModule {}
