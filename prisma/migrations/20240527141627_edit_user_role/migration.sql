/*
  Warnings:

  - You are about to drop the column `role` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "role",
ADD COLUMN     "userRole" TEXT NOT NULL DEFAULT 'user';
