import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const PhoneNumberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Scam" source="isScam" />
        <TextField label="Last Checked Date" source="lastCheckedDate" />
        <TextField label="Phone" source="phone" />
      </SimpleShowLayout>
    </Show>
  );
};
