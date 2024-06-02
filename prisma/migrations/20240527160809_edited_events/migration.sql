/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Events` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_userEmail_fkey";

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "userEmail";

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_contact_fkey" FOREIGN KEY ("contact") REFERENCES "Users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
