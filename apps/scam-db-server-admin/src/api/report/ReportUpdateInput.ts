import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  description?: string | null;
  phoneNumber?: string;
  reportDate?: Date | null;
  userId?: UserWhereUniqueInput | null;
};
