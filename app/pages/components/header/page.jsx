"use client";

import React, { useState } from "react";
import { menus } from "../../../api/datas.js";
import Link from "next/link.js";
import { MdClose, MdLogout, MdMenu } from "react-icons/md";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation.js";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const currentPath = usePathname();
  const processedPath = currentPath.split("/").filter(Boolean);
 const displayPath =
    processedPath.length > 1 ? processedPath[1] : processedPath[0];
  return (
    <div>
      <div className=" fixed top-0 w-full flex items-center font-bold text-xl md:text-2xl justify-center py-4 md:py-5 bg-indigo-950 h-16 md:h-20 shadow-[0px_5px_9px_0px_#667eea]">
          <span className="text-gray-100 capitalize">{displayPath}</span>
        </div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 h-screen bg-indigo-950 group transition-all duration-200 ease-in-out w-16 hover:w-60 md:inline hidden hover:shadow-[0px_5px_9px_0px_#667eea]"
        aria-label="Sidebar"
      >
        <div className="text-indigo-950 m-3 p-2 hidden md:flex text-1xl font-semibold bg-gray-100 rounded-full flex-row justify-content items-center w-12 h-12 text-center">
          <h1 className="flex w-full justify-center ">AL.</h1>
        </div>

        <div className="h-5/6 px-3 overflow-hidden flex flex-col justify-between">
          <div className="space-y-2 font-medium ">
            <div className="h-px bg-gray-300 w-full mb-3 mt-2" />
            {menus.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-3 pl-2 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out"
                >
                  <Link href={item.link} className="grid grid-cols-7 w-full">
                    <item.icon className="text-xl" />
                    <span className="hidden group-hover:block text-sm col-span-6">
                      {item.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* <div className="h-px bg-gray-300 w-full mb-3"/> */}
          <div className="py-3 pl-2 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out font-medium">
            <button className="grid grid-cols-7"  onClick={() => signOut({callbackUrl: '/login', redirect: true})}>
              <MdLogout className="text-xl" />
              <span className="hidden group-hover:block text-sm col-span-6">
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* mobile menu */}
      <div className="fixed top-0 left-0 z-40 bg-indigo-950 text-white p-5 md:hidden flex items-center font-bold text-2xl flex-row justify-content h-16">
        <button onClick={toggleSidebar} className="flex items-center">
          {!isSidebarOpen ? <MdMenu /> : <MdClose />}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-indigo-950 md:hidden w-5/12 text-white pt-16 group transition-all duration-300 pl-4 flex flex-col justify-between">
          <div>
            {menus.map((menu, i) => {
              return (
                <div
                  key={i}
                  className="my-2 p-3 text-white rounded-l-xl hover:bg-indigo-700"
                >
                  <Link
                    href={menu.link}
                    onClick={toggleSidebar}
                    className="flex flex-row gap-x-3 items-center"
                  >
                    <span className="group-hover:inline-block text-sm">
                      {menu.name}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center p-3 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 ease-in-out">
            <button
              className="flex flex-row gap-x-2 items-center"
              onClick={() => signOut({callbackUrl: '/login', redirect: true})}
            >
              <MdLogout className="text-xl" />
              <span className="inline-block text-sm">Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
