/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { ReportCreateNestedManyWithoutScamNumbersInput } from "./ReportCreateNestedManyWithoutScamNumbersInput";

@InputType()
class ScamNumberCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isScam?: boolean | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastCheckedDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReportCreateNestedManyWithoutScamNumbersInput,
  })
  @ValidateNested()
  @Type(() => ReportCreateNestedManyWithoutScamNumbersInput)
  @IsOptional()
  @Field(() => ReportCreateNestedManyWithoutScamNumbersInput, {
    nullable: true,
  })
  reports?: ReportCreateNestedManyWithoutScamNumbersInput;
}

export { ScamNumberCreateInput as ScamNumberCreateInput };