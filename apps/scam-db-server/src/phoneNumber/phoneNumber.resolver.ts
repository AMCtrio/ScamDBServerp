import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhoneNumberResolverBase } from "./base/phoneNumber.resolver.base";
import { PhoneNumber } from "./base/PhoneNumber";
import { PhoneNumberService } from "./phoneNumber.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhoneNumber)
export class PhoneNumberResolver extends PhoneNumberResolverBase {
  constructor(
    protected readonly service: PhoneNumberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
