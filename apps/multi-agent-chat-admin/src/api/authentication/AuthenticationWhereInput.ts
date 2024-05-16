import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthenticationWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  supertokensIdFieldName?: StringNullableFilter;
  username?: StringNullableFilter;
};
