import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScamNumberServiceBase } from "./base/scamNumber.service.base";

@Injectable()
export class ScamNumberService extends ScamNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
