export type PackageForm = {
  packageId: string;
  packageName: string;
  investmentAmount: number;
};

export type ApplyFormValues = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  civilID: string;
  link?: string;
  packages: PackageForm[];
};