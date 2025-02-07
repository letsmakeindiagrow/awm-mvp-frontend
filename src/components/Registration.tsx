import GeneralDetails from "./GeneralDetails";
import PersonalDetails from "./PersonalDetails";
import DocumentUpload from "./DocumentUpload";
import useFormStore from "../store/store";

export default function Registration() {
  const { step } = useFormStore();

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>
      {step === 1 && <GeneralDetails />}
      {step === 2 && <PersonalDetails />}
      {step === 3 && <DocumentUpload />}
    </div>
  );
}
