import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { SCAMNUMBER_TITLE_FIELD } from "../scamNumber/ScamNumberTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Report Date" source="reportDate" />
        <ReferenceField
          label="Scam Number"
          source="scamnumber.id"
          reference="ScamNumber"
        >
          <TextField source={SCAMNUMBER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User ID" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
