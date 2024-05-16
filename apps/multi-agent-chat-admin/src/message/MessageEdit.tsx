import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { ConversationTitle } from "../conversation/ConversationTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="authorType"
          label="authorType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="conversation.id"
          reference="Conversation"
          label="Conversation"
        >
          <SelectInput optionText={ConversationTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
