import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { APP_PREFIX } from "@/consts/app";
import { loginAction, signupAction } from "@/redux/actions/auth.action";
import type { AuthState, JwtDecodedData } from "@/types/auth";

const initialState: AuthState = {
  loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
      state.expireAt = undefined;
      state.error = undefined;
      localStorage.removeItem(`${APP_PREFIX}:accessToken`);
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    getLoginState: (state) => {
      const token = localStorage.getItem(`${APP_PREFIX}:accessToken`);
      if (token) {
        const decoded = jwtDecode(token) as JwtDecodedData;
        if (!decoded.user) {
          state.error = "Something went wrong!";
          state.user = undefined;
        } else {
          state.user = decoded.user;
          state.accessToken = token;
          state.expireAt = decoded.exp;
          state.error = undefined;
        }
      }
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAction.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        const { data, error } = payload;
        if (error) state.error = error;
        else {
          const decoded = jwtDecode(data.accessToken) as JwtDecodedData;
          if (!decoded.user) {
            state.error = "Something went wrong!";
            state.user = undefined;
          } else {
            state.user = decoded.user;
            state.accessToken = data.accessToken;
            state.expireAt = decoded.exp;
            state.error = undefined;
            localStorage.setItem(`${APP_PREFIX}:accessToken`, data.accessToken);
          }
        }
        state.loading = false;
      })
      .addCase(signupAction.rejected, (state) => {
        state.loading = false;
        state.error = "Failed connecting to the server.";
      });

    builder
      .addCase(loginAction.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        const { data, error } = payload;
        if (error) state.error = error;
        else {
          const decoded = jwtDecode(data.accessToken) as JwtDecodedData;
          if (!decoded.user) {
            state.error = "Something went wrong!";
            state.user = undefined;
          } else {
            state.user = decoded.user;
            state.accessToken = data.accessToken;
            state.expireAt = decoded.exp;
            state.error = undefined;
            localStorage.setItem(`${APP_PREFIX}:accessToken`, data.accessToken);
          }
        }
        state.loading = false;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.error = "Failed connecting to the server.";
      });
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
