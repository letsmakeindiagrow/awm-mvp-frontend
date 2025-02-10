import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRight,
  ArrowLeft,
  Upload,
  Check,
  AlertCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

interface FormData {
  referralCode: string;
  mobileNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
  };
  identityDetails: {
    panNumber: string;
    aadharNumber: string;
    panAttachment: File | null;
    aadharFront: File | null;
    aadharBack: File | null;
  };
  bankDetails: {
    bankAccountNumber: string;
    ifscCode: string;
    bankBranchName: string;
    bankProof: File | null;
  };
  // isEmailVerified: boolean;
  // isMobileVerified: boolean;
}

interface FileUploadBoxProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  accept?: string;
}

const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  label,
  onChange,
  file,
  accept = ".pdf,.jpg,.jpeg,.png",
}) => (
  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors">
    <Label className="block mb-2">{label}</Label>
    <div className="space-y-2">
      {file ? (
        <div className="text-sm text-green-600 flex items-center justify-center gap-2">
          <Check className="w-4 h-4" />
          {file.name}
        </div>
      ) : (
        <Upload className="w-8 h-8 mx-auto text-gray-400" />
      )}
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
        {file ? "Change File" : "Choose File"}
      </Button>
    </div>
  </div>
);

const VerificationField: React.FC<{
  label: string;
  value: string;
  isVerified: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVerify: () => void;
  name: string;
  type?: string;
  error?: string;
}> = ({
  label,
  value,
  isVerified,
  onChange,
  onVerify,
  name,
  type = "text",
  error,
}) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={
            isVerified ? "border-green-500" : error ? "border-red-500" : ""
          }
          required
        />
        {error && (
          <Tooltip>
            <TooltipTrigger asChild>
              <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{error}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      <Button
        type="button"
        onClick={onVerify}
        disabled={isVerified || !value}
        className="whitespace-nowrap bg-blue-600 text-white hover:bg-blue-700"
      >
        {isVerified ? (
          <span className="flex items-center gap-1">
            <Check className="w-4 h-4" /> Verified
          </span>
        ) : (
          "Verify"
        )}
      </Button>
    </div>
  </div>
);

const RegistrationForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    referralCode: "",
    mobileNumber: "",
    email: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      pincode: "",
    },
    identityDetails: {
      panNumber: "",
      aadharNumber: "",
      panAttachment: null,
      aadharFront: null,
      aadharBack: null,
    },
    bankDetails: {
      bankAccountNumber: "",
      ifscCode: "",
      bankBranchName: "",
      bankProof: null,
    },
    // isEmailVerified: boolean;
    // isMobileVerified: boolean;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name, value);
  };

  type IdentityFileFields = "panAttachment" | "aadharFront" | "aadharBack";
  type BankFileFields = "bankProof";

  // Create a discriminated union for the different sections
  type FileChangeSection =
    | {
        section: "identityDetails";
        field: IdentityFileFields;
      }
    | {
        section: "bankDetails";
        field: BankFileFields;
      };

  const handleFileChange =
    (fileInfo: FileChangeSection) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        console.log(
          `File selected for ${fileInfo.section}.${fileInfo.field}:`,
          file
        );

        setFormData((prev) => ({
          ...prev,
          [fileInfo.section]: {
            ...prev[fileInfo.section],
            [fileInfo.field]: file,
          },
        }));
      }
    };

  // const handleVerify = (field: "email" | "mobile") => {
  //   // Simulate verification process
  //   const verificationField =
  //     field === "email" ? "isEmailVerified" : "isMobileVerified";
  //   setFormData((prev) => ({
  //     ...prev,
  //     [verificationField]: true,
  //   }));
  // };

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z]+$/.test(value)) {
          error = "Only alphabets are allowed.";
        }
        break;
      case "mobileNumber":
        if (!/^\d{10}$/.test(value)) {
          error = "Mobile number must be 10 digits.";
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "panNumber":
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
          error = "Invalid PAN number format.";
        }
        break;
      case "aadharNumber":
        if (!/^\d{12}$/.test(value)) {
          error = "Aadhar number must be 12 digits.";
        }
        break;
      case "pincode":
        if (!/^\d{6}$/.test(value)) {
          error = "Pincode must be 6 digits.";
        }
        break;
      case "bankAccountNumber":
        if (!/^\d{9,18}$/.test(value)) {
          error = "Bank account number must be between 9 to 18 digits.";
        }
        break;
      case "ifscCode":
        if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
          error = "Invalid IFSC code format.";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    switch (currentStep) {
      case 1:
        return Boolean(
          formData.mobileNumber &&
            formData.email &&
            // formData.isEmailVerified &&
            // formData.isMobileVerified &&
            !errors.mobileNumber &&
            !errors.email
        );
      case 2:
        return Boolean(
          formData.firstName &&
            formData.lastName &&
            formData.dateOfBirth &&
            !errors.firstName &&
            !errors.lastName
        );
      case 3:
        return Boolean(
          formData.identityDetails.panNumber &&
            formData.identityDetails.aadharNumber &&
            formData.identityDetails.panAttachment &&
            formData.identityDetails.aadharFront &&
            formData.identityDetails.aadharBack &&
            !errors.panNumber &&
            !errors.aadharNumber
        );
      case 4:
        return Boolean(
          formData.address.line1 &&
            formData.address.city &&
            formData.address.pincode &&
            !errors.pincode
        );
      case 5:
        return Boolean(
          formData.bankDetails.bankAccountNumber &&
            formData.bankDetails.ifscCode &&
            formData.bankDetails.bankBranchName &&
            formData.bankDetails.bankProof &&
            !errors.bankAccountNumber &&
            !errors.ifscCode
        );
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Initial Registration</h2>
      <div>
        <Label htmlFor="referralCode">Referral Code (Optional)</Label>
        <Input
          id="referralCode"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleInputChange}
        />
      </div>
      <VerificationField
        label="Mobile Number"
        value={formData.mobileNumber}
        // isVerified={formData.isMobileVerified}
        onChange={handleInputChange}
        // onVerify={() => handleVerify("mobile")}
        name="mobileNumber"
        type="tel"
        error={errors.mobileNumber}
      />
      <VerificationField
        label="Email"
        value={formData.email}
        // isVerified={formData.isEmailVerified}
        onChange={handleInputChange}
        // onVerify={() => handleVerify("email")}
        name="email"
        type="email"
        error={errors.email}
      />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <div className="relative">
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.firstName}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <div className="relative">
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.lastName}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
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

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Identity Documents</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="panNumber">PAN Number</Label>
          <div className="relative">
            <Input
              id="panNumber"
              name="panNumber"
              value={formData.identityDetails.panNumber}
              onChange={handleInputChange}
              required
              className={errors.panNumber ? "border-red-500" : ""}
            />
            {errors.panNumber && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.panNumber}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <FileUploadBox
          label="PAN Card Attachment"
          onChange={handleFileChange({
            section: "identityDetails",
            field: "panAttachment",
          })}
          file={formData.identityDetails.panAttachment}
        />
        <div>
          <Label htmlFor="aadharNumber">Aadhar Number</Label>
          <div className="relative">
            <Input
              id="aadharNumber"
              name="aadharNumber"
              value={formData.identityDetails.aadharNumber}
              onChange={handleInputChange}
              required
              className={errors.aadharNumber ? "border-red-500" : ""}
            />
            {errors.aadharNumber && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.aadharNumber}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FileUploadBox
            label="Aadhar Front"
            onChange={handleFileChange({
              section: "identityDetails",
              field: "aadharFront",
            })}
            onChange={formData.identityDetails.aadharFront}
          />
          <FileUploadBox
            label="Aadhar Back"
            onChange={handleFileChange({
              section: "identityDetails",
              field: "aadharBack",
            })}
            file={formData.identityDetails.aadharBack}
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Address Details</h2>
      <div>
        <Label htmlFor="line1">Address Line 1</Label>
        <Input
          id="line1"
          name="line1"
          value={formData.address.line1}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="line2">Address Line 2 (Optional)</Label>
        <Input
          id="line2"
          name="line2"
          value={formData.address.line2}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.address.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="pincode">Pincode</Label>
          <div className="relative">
            <Input
              id="pincode"
              name="pincode"
              value={formData.address.pincode}
              onChange={handleInputChange}
              required
              className={errors.pincode ? "border-red-500" : ""}
            />
            {errors.pincode && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.pincode}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Bank Account Details</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
          <div className="relative">
            <Input
              id="bankAccountNumber"
              name="bankAccountNumber"
              value={formData.bankDetails.bankAccountNumber}
              onChange={handleInputChange}
              required
              className={errors.bankAccountNumber ? "border-red-500" : ""}
            />
            {errors.bankAccountNumber && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.bankAccountNumber}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="ifscCode">IFSC Code</Label>
          <div className="relative">
            <Input
              id="ifscCode"
              name="ifscCode"
              value={formData.bankDetails.ifscCode}
              onChange={handleInputChange}
              required
              className={errors.ifscCode ? "border-red-500" : ""}
            />
            {errors.ifscCode && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertCircle className="w-4 h-4 text-red-500 absolute right-2 top-1/2 transform -translate-y-1/2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{errors.ifscCode}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor="bankBranchName">Bank Branch Name</Label>
          <Input
            id="bankBranchName"
            name="bankBranchName"
            value={formData.bankDetails.bankBranchName}
            onChange={handleInputChange}
            required
          />
        </div>
        <FileUploadBox
          label="Bank Proof (Cancelled Cheque/Passbook/Statement)"
          onChange={handleFileChange({
            section: "bankDetails",
            field: "bankProof",
          })}
          file={formData.bankDetails.bankProof}
        />
      </div>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 5 && validateStep(5)) {
      const submitData = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, String(value));
      });

      // Append all files
      // Object.entries(documents).forEach(([key, file]) => {
      //   if (file) {
      //     submitData.append(key, file);
      //   }
      // });

      // Here you would typically send the data to your backend
      console.log("Submitting form data:", formData);

      // Simulate sending verification email
      console.log("Sending verification email with form details...");
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen p-6 bg-gray-200">
        <Card className="w-full max-w-2xl mx-auto border-0 shadow-xl mt-10 mb-10 bg-[#E6F7FF]">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Progress indicator */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        step >= num ? "bg-[#08AFF1] text-white" : "bg-gray-200"
                      }`}
                    >
                      {num}
                    </div>
                    {num < 5 && (
                      <div
                        className={`w-16 h-1 ${
                          step > num ? "bg-[#08AFF1]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form steps remain the same */}
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {step === 4 && renderStep4()}
              {step === 5 && renderStep5()}

              {/* Navigation buttons with updated colors */}
              <div className="flex justify-between pt-6">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-2 border-[#AACF45] text-[#AACF45] hover:bg-[#AACF45] hover:text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  {step < 5 ? (
                    <Button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      disabled={!validateStep(step)}
                      className="flex items-center gap-2 bg-[#08AFF1] text-white hover:bg-[#0899d1]"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!validateStep(step)}
                      className="flex items-center gap-2 bg-[#AACF45] text-white hover:bg-[#99bb3f]"
                    >
                      Submit for Verification
                    </Button>
                  )}
                </div>
              </div>

              {/* Step indicator text */}
              <div className="text-center text-sm text-gray-500 mt-4">
                Step {step} of 5:{" "}
                {step === 1
                  ? "Initial Registration"
                  : step === 2
                  ? "Personal Details"
                  : step === 3
                  ? "Identity Documents"
                  : step === 4
                  ? "Address Details"
                  : "Bank Account Details"}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default RegistrationForm;
