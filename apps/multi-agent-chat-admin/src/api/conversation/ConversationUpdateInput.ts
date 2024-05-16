import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  messages?: MessageUpdateManyWithoutConversationsInput;
  title?: string | null;
};
