/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PhoneNumber as PrismaPhoneNumber } from "@prisma/client";

export class PhoneNumberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PhoneNumberCountArgs, "select">
  ): Promise<number> {
    return this.prisma.phoneNumber.count(args);
  }

  async phoneNumbers<T extends Prisma.PhoneNumberFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneNumberFindManyArgs>
  ): Promise<PrismaPhoneNumber[]> {
    return this.prisma.phoneNumber.findMany<Prisma.PhoneNumberFindManyArgs>(
      args
    );
  }
  async phoneNumber<T extends Prisma.PhoneNumberFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneNumberFindUniqueArgs>
  ): Promise<PrismaPhoneNumber | null> {
    return this.prisma.phoneNumber.findUnique(args);
  }
  async createPhoneNumber<T extends Prisma.PhoneNumberCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneNumberCreateArgs>
  ): Promise<PrismaPhoneNumber> {
    return this.prisma.phoneNumber.create<T>(args);
  }
  async updatePhoneNumber<T extends Prisma.PhoneNumberUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneNumberUpdateArgs>
  ): Promise<PrismaPhoneNumber> {
    return this.prisma.phoneNumber.update<T>(args);
  }
  async deletePhoneNumber<T extends Prisma.PhoneNumberDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PhoneNumberDeleteArgs>
  ): Promise<PrismaPhoneNumber> {
    return this.prisma.phoneNumber.delete(args);
  }
}
