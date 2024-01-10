export interface User {
  name: string;
  email: string;
  _id: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  expireAt: number | null;
  loading: boolean;
  error: string | null;
}
