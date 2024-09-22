import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FotocopiasService } from './fotocopias.service';
import { CreateFotocopiaDto } from './dto/create-fotocopia.dto';
import { UpdateFotocopiaDto } from './dto/update-fotocopia.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fotocopias')
@Controller('fotocopias')
export class FotocopiasController {
  constructor(private readonly fotocopiasService: FotocopiasService) {}

  @Post()
  create(@Body() createFotocopiaDto: Prisma.CreateFotocopiaDto) {
    return this.fotocopiasService.create(createFotocopiaDto);
  }

  @Get()
  findAll() {
    return this.fotocopiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotocopiasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFotocopiaDto: UpdateFotocopiaDto,
  ) {
    return this.fotocopiasService.update(+id, updateFotocopiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotocopiasService.remove(+id);
  }
}
