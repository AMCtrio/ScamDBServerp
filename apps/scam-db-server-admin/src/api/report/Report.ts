import { ScamNumber } from "../scamNumber/ScamNumber";
import { User } from "../user/User";

export type Report = {
  description: string | null;
  id: string;
  phoneNumber: string;
  reportDate: Date | null;
  scamNumber?: ScamNumber | null;
  userId?: User | null;
};
