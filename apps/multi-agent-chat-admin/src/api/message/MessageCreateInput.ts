import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageCreateInput = {
  authorType?: "Option1" | null;
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  timestamp?: Date | null;
};
