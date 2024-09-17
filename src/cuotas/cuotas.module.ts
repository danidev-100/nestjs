import { Module } from '@nestjs/common';
import { CuotasService } from './cuotas.service';
import { CuotasController } from './cuotas.controller';

@Module({
  providers: [CuotasService],
  controllers: [CuotasController]
})
export class CuotasModule {}
