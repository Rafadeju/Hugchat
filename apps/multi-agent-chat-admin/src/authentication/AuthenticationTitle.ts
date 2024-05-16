import { Authentication as TAuthentication } from "../api/authentication/Authentication";

export const AUTHENTICATION_TITLE_FIELD = "supertokensIdFieldName";

export const AuthenticationTitle = (record: TAuthentication): string => {
  return record.supertokensIdFieldName?.toString() || String(record.id);
};
