import React, { useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import SpinnerIcon from "~icons/svg-spinners/ring-resize";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useAuth from "@/hooks/useAuth";

const Signup = () => {
  const {
    auth: { loading, error, user },
    setError,
    signup,
  } = useAuth();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return setError("Name is required!");
    if (!email.trim()) return setError("Email is required!");
    if (!password.trim()) return setError("Password is required!");
    if (password.trim() !== password2.trim())
      return setError("Passwords are not matching!");

    signup({
      name,
      email,
      password,
    });
  };

  if (user)
    return (
      <Navigate to={`/${searchParams.get("redirect") || "books"}`} replace />
    );

  return (
    <>
      <main className="flex flex-col justify-center items-center relative h-screen w-screen bg-[url('/cover.jpg')] bg-center bg-cover overflow-hidden">
        <img
          src="/logo.svg"
          alt="pustakalay"
          className="h-10 md:h-14 absolute top-16"
        />
        <form
          onSubmit={handleSubmit}
          className="sm:border sm:shadow-lg p-5 rounded-xl w-full sm:max-w-sm flex flex-col gap-5 sm:bg-white relative"
        >
          {loading && (
            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-75 rounded-xl">
              <SpinnerIcon className="text-5xl text-blue-500" />
            </div>
          )}
          <section className="text-center">
            <h2 className="text-lg text-semibold text-gray-800">SIGNUP</h2>
            <p className="text-gray-600">Join pustakalay now!</p>
          </section>
          <section className="flex flex-col gap-2.5 bg-white rounded-lg">
            <Input
              name="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              name="password2"
              type="password"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {error ? (
              <p className="border-red-500 text-red-500 bg-red-50 px-2.5 py-2 rounded-lg">
                {error}
              </p>
            ) : null}
          </section>
          <section className="flex flex-col justify-center items-center gap-2.5">
            <Button variant="primary" color="primary" className="w-full">
              Sign Up
            </Button>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/auth/login"
                className="text-blue-500 text-semibold hover:text-blue-700"
              >
                LogIn
              </Link>
            </p>
          </section>
        </form>
      </main>
    </>
  );
};

export default React.memo(Signup);
