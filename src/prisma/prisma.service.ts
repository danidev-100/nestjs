import {config} from "dotenv"

import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient } from '@libsql/client/web';
config()
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
   
    const libsql = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    // Configura el adaptador de Prisma con LibSQL
    const adapter = new PrismaLibSQL(libsql);

    // Inicializa PrismaClient con el adaptador
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect(); // Conecta Prisma al iniciar el módulo
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Desconecta Prisma al destruir el módulo
  }

  
}

