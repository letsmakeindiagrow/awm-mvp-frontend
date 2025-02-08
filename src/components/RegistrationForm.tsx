import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Upload } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  line1: string;
  line2: string;
  city: string;
  pincode: string;
  panNumber: string;
  aadharNumber: string;
}

interface Documents {
  panAttachment: File | null;
  aadharFront: File | null;
  aadharBack: File | null;
  bankProof: File | null;
}

interface FileUploadBoxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  label,
  onChange,
  accept = ".pdf,.jpg,.jpeg,.png",
}) => (
  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
    <Label className="block mb-2">{label}</Label>
    <div className="space-y-2">
      <Upload className="w-8 h-8 mx-auto text-gray-400" />
      <Input
        type="file"
        onChange={onChange}
        accept={accept}
        className="hidden"
        id={label.replace(/\s+/g, "")}
      />
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          document.getElementById(label.replace(/\s+/g, ""))?.click()
        }
      >
        Choose File
      </Button>
    </div>
  </div>
);

const SignupForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    line1: "",
    line2: "",
    city: "",
    pincode: "",
    panNumber: "",
    aadharNumber: "",
  });

  const [documents, setDocuments] = useState<Documents>({
    panAttachment: null,
    aadharFront: null,
    aadharBack: null,
    bankProof: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange =
    (name: keyof Documents) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setDocuments((prev) => ({
          ...prev,
          [name]: file,
        }));
      }
    };

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        return Boolean(
          formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.mobileNumber &&
            formData.dateOfBirth
        );
      case 2:
        return Boolean(formData.line1 && formData.city && formData.pincode);
      case 3:
        return Boolean(
          formData.panNumber &&
            formData.aadharNumber &&
            documents.panAttachment &&
            documents.aadharFront &&
            documents.aadharBack &&
            documents.bankProof
        );
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3 && validateStep(3)) {
      // Create FormData object with all files and form data
      const submitData = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      // Append all files
      Object.entries(documents).forEach(([key, file]) => {
        if (file) {
          submitData.append(key, file);
        }
      });

      // Log the data that would be sent to the backend
      console.log("Form Data:", formData);
      console.log("Documents:", documents);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        <Input
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>
      <div>
        <Label htmlFor="line1">Address Line 1</Label>
        <Input
          id="line1"
          name="line1"
          value={formData.line1}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="line2">Address Line 2 (Optional)</Label>
        <Input
          id="line2"
          name="line2"
          value={formData.line2}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="pincode">Pincode</Label>
          <Input
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Identity Details</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="panNumber">PAN Number</Label>
          <Input
            id="panNumber"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="aadharNumber">Aadhar Number</Label>
          <Input
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FileUploadBox
            label="PAN Card"
            onChange={handleFileChange("panAttachment")}
          />
          <FileUploadBox
            label="Bank Proof"
            onChange={handleFileChange("bankProof")}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FileUploadBox
            label="Aadhar Front"
            onChange={handleFileChange("aadharFront")}
          />
          <FileUploadBox
            label="Aadhar Back"
            onChange={handleFileChange("aadharBack")}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Progress indicator */}
          <div className="flex justify-center mb-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      step > num ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form steps */}
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!validateStep(step)}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" disabled={!validateStep(step)}>
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupForm;
