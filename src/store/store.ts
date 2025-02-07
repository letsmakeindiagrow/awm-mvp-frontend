import { create } from "zustand";

// Define the types for the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  aadhar: string;
  address: string;
  dob: string;
  document: File | null;
}

// Define the types for the store
interface FormStore {
  step: number;
  formData: FormData;
  nextStep: () => void;
  prevStep: () => void;
  updateFormData: (data: Partial<FormData>) => void;
}

// Zustand store with TypeScript
const useFormStore = create<FormStore>((set) => ({
  step: 1,
  formData: {
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    address: "",
    dob: "",
    document: null,
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export default useFormStore;
