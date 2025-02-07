import { ChangeEvent } from "react";
import useFormStore from "../store/store";

export default function DocumentUpload() {
  const { formData, updateFormData, prevStep } = useFormStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      updateFormData({ document: event.target.files[0] });
    }
  };

  const handleSubmit = () => {
    if (formData.document) {
      alert("Document uploaded successfully!");
    } else {
      alert("Please upload a document.");
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" accept=".pdf,.png,.jpg" onChange={handleFileChange} className="input" />
      {formData.document && <p className="text-green-500">File Selected: {formData.document.name}</p>}

      <div className="flex justify-between">
        <button className="btn" onClick={prevStep}>Back</button>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
