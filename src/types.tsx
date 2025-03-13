export type TeamMember = {
    name: string;
    role: string;
    imageUrl: string;
    bio?: string; // Optional field: if not provided, will not show in the card
    background?: string[]; // Optional field: array of skills/experience
    achievements?: string[]; // Optional field: list of key achievements
    socialLinks?: { // Optional field: social media links for the member
      linkedin?: string;
      twitter?: string;
      github?: string;
      email?: string;
    };
  };

  // File: types.ts
export interface User {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
  error?: string;
}