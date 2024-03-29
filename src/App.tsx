import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Books from "@/pages/books";
import PublishBook from "@/pages/publishBook";
import PrivateOutlet from "@/hoc/PrivateOutlet";
import useAuth from "@/hooks/useAuth";

const App = () => {
  const { checkLoginState } = useAuth();

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="books" element={<PrivateOutlet />}>
          <Route path="" element={<Books />} />
          <Route path="publish" element={<PublishBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
