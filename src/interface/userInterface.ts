export interface UserInput {
  name: string;
  email: string;
  dob: string;
  phone: number;
}

export interface UserUpdateBody {
  email: string;
  phone: number;
  dob: string;
  name: string;
  id: number;
}
