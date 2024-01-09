import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "@/pages/signup";
import Login from "@/pages/login";
import Home from "@/pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
