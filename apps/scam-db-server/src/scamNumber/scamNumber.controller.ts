import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScamNumberService } from "./scamNumber.service";
import { ScamNumberControllerBase } from "./base/scamNumber.controller.base";

@swagger.ApiTags("scamNumbers")
@common.Controller("scamNumbers")
export class ScamNumberController extends ScamNumberControllerBase {
  constructor(
    protected readonly service: ScamNumberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
