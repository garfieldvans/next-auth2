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
      <div className="md:pl-16  pl-0 pt-16 md:pt-20">
        <AuthProvider session={session}><div className="p-4 ">{children}</div></AuthProvider>
        
        {/* </SessionProvider> */}
      </div>
    </div>
  );
}
