import { SortOrder } from "../../util/SortOrder";

export type ScamNumberOrderByInput = {
  id?: SortOrder;
  isScam?: SortOrder;
  lastCheckedDate?: SortOrder;
  phone?: SortOrder;
};
