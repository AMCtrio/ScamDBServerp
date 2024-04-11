import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "phoneNumber";

export const ReportTitle = (record: TReport): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
