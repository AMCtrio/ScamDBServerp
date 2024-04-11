import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PhoneNumberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Scam" source="isScam" />
        <DateTimeInput label="Last Checked Date" source="lastCheckedDate" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
