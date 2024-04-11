import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhoneNumberServiceBase } from "./base/phoneNumber.service.base";

@Injectable()
export class PhoneNumberService extends PhoneNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
