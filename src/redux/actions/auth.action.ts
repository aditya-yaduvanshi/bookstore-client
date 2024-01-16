import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOGIN_PATH, SIGNUP_PATH } from "@/consts/urls";
import type { LoginBody, SignupBody } from "@/types/auth";

export const signupAction = createAsyncThunk(
  "auth/signup",
  async ({ name, email, password }: SignupBody) => {
    const res = await fetch(SIGNUP_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    return await res.json();
  }
);

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginBody) => {
    const res = await fetch(LOGIN_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return await res.json();
  }
);
