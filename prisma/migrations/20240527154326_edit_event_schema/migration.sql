-- DropForeignKey
ALTER TABLE "Events" DROP CONSTRAINT "Events_userEmail_fkey";

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "Users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
