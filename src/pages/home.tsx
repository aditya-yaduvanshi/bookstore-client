import React from "react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import useAuth from "@/hooks/useAuth";

const Home = () => {
  const {
    auth: { user },
  } = useAuth();
  return (
    <>
      <main className="flex justify-center items-center flex-col gap-2.5 h-screen w-screen bg-[url('/cover.jpg')] bg-center bg-cover overflow-hidden">
        <p className="font-semibold text-gray-600 text-sm md:text-base">
          Now browse or publish books on
        </p>
        <img src="/logo.svg" alt="pustakalay" className="h-10 md:h-14" />
        <Button color="primary" variant="primary" className="px-5">
          {user ? (
            <Link to="/books">BROWSE</Link>
          ) : (
            <Link to="/auth/login">JOIN NOW</Link>
          )}
        </Button>
      </main>
    </>
  );
};

export default React.memo(Home);
