export interface AbslViewFormData {
  insuredPerson: string;
  addressLine1: string;
  addressLine2?: string | null;
  addressLine3?: string | null;
  city: string;
  pincode: string;
  state: string;
  country: string;
  dob: string;        // ISO yyyy-MM-dd
  gender: string;
  nominee: string;
  relationship: string;
}

export const DEFAULT_ABSL_VIEW_DATA: AbslViewFormData = {
  insuredPerson: '',
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  city: '',
  pincode: '',
  state: '',
  country: '',
  dob: '',
  gender: '',
  nominee: '',
  relationship: ''
};
