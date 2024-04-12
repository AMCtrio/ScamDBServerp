import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SCAMNUMBER_TITLE_FIELD } from "./ScamNumberTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ScamNumberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Scam" source="isScam" />
        <TextField label="Last Checked Date" source="lastCheckedDate" />
        <TextField label="Phone" source="phone" />
        <ReferenceManyField
          reference="Report"
          target="scamNumberId"
          label="Reports"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
