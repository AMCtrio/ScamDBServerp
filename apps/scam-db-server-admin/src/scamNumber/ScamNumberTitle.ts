import { ScamNumber as TScamNumber } from "../api/scamNumber/ScamNumber";

export const SCAMNUMBER_TITLE_FIELD = "phone";

export const ScamNumberTitle = (record: TScamNumber): string => {
  return record.phone?.toString() || String(record.id);
};
