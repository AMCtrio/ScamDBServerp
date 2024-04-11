import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhoneNumberService } from "./phoneNumber.service";
import { PhoneNumberControllerBase } from "./base/phoneNumber.controller.base";

@swagger.ApiTags("phoneNumbers")
@common.Controller("phoneNumbers")
export class PhoneNumberController extends PhoneNumberControllerBase {
  constructor(
    protected readonly service: PhoneNumberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
