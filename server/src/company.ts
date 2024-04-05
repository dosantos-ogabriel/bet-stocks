import { Prisma } from "@prisma/client";
import prisma from "./db";
class Company {
  async get(where: Prisma.CompanyWhereUniqueInput) {
    const company = await prisma.company.findUnique({ where });

    if (!company)
      throw createError({ statusCode: 404, statusMessage: "Recurso não encontrado" });

    return company;
  }

  async updateAmount(amount: number, id: number = 1) {
    const company = await prisma.company.findUnique({ where: { id } });

    if (!company) throw createError({ statusCode: 500, statusMessage: "Erro interno" });

    const newAmount = company.amount + amount;

    const data = await prisma.company.update({
      where: { id },
      data: { amount: newAmount },
    });

    return data;
  }
}

export default new Company();
