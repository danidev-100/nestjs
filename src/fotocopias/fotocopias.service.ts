import { Injectable } from '@nestjs/common';
import { CreateFotocopiaDto } from './dto/create-fotocopia.dto';
import { UpdateFotocopiaDto } from './dto/update-fotocopia.dto';

@Injectable()
export class FotocopiasService {
  create(createFotocopiaDto: CreateFotocopiaDto) {
    return 'This action adds a new fotocopia';
  }

  findAll() {
    return `This action returns all fotocopias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotocopia`;
  }

  update(id: number, updateFotocopiaDto: UpdateFotocopiaDto) {
    return `This action updates a #${id} fotocopia`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotocopia`;
  }
}
