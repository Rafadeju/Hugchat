/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumMessageAuthorType } from "./EnumMessageAuthorType";
import {
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
  IsDate,
} from "class-validator";
import { Conversation } from "../../conversation/base/Conversation";
import { Type } from "class-transformer";

@ObjectType()
class Message {
  @ApiProperty({
    required: false,
    enum: EnumMessageAuthorType,
  })
  @IsEnum(EnumMessageAuthorType)
  @IsOptional()
  @Field(() => EnumMessageAuthorType, {
    nullable: true,
  })
  authorType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content!: string | null;

  @ApiProperty({
    required: false,
    type: () => Conversation,
  })
  @ValidateNested()
  @Type(() => Conversation)
  @IsOptional()
  conversation?: Conversation | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp!: Date | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Message as Message };
