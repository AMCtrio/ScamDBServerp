import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ScamNumber as PrismaScamNumber, Report as PrismaReport } from "@prisma/client";

export class ScamNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ScamNumberCountArgs, "select">): Promise<number> {
    return this.prisma.scamNumber.count(args);
  }

  async scamNumbers(args: Prisma.ScamNumberFindManyArgs): Promise<PrismaScamNumber[]> {
    return this.prisma.scamNumber.findMany(args);
  }

  async scamNumber(args: Prisma.ScamNumberFindUniqueArgs): Promise<PrismaScamNumber | null> {
    return this.prisma.scamNumber.findUnique(args);
  }

  async createScamNumber(args: Prisma.ScamNumberCreateArgs): Promise<PrismaScamNumber> {
    return this.prisma.scamNumber.create(args);
  }

  async updateScamNumber(args: Prisma.ScamNumberUpdateArgs): Promise<PrismaScamNumber> {
    return this.prisma.scamNumber.update(args);
  }

  async deleteScamNumber(args: Prisma.ScamNumberDeleteArgs): Promise<PrismaScamNumber> {
    return this.prisma.scamNumber.delete(args);
  }

  async findReports(parentId: string, args: Prisma.ReportFindManyArgs): Promise<PrismaReport[]> {
    return this.prisma.scamNumber
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reports(args);
  }
}
