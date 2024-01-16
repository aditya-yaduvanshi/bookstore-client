import { JwtPayload } from "jwt-decode";

export type User = {
  name: string;
  email: string;
  _id: string;
};

export type AuthState = {
  user?: User;
  accessToken?: string;
  expireAt?: number;
  loading: boolean;
  error?: string;
};

export type LoginBody = Pick<User, "email"> & {
  password: string;
};

export type SignupBody = LoginBody & Pick<User, "name">;

export type JwtDecodedData = JwtPayload & {
  user: AuthState["user"];
};
