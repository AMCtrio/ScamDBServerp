import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhoneNumberModuleBase } from "./base/phoneNumber.module.base";
import { PhoneNumberService } from "./phoneNumber.service";
import { PhoneNumberController } from "./phoneNumber.controller";
import { PhoneNumberResolver } from "./phoneNumber.resolver";

@Module({
  imports: [PhoneNumberModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhoneNumberController],
  providers: [PhoneNumberService, PhoneNumberResolver],
  exports: [PhoneNumberService],
})
export class PhoneNumberModule {}
