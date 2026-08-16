/*
  Warnings:

  - You are about to drop the `BirthProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BirthProfile" DROP CONSTRAINT "BirthProfile_userId_fkey";

-- DropTable
DROP TABLE "BirthProfile";
