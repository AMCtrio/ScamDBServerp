import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScamNumberTitle } from "../scamNumber/ScamNumberTitle";
import { UserTitle } from "../user/UserTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <DateTimeInput label="Report Date" source="reportDate" />
        <ReferenceInput
          source="scamNumber.id"
          reference="ScamNumber"
          label="Scam Number"
        >
          <SelectInput optionText={ScamNumberTitle} />
        </ReferenceInput>
        <ReferenceInput source="userId.id" reference="User" label="User ID">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
