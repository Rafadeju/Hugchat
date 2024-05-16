import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  authorType?: SortOrder;
  content?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
