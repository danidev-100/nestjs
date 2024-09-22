import { PartialType } from '@nestjs/mapped-types';
import { CreateFotocopiaDto } from './create-fotocopia.dto';

export class UpdateFotocopiaDto extends PartialType(CreateFotocopiaDto) {}
