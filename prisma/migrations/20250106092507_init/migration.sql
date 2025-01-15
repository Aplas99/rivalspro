-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "platform" INTEGER NOT NULL,
    "statsid" TEXT,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayerStats" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "kda" DOUBLE PRECISION NOT NULL,
    "damagePM" DOUBLE PRECISION NOT NULL,
    "healingPM" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PlayerStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "teamups" INTEGER NOT NULL,
    "winrate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeroStats" (
    "id" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,
    "damagePM" DOUBLE PRECISION NOT NULL,
    "healingPM" DOUBLE PRECISION NOT NULL,
    "deaths" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "playtime" INTEGER NOT NULL,

    CONSTRAINT "HeroStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leaderboard" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "device" INTEGER NOT NULL,

    CONSTRAINT "Leaderboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RankDistribution" (
    "id" TEXT NOT NULL,
    "rank" TEXT NOT NULL,
    "playerCount" INTEGER NOT NULL,

    CONSTRAINT "RankDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HeroToHeroStats" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PlayerStats_playerId_key" ON "PlayerStats"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "_HeroToHeroStats_AB_unique" ON "_HeroToHeroStats"("A", "B");

-- CreateIndex
CREATE INDEX "_HeroToHeroStats_B_index" ON "_HeroToHeroStats"("B");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_statsid_fkey" FOREIGN KEY ("statsid") REFERENCES "PlayerStats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToHeroStats" ADD CONSTRAINT "_HeroToHeroStats_A_fkey" FOREIGN KEY ("A") REFERENCES "Hero"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HeroToHeroStats" ADD CONSTRAINT "_HeroToHeroStats_B_fkey" FOREIGN KEY ("B") REFERENCES "HeroStats"("id") ON DELETE CASCADE ON UPDATE CASCADE;
