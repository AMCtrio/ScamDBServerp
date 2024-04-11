import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PhoneNumberWhereInput = {
  id?: StringFilter;
  isScam?: BooleanNullableFilter;
  lastCheckedDate?: DateTimeNullableFilter;
  phone?: StringNullableFilter;
};
