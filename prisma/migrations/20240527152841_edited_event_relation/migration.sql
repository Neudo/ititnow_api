/*
  Warnings:

  - You are about to drop the column `userId` on the `Events` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_userId_fkey";

-- AlterTable
ALTER TABLE "Events" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
