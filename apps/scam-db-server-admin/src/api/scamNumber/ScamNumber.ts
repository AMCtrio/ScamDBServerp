import { Report } from "../report/Report";

export type ScamNumber = {
  id: string;
  isScam: boolean | null;
  lastCheckedDate: Date | null;
  phone: string | null;
  reports?: Array<Report>;
};
