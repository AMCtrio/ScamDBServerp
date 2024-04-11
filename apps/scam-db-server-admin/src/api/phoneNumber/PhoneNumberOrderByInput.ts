import { SortOrder } from "../../util/SortOrder";

export type PhoneNumberOrderByInput = {
  id?: SortOrder;
  isScam?: SortOrder;
  lastCheckedDate?: SortOrder;
  phone?: SortOrder;
};
