export type PhoneNumber = {
  id: string;
  isScam: boolean | null;
  lastCheckedDate: Date | null;
  phone: string | null;
};
