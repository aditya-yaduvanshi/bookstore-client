import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Signup = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center relative h-screen w-screen bg-[url('/cover.jpg')] bg-center bg-cover overflow-hidden">
        <img
          src="/logo.svg"
          alt="pustakalay"
          className="h-10 md:h-14 absolute top-16"
        />
        <form className="sm:border sm:shadow-lg p-5 rounded-xl w-full sm:max-w-sm flex flex-col gap-5 sm:bg-white">
          <section className="text-center">
            <h2 className="text-lg text-semibold text-gray-800">SIGNUP</h2>
            <p className="text-gray-600">Join pustakalay now!</p>
          </section>
          <section className="flex flex-col gap-2.5 bg-white rounded-lg">
            <Input name="name" type="text" placeholder="Full Name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <Input name="password2" type="password" placeholder="Confirm Password" />
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
