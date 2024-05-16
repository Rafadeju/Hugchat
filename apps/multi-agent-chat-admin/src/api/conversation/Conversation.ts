import { Message } from "../message/Message";

export type Conversation = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  title: string | null;
  updatedAt: Date;
};
