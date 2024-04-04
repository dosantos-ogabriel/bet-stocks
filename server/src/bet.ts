import { Prisma } from "@prisma/client";
import prisma from "./db";

class Bet {
  list = async (params?: Prisma.BetFindManyArgs) => {
    const bets = await prisma.bet.findMany(params);
    return bets;
  };
}

export default new Bet();
