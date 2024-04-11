import { PhoneNumberWhereInput } from "./PhoneNumberWhereInput";
import { PhoneNumberOrderByInput } from "./PhoneNumberOrderByInput";

export type PhoneNumberFindManyArgs = {
  where?: PhoneNumberWhereInput;
  orderBy?: Array<PhoneNumberOrderByInput>;
  skip?: number;
  take?: number;
};
