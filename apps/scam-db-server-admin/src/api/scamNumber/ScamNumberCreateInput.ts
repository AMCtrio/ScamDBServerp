import { ReportCreateNestedManyWithoutScamNumbersInput } from "./ReportCreateNestedManyWithoutScamNumbersInput";

export type ScamNumberCreateInput = {
  isScam?: boolean | null;
  lastCheckedDate?: Date | null;
  phone?: string | null;
  reports?: ReportCreateNestedManyWithoutScamNumbersInput;
};
