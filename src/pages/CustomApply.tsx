import { useTranslation } from "react-i18next";
import { Button, TextField, InputAdornment } from '@mui/material';
import { Formik, Form, FieldArray } from "formik";
import { applySchemaSP } from "@/Schema";
import type { ApplyFormValuesSP  } from "@/types/Types";
import { submitToFormspreeSP } from "@/submit";
import { ImageUploadField } from '@/components/ImageUploadField';
import ConfirmationCard from "@/components/ConfirmCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import type { FormikErrors} from "formik";
// import Select  from '@mui/material/Select';
// import type { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function ApplySP() {
  const { t,i18n } = useTranslation();
//   const [buy, setbuy] = useState('');
//   const handleChanges = (event: SelectChangeEvent) => {
//     setbuy(event.target.value as string);};  
  const { pac } = useParams<{ pac: string }>();
  const initialValues: ApplyFormValuesSP = {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    civilID: "",
    returns: "",
    link:"",
    packages: [
      {
        packageId: pac ?? "",
        packageName: pac ?? "",
        investmentAmount: "1000000" as any,
      },
    ],
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className='flex relative justify-center items-center overflow-hidden bg-gradient-to-b from-[#F7F9FC] to-[#EEF2F7]'>
      <div className='h-19 bg-slate-900 w-full absolute top-0 left-0'></div>

      <Formik
        initialValues={initialValues}
        validationSchema={applySchemaSP}
        onSubmit={async (values, { setSubmitting }) => {
          console.log("Submitted values:", values);
          await submitToFormspreeSP(values);
          setSubmitting(false);
          setShowConfirmation(true);
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => {
            console.log("Formik errors:", errors);
            return(
            
          <Form className='md:w-3/5 w-screen  flex-col border-0 gap-3 shadow-2xl rounded-3xl flex p-10 bg-white mt-30 mb-20'>
            {/* Image Upload Section */}
            <div >
              <div className='p-1'>
                <h1 className='bg-gradient-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>
                  {t("apply.imageUpload.title")}
                </h1>
              </div>
              <p className='text-gray-700'>
                - {t("apply.imageUpload.important")}
              </p>
              <p className='text-gray-700'>
                - {t("apply.imageUpload.rule1")}
              </p>
              <p className='text-gray-700'>
                - {t("apply.imageUpload.rule2")}
              </p>
            </div>

            <ImageUploadField
              name="image"
              label={t("apply.imageUpload.uploadLabel")}
              maxSize={5 * 1024 * 1024} // 5MB
              accept="image/*"
            />

            {/* User Info Section */}
            <div className='p-1'>
              <h1 className='bg-gradient-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>
                {t("apply.userInfo.title")}
              </h1>
            </div>

            <div  key={i18n.language}  className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <TextField
                id="outlined-fname"
                name="fName"
                label={t("apply.userInfo.firstName")}
                value={values.fName || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fName && Boolean(errors.fName)}
                helperText={touched.fName && errors.fName}
              />

              <TextField
         
                id="outlined-lname"
                name="lName"
                label={t("apply.userInfo.lastName")}
                value={values.lName || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lName && Boolean(errors.lName)}
                helperText={touched.lName && errors.lName}
              />

              <TextField
                name="phone"
                id="outlined-phone"
                label={t("apply.userInfo.phone")}
                value={values.phone || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />

              <TextField
                name="email"
                id="outlined-email"
                label={t("apply.userInfo.email")}
                value={values.email || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                      />

              <TextField
                name="civilID"
                id="outlined-civilid"
                label={t("apply.userInfo.nationalId")}
                value={values.civilID || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.civilID && Boolean(errors.civilID)}
                helperText={touched.civilID && errors.civilID}
              />
              
                <TextField
                select
                fullWidth
                name="returns"
                label={t("apply.userInfo.returns")}
                value={values.returns || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.returns && Boolean(errors.returns)}
                helperText={touched.returns && errors.returns}
                >
                <MenuItem value="Monthly">{t('modal.returns.monthly')}</MenuItem>
                <MenuItem value="Quarterly">{t('modal.returns.quarterly')}</MenuItem>
                <MenuItem value="Semi-Annually">{t('modal.returns.semiAnnually')}</MenuItem>
                <MenuItem value="Annually">{t('modal.returns.annually')}</MenuItem>
                </TextField>
            </div>

            {/* Packages Section */}
            <div>
              <FieldArray name="packages">
                {({ }) => (
                  <div className="w-screen">
                    <h1 className='p-1 bg-gradient-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>
                      {t("apply.packages.title")}
                    </h1>
                          {values.packages.map((pkg, i) => {
                            // Get the error for this index
                            const packageErrorItem = Array.isArray(errors.packages) ? errors.packages[i] : undefined;

                            // Narrow: is it an object (field-level errors) or a string (array-item-level error)?
                            // const packageErrors =
                            //   packageErrorItem && typeof packageErrorItem === 'object'
                            //     ? (packageErrorItem as FormikErrors<PackageForm>) // or your actual shape
                            //     : undefined;

                            // const packageTouched = Array.isArray(touched.packages)
                            //   ? touched.packages[i]
                            //   : undefined;

                            // Optional: show array-item level error (if any)
                            const arrayItemError =
                              typeof packageErrorItem === 'string' ? packageErrorItem : undefined;

                            return (
                              <div key={pkg.packageId || i}>
                                <p className="m-2">{pkg.packageName || 'Package'}</p> {/* fixed typo: pac → pkg */}

                                {arrayItemError && (
                                  <div className="text-red-600 text-sm mb-2">{arrayItemError}</div>
                                )}
                                <p>{t("apply.packages.investmentAmount")}</p>
                                <TextField
                                //  disabled
                                  name={`packages.${i}.investmentAmount`}
                                //   label={t("apply.packages.investmentAmount")}
                                  type="number"
                                  defaultValue={1000000}
                                //   value={values.packages[i].investmentAmount ?? ""} // safer than ||
                                //   onChange={handleChange}
                                //   onBlur={handleBlur}
                                //   error={Boolean(
                                //     packageTouched?.investmentAmount && packageErrors?.investmentAmount
                                //   )}
                                //   helperText={
                                //     packageTouched?.investmentAmount && packageErrors?.investmentAmount
                                //       ? String(packageErrors.investmentAmount) // make sure it's string
                                //       : undefined
                                //   }
                                  InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        {"EGP"}
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </div>
                            );
                          })}
                        <div className="mt-5 w-300">
                          <p className="mb-2">{t("apply.userInfo.Link")} </p>
                          <TextField name="link" id="outlined-Link"
                           label={t("apply.userInfo.Link2")}
                            value={values.link || ""} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            error={touched.link && Boolean(errors.link)}
                            helperText={touched.link && errors.link}
                            variant="outlined" />
                        </div>
                  </div>
                )}
              </FieldArray>
            </div>

            {/* Submit Button */}
            <Button
              variant="outlined"
              type="submit"
              disabled={isSubmitting}
              className='w-1/5'
              sx={{
                color: "#FFB300",
                borderColor: "#FFB300",
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: "25px",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#FFB300",
                  color: "#FFFFFF",
                  borderColor: "#FFB300",
                },
              }}
            >
              {t("apply.buttons.submit")}
            </Button>
          </Form>
        )}}
      </Formik>

      {showConfirmation && (
        <div className='z-1'>
          <ConfirmationCard
            onClose={() => setShowConfirmation(false)}
            buyMoreUrl="/packages"
          />
        </div>
      )}
    </div>
  );
}