/*
  Warnings:

  - Added the required column `userId` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_contact_fkey";

-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
