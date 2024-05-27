/*
  Warnings:

  - The primary key for the `Events` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Events` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Events" DROP CONSTRAINT "Events_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Events_pkey" PRIMARY KEY ("id");
