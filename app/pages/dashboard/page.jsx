"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/login"); // Redirect if not authenticated
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:px-6 px-4 min-h-screen ">
      <h1 className="font-bold md:text-3xl text-2xl font-mono text-indigo-900 ">
        Welcome back <span className="capitalize">{session?.username}</span>
      </h1>

      <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between mt-4">
        <div className="bg-indigo-950 text-white rounded-xl p-6 md:w-7/12 w-full shadow-[0px_11px_11px_4px_#718096] ">
          <h1 className="text-center font-bold text-sm md:text-xl">
            User Data
          </h1>
          <div className="h-px bg-white w-full rounded-full my-4"/>
          <div className="flex flex-col gap-y-4">
            <h1>
              Full Name : <span className="capitalize">{session?.fullname}</span>
            </h1>
            <h1>
              Username : <span className="capitalize">{session?.username}</span>
            </h1>
            <h1>
              Email : <span className="underline text-blue-400">{session?.email}</span>
            </h1>
          </div>
        </div>
        <div className="hidden md:block md:w-4/12 min-h-40 h-fit shadow-[0px_11px_11px_4px_#cbd5e0] rounded-lg">
          <h1 className="bg-indigo-950 text-white font-semibold w-full rounded-t-lg text-center p-4">
            Newsletter
          </h1>
          <div className="p-2">
            <h1 className="font-semibold">No news today...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
