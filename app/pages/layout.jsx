"use client";

import Header from "./components/header/page";
import AuthProvider from "@/components/authProvider";

export default function PagesLayout({
  children,
  session
}) {

  return (
    <div className="bg-zinc-200 min-h-screen">
      <Header />
      <div className="md:pl-16  pl-0">
        <AuthProvider session={session}><div className="p-4 ">{children}</div></AuthProvider>
        
        {/* </SessionProvider> */}
      </div>
    </div>
  );
}
