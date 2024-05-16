import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConversationWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  title?: StringNullableFilter;
};
