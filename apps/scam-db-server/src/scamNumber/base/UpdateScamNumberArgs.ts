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
import { ScamNumberWhereUniqueInput } from "./ScamNumberWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ScamNumberUpdateInput } from "./ScamNumberUpdateInput";

@ArgsType()
class UpdateScamNumberArgs {
  @ApiProperty({
    required: true,
    type: () => ScamNumberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScamNumberWhereUniqueInput)
  @Field(() => ScamNumberWhereUniqueInput, { nullable: false })
  where!: ScamNumberWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ScamNumberUpdateInput,
  })
  @ValidateNested()
  @Type(() => ScamNumberUpdateInput)
  @Field(() => ScamNumberUpdateInput, { nullable: false })
  data!: ScamNumberUpdateInput;
}

export { UpdateScamNumberArgs as UpdateScamNumberArgs };