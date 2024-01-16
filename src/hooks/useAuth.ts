import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signupAction } from "@/redux/actions/auth.action";
import { AppDispatch, RootState } from "@/redux/store";
import type { AuthState, LoginBody, SignupBody } from "@/types/auth";
import { authActions } from "@/redux/reducers/auth.reducer";

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector<RootState, AuthState>((state) => state.auth);

  const login = useCallback(
    (arg: LoginBody) => dispatch(loginAction(arg)),
    [dispatch]
  );
  
  const signup = useCallback(
    (arg: SignupBody) => dispatch(signupAction(arg)),
    [dispatch]
  );

  const logout = useCallback(() => dispatch(authActions.logout()), [dispatch]);

  const checkLoginState = useCallback(
    () => dispatch(authActions.getLoginState()),
    [dispatch]
  );

  const setError = useCallback(
    (error: AuthState["error"]) => dispatch(authActions.setError(error)),
    [dispatch]
  );

  return { auth, login, signup, logout, checkLoginState, setError };
};

export default useAuth;
