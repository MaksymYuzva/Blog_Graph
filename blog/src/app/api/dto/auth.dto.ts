export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  token: string;
}

export type RegisterFormDTO = LoginFormDTO & {
  username: string;
  confirmPassword: string;
};
export type RegisterResponseDTO = LoginResponseDTO;

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  confirmPassword: string | null;
}
