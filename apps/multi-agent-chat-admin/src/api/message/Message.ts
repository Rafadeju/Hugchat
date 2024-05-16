import { Conversation } from "../conversation/Conversation";

export type Message = {
  authorType?: "Option1" | null;
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
