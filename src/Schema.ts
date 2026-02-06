import * as Yup from "yup";

export const applySchema = Yup.object({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  civilID: Yup.string().required("National ID is required"),
  link: Yup.string().optional(),
  packages: Yup.array()
    .of(
      Yup.object({
        packageId: Yup.string().required(),
        packageName: Yup.string().required(),
        investmentAmount: Yup.number()
          .min(500, "Minimum investment is 500")
          .required("Investment amount is required"),
      })
    )
});
export const applySchemaSP = Yup.object({
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  civilID: Yup.string().required("National ID is required"),
  returns: Yup.string().required("Returns is required"),
  link: Yup.string().optional(),
  packages: Yup.array()
    .of(
      Yup.object({
        packageId: Yup.string().required(),
        packageName: Yup.string().required(),
        investmentAmount: Yup.number()
          .min(500, "Minimum investment is 500")
          .required("Investment amount is required"),
      })
    )
});