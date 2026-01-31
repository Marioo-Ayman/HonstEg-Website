// import Bg from '@/assets/business-man.jpg';
import {Button, TextField, InputAdornment} from '@mui/material';
import { Formik, Form, FieldArray} from "formik";
import { applySchema } from "@/Schema";
import type {ApplyFormValues} from "@/types/Types";
import {submitToFormspree} from "@/submit"
import { ImageUploadField } from '@/components/ImageUploadField';
import ConfirmationCard from "@/components/ConfirmCard"
import { useState } from "react";

export default function Apply() {
   

const initialValues: ApplyFormValues = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  civilID: "",
  packages: [
    {
      packageId: "gold",
      packageName: "Gold Package",
      investmentAmount: 0,
    },
  ],
};
  const [showConfirmation, setShowConfirmation] = useState(false);


  return (
    <div className='flex relative justify-center items-center overflow-hidden bg-linear-to-b from-[#F7F9FC] to-[#EEF2F7] '>
      <div className='h-19 bg-slate-900 w-full absolute top-0 left-0'></div>
      {/* <img
        src={Bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs transform scale-105 "
      /> */}
      <Formik   
        initialValues={initialValues}
        validationSchema={applySchema}
        onSubmit={async (values, { setSubmitting }) => {
           console.log("Submitted values:", values);
          await submitToFormspree(values);
          setSubmitting(false);
          setShowConfirmation(true)
          // alert("Application submitted!");
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
          
          <Form className='w-3/5  flex-col border-0 gap-3 shadow-2xl rounded-3xl flex p-10 bg-[#FFFFF] mt-30 mb-20'>
            {/* user fields */}
            <div>
              <div className='p-1'><h1 className='bg-linear-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>Upload Your Image</h1></div>
              <p className=''>- Important : Your photo must be CLEAR for verification </p>
              <p>- Blurry or low-quality imags will be rejected </p>
              <p>- your face must be clearly visibl and recognizable </p>
            </div>
                <ImageUploadField
                  name="image"
                  label="Upload Profile Image"
                  maxSize={5 * 1024 * 1024} // 5MB
                  accept="image/*"
                />
            <div className='p-1'><h1 className='bg-linear-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>USer Info</h1></div>
            <div className='grid grid-cols-2 gap-5'>
              <TextField
              id="outlined"
              name="fName"              // must match initialValues
              label="First Name"
              value={values.fName || ""}
              onChange={handleChange}          
              onBlur={handleBlur}  // important for “touched”
              error={touched.fName && Boolean(errors.fName)}  // red border
              helperText={touched.fName && errors.fName} 
              /> 
              <TextField
              id="outlined"
              name="lName"              // must match initialValues
              label="Last Name"
              value={values.lName || ""}
              onChange={handleChange}          
              onBlur={handleBlur}  // important for “touched”
              error={touched.lName && Boolean(errors.lName)}  // red border
              helperText={touched.lName && errors.lName} 
              /> 
              <TextField
              name="phone"              // must match initialValues
              id="outlined-required"
              label="Phone Number"
              value={values.phone || ""}
              onChange={handleChange}
              onBlur={handleBlur}  // important for “touched”
              error={touched.phone && Boolean(errors.phone)}  // red border
              helperText={touched.phone && errors.phone} 
              /> 
              <TextField
              name="email"              // must match initialValues
              id="outlined"
              label="Email Address"
              value={values.email || ""}
              onChange={handleChange}
              onBlur={handleBlur}  // important for “touched”
              error={touched.email && Boolean(errors.email)}  // red border
              helperText={touched.email && errors.email} 
              /> 
              <TextField
              name="civilID"              // must match initialValues
              id="outlined"
              label="National ID"
              value={values.civilID || ""}
              onChange={handleChange}
              onBlur={handleBlur}  // important for “touched”
              error={touched.civilID && Boolean(errors.civilID)}  // red border
              helperText={touched.civilID && errors.civilID} 
              /> 
            </div>
            <div >
              <FieldArray name="packages">
                {({  }) => (
                  // push
                  <>
                    <h1 className='p-1 bg-linear-to-r from-blue-950 to-blue-500 text-transparent bg-clip-text inline-block text-3xl'>Packes</h1>
                    {values.packages.map((pkg, i) => (
                      <div key={pkg.packageId}>
                        <p className='m-2 '>Pack Name : {pkg.packageName}</p>
                        <TextField
                          name={`packages.${i}.investmentAmount`}
                          label = "Investment Amout"    
                          value={values.packages[i].investmentAmount || ""}
                          onChange={handleChange}
                          onBlur={handleBlur}
                           slotProps={{
                                  input: {
                                    endAdornment: <InputAdornment position="end">$USD</InputAdornment>,
                                  },}}               
                        />
                      </div>
                    ))}
                    {/* <Button
                      type="button"
                      onClick={() =>
                        push({
                          packageId: "silver",
                          packageName: "Silver Package",
                          amount: 0,
                        })
                      }
                    >
                      Invest More
                    </Button> */}
                  </>
                )}
              </FieldArray>
            </div>
            {/* <div className='flex justify-center'>  */}
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
                Submit
              </Button>
            {/* </div> */}
          </Form>
        )}
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