'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Dashboard = () => {
    // const { data: session, status} : {data:any; status:string} = useSession()
    // const router = useRouter()

    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         console.log(status);
            
    //     }
    // }, [router, status])
  return (
    <div className="md:px-6 px-4 h-screen md:pt-0 pt-6 ">
      <h1 className="font-bold md:text-3xl text-2xl font-mono text-indigo-900 ">
        Welcome back User{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-16 mt-4">
        <div className="bg-indigo-950 text-white rounded-xl p-4 md:col-span-5 ">
            <h1>User Data</h1>
        </div>
        <div className="hidden md:block col-span-3 text-center ">
            <h1>Newsletter</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
