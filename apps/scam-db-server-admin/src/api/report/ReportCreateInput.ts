import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  description?: string | null;
  phoneNumber: string;
  reportDate?: Date | null;
  userId?: UserWhereUniqueInput | null;
};
