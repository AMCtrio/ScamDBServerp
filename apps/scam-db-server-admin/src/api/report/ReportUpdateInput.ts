import { ScamNumberWhereUniqueInput } from "../scamNumber/ScamNumberWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  description?: string | null;
  phoneNumber?: string;
  reportDate?: Date | null;
  scamNumber?: ScamNumberWhereUniqueInput | null;
  userId?: UserWhereUniqueInput | null;
};
