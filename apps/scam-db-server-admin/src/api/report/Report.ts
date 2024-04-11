import { User } from "../user/User";

export type Report = {
  description: string | null;
  id: string;
  phoneNumber: string;
  reportDate: Date | null;
  userId?: User | null;
};
