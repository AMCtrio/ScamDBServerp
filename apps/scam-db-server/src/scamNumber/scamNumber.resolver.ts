import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScamNumberResolverBase } from "./base/scamNumber.resolver.base";
import { ScamNumber } from "./base/ScamNumber";
import { ScamNumberService } from "./scamNumber.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScamNumber)
export class ScamNumberResolver extends ScamNumberResolverBase {
  constructor(
    protected readonly service: ScamNumberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
