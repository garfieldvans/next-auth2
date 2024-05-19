"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header/page";
import AuthProvider from "@/components/authProvider";

export default function PagesLayout({
  children,
  session
}) {
  const currentPath = usePathname();
  const processedPath = currentPath.split("/").filter(Boolean);
  const displayPath =
    processedPath.length > 1 ? processedPath[1] : processedPath[0];

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
