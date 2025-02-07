import { useState } from "react";
import GeneralDetails from "../components/GeneralDetails";
import PersonalDetails from "../components/PersonalDetails";
import DocumentUpload from "../components/DocumentUpload";
import useFormStore from "../store/store";

export default function Registration() {
  const { step, nextStep, prevStep } = useFormStore();

  return (
    <div className="max-w-lg mx-auto p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>

      {step === 1 && <GeneralDetails />}
      {step === 2 && <PersonalDetails />}
      {step === 3 && <DocumentUpload />}

      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button className="btn bg-gray-500" onClick={prevStep}>
            Back
          </button>
        )}
        {step < 3 ? (
          <button className="btn bg-blue-500" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="btn bg-green-500">Submit</button>
        )}
      </div>
    </div>
  );
}
