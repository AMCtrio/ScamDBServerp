import { ReportWhereUniqueInput } from "../report/ReportWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reports?: ReportWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
