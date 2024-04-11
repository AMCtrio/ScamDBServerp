import { ReportUpdateManyWithoutScamNumbersInput } from "./ReportUpdateManyWithoutScamNumbersInput";

export type ScamNumberUpdateInput = {
  isScam?: boolean | null;
  lastCheckedDate?: Date | null;
  phone?: string | null;
  reports?: ReportUpdateManyWithoutScamNumbersInput;
};
