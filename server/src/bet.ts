import { Prisma } from "@prisma/client";
import company from "./company";
import prisma from "./db";

class Bet {
  list = async (params?: Prisma.BetFindManyArgs) => {
    const bets = await prisma.bet.findMany(params);
    return bets;
  };

  get = async (params: Prisma.BetWhereUniqueInput) => {
    const bet = await prisma.bet.findUnique({ where: params });

    if (!bet)
      throw createError({ statusCode: 404, statusMessage: "Recurso não encontrado" });

    return bet;
  };

  finish = async (where: Prisma.BetWhereUniqueInput, data: Prisma.BetUpdateInput) => {
    const bet = await prisma.bet.update({ where, data });

    if (!bet)
      throw createError({ statusCode: 404, statusMessage: "Recurso não encontrado" });

    const revenue = bet.finalAmount - bet.amount;

    await company.updateAmount(revenue);

    return bet;
  };

  create = async (data: Prisma.BetCreateInput) => {
    const bet = await prisma.bet.create({ data });

    return bet;
  };
}

export default new Bet();
