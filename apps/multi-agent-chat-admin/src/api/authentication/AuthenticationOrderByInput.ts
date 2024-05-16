import { SortOrder } from "../../util/SortOrder";

export type AuthenticationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  supertokensIdFieldName?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
