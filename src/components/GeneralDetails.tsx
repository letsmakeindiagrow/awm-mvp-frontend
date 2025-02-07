import { useFormik } from "formik";
import * as Yup from "yup";
import useFormStore from "../store/store"; // Import Zustand store

export default function GeneralDetails() {
  const { formData, updateFormData, nextStep } = useFormStore();

  const formik = useFormik({
    initialValues: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number")
        .required("Required"),
    }),
    onSubmit: (values) => {
      updateFormData(values);
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input {...formik.getFieldProps("name")} placeholder="Full Name" className="input" />
      <input {...formik.getFieldProps("email")} placeholder="Email" className="input" />
      <input {...formik.getFieldProps("phone")} placeholder="Phone Number" className="input" />
      <button type="submit" className="btn">Next</button>
    </form>
  );
}
