/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AuthenticationWhereInput } from "./AuthenticationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AuthenticationCountArgs {
  @ApiProperty({
    required: false,
    type: () => AuthenticationWhereInput,
  })
  @Field(() => AuthenticationWhereInput, { nullable: true })
  @Type(() => AuthenticationWhereInput)
  where?: AuthenticationWhereInput;
}

export { AuthenticationCountArgs as AuthenticationCountArgs };