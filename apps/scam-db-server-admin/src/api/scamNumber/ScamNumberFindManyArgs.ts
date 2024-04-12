import { ScamNumberWhereInput } from "./ScamNumberWhereInput";
import { ScamNumberOrderByInput } from "./ScamNumberOrderByInput";

export type ScamNumberFindManyArgs = {
  where?: ScamNumberWhereInput;
  orderBy?: Array<ScamNumberOrderByInput>;
  skip?: number;
  take?: number;
};
