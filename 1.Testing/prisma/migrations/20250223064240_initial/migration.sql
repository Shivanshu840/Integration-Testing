-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ADD', 'MUL');

-- CreateTable
CREATE TABLE "Request" (
    "id" TEXT NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "ans" INTEGER NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
