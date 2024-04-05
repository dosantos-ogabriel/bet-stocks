-- CreateTable
CREATE TABLE "BetHistory" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deviation" DOUBLE PRECISION NOT NULL,
    "betId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "BetHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BetHistory_betId_key" ON "BetHistory"("betId");

-- AddForeignKey
ALTER TABLE "BetHistory" ADD CONSTRAINT "BetHistory_betId_fkey" FOREIGN KEY ("betId") REFERENCES "Bet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BetHistory" ADD CONSTRAINT "BetHistory_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
