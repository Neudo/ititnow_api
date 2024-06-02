-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;
