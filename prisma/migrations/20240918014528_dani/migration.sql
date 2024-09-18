-- CreateTable
CREATE TABLE "Jugadores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "altura" REAL NOT NULL,
    "peso" REAL NOT NULL,
    "posicion" TEXT NOT NULL
);
