import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScamNumberModuleBase } from "./base/scamNumber.module.base";
import { ScamNumberService } from "./scamNumber.service";
import { ScamNumberController } from "./scamNumber.controller";
import { ScamNumberResolver } from "./scamNumber.resolver";

@Module({
  imports: [ScamNumberModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScamNumberController],
  providers: [ScamNumberService, ScamNumberResolver],
  exports: [ScamNumberService],
})
export class ScamNumberModule {}
