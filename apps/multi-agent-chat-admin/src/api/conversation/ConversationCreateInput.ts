import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  title?: string | null;
};
