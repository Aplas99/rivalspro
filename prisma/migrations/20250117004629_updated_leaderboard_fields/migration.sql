/*
  Warnings:

  - You are about to drop the column `rank` on the `Leaderboard` table. All the data in the column will be lost.
  - Added the required column `battleCount` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `curHeadIconId` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerName` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankLevel` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rankScore` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `season` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winCount` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leaderboard" DROP COLUMN "rank",
ADD COLUMN     "battleCount" INTEGER NOT NULL,
ADD COLUMN     "curHeadIconId" TEXT NOT NULL,
ADD COLUMN     "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "playerName" TEXT NOT NULL,
ADD COLUMN     "rankLevel" INTEGER NOT NULL,
ADD COLUMN     "rankScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "score" INTEGER NOT NULL,
ADD COLUMN     "season" INTEGER NOT NULL,
ADD COLUMN     "winCount" INTEGER NOT NULL;
