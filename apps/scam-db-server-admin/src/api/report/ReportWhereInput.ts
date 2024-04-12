import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScamNumberWhereUniqueInput } from "../scamNumber/ScamNumberWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
  scamNumber?: ScamNumberWhereUniqueInput;
  userId?: UserWhereUniqueInput;
};
