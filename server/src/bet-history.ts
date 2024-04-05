import { Bet, Company, Prisma } from "@prisma/client";
import { ParseFloat } from "~/utils";
import prisma from "./db";

class BetHistory {
  async list() {
    const history = await prisma.betHistory.findMany();
    return history;
  }
  async create(data: Prisma.BetHistoryUncheckedCreateInput) {
    const record = await prisma.betHistory.create({ data });
    return record;
  }

  async createFromBet(bet: Bet, company: Company) {
    const revenue = bet.finalAmount - bet.amount;
    const deviation = ParseFloat(revenue / company.amount);

    return this.create({ betId: bet.id, companyId: company.id, deviation });
  }
}

export default new BetHistory();
