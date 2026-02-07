export type PackageForm = {
  packageId: string;
  packageName: any;
  investmentAmount: number;
};

export type ApplyFormValues = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  civilID: string;
  returns: string;
  link?: string;
  packages: PackageForm[];
};
export type ApplyFormValuesSP = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  civilID: string;
  returns: string;
  link?: string;
  packages: PackageForm[];
};