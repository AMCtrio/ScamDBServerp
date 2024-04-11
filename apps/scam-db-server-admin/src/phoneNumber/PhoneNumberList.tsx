import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PhoneNumberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Phone Numbers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <BooleanField label="Is Scam" source="isScam" />
        <TextField label="Last Checked Date" source="lastCheckedDate" />
        <TextField label="Phone" source="phone" />
      </Datagrid>
    </List>
  );
};
