'use client'
import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <div className="bg-white flex items-center justify-center">
      <Link href={'/login'}>LOGIN</Link>
    </div>
  );
}
