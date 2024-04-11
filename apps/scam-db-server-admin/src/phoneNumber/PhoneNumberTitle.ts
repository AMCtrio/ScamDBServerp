import { PhoneNumber as TPhoneNumber } from "../api/phoneNumber/PhoneNumber";

export const PHONENUMBER_TITLE_FIELD = "phone";

export const PhoneNumberTitle = (record: TPhoneNumber): string => {
  return record.phone?.toString() || String(record.id);
};
