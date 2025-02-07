import { useFormik } from "formik";
import * as Yup from "yup";
import useFormStore from "../store/store";

export default function PersonalDetails() {
  const { formData, updateFormData, nextStep, prevStep } = useFormStore();

  const formik = useFormik({
    initialValues: {
      aadhar: formData.aadhar,
      address: formData.address,
      dob: formData.dob,
    },
    validationSchema: Yup.object({
      aadhar: Yup.string()
        .matches(/^\d{12}$/, "Aadhar must be 12 digits")
        .required("Required"),
      address: Yup.string().required("Required"),
      dob: Yup.date().required("Required"),
    }),
    onSubmit: (values) => {
      updateFormData(values);
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input {...formik.getFieldProps("aadhar")} placeholder="Aadhar Number" className="input" />
      {formik.touched.aadhar && formik.errors.aadhar && (
        <p className="text-red-500">{formik.errors.aadhar}</p>
      )}

      <input {...formik.getFieldProps("address")} placeholder="Address" className="input" />
      {formik.touched.address && formik.errors.address && (
        <p className="text-red-500">{formik.errors.address}</p>
      )}

      <input type="date" {...formik.getFieldProps("dob")} className="input" />
      {formik.touched.dob && formik.errors.dob && (
        <p className="text-red-500">{formik.errors.dob}</p>
      )}

      <div className="flex justify-between">
        <button type="button" className="btn" onClick={prevStep}>Back</button>
        <button type="submit" className="btn">Next</button>
      </div>
    </form>
  );
}
