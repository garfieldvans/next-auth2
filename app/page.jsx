"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function App() {
  
  const router = useRouter()

  const toRepo = router.push('https://github.com/garfieldvans/next-auth2')
  return (
    <div className="bg-white flex flex-col items-center justify-center p-6">
      <div className="bg-gray-200 flex w-full p-6 rounded-lg flex-wrap flex-row justify-center items-center">
        <h1>
          Ini aplikasi versi dev jadi telusuri aplikasi melalui login dari{" "}
          {"=> "}{" "}
        </h1>
        <Link
          href={"/login"}
          className="text-blue-500 underline hover:text-white hover:font-bold hover:bg-indigo-950 hover:rounded-xl p-2"
        >
          Log-In
        </Link>
      </div>

      <div className="bg-indigo-950 text-white text-sm md:text-lg drop-shadow-lg p-6 my-6 rounded-lg w-full">
        <h1 className="font-bold md:text-2xl text-xl my-3">Summary</h1>
        <div>
          <p>
            - website ini dibangun menggunakan Next Js dan memuat API yang
            dibangun menggunakan Express Js + Sequelize.
          </p>
          <p>- untuk database yang digunakan yaitu database postgreSQL.</p>
          <p>
            - web ini dan juga api dideploy malalui <u>Vercel.com.</u>
          </p>
        </div>

        <div>
          <button className="bg-gray-100 p-2 text-indigo-950 my-4 rounded-xl text-center hover:font-bold hover:underline" onClick={toRepo}>REPOSITORY</button>
        </div>
      </div>
    </div>
  );
}
