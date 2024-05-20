'use client'
import React from "react";
import { redirect } from "next/navigation";
import useSessionCheck from "../hook/useSessionCheck";

export default function Homes() {

  const { status } = useSessionCheck();

  console.log(status);
  

  if(status === 'unauthenticated') {
    redirect("/login")
  }
  return (
    <div className="bg-white flex items-center justify-center ">
      {/* <AuthLogin/> */}
    </div>
  );
}
