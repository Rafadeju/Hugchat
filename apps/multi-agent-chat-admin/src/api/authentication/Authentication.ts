export type Authentication = {
  createdAt: Date;
  id: string;
  password: string | null;
  roles?: Array<"Option1">;
  supertokensIdFieldName: string | null;
  updatedAt: Date;
  username: string | null;
};
