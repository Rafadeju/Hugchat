import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="pasword" source="pasword" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
