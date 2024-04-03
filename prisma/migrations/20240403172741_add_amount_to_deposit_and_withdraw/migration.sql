/*
  Warnings:

  - Added the required column `amount` to the `Deposit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Withdraw` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Deposit" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "amount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Withdraw" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;
