import React, { PropsWithChildren } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import SpinnerIcon from "~icons/svg-spinners/ring-resize";
import useAuth from "@/hooks/useAuth";

const PrivateOutlet = ({ children }: PropsWithChildren) => {
  const {
    auth: { user, loading },
  } = useAuth();

  const { pathname } = useLocation();

  if (loading)
    return (
      <main className="flex justify-center items-center flex-col gap-2.5 h-screen w-screen bg-[url('/cover.jpg')] bg-center bg-cover overflow-hidden">
        <img src="/logo.svg" alt="pustakalay" className="h-10 md:h-14" />
        <SpinnerIcon className="text-5xl" />
      </main>
    );

  if (!user)
    return <Navigate to={`/auth/login/?redirect=${pathname}`} replace />;

  return children ?? <Outlet />;
};

export default React.memo(PrivateOutlet);
