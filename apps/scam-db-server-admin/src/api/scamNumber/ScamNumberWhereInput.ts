import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type ScamNumberWhereInput = {
  id?: StringFilter;
  isScam?: BooleanNullableFilter;
  lastCheckedDate?: DateTimeNullableFilter;
  phone?: StringNullableFilter;
  reports?: ReportListRelationFilter;
};
