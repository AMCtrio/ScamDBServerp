import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  reportDate?: SortOrder;
  scamNumberId?: SortOrder;
  userIdId?: SortOrder;
};
