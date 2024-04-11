import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PhoneNumberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Is Scam" source="isScam" />
        <DateTimeInput label="Last Checked Date" source="lastCheckedDate" />
        <TextInput label="Phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
