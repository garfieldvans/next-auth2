"use client";

import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { loginAction } from "../pages/components/action/loginAction";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");  

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log("Response from signIn:", response);

      if (response?.ok) {
        if (response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token stored in localStorage:', localStorage.getItem('token'));
        } else {
          console.error('Token not found in response');
        }
        window.location.href = "/pages/dashboard";
      } else {
        setError("Email or password you entered is incorrect.");
        console.error("Error response:", response);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-full justify-center flex md:py-6">
      <section className="bg-indigo-950 md:w-5/12 w-full h-screen md:h-auto md:rounded-2xl px-6 md:px-2">
        <div className="flex flex-col items-center justify-center px-6 md:px-2 py-8 mx-auto ">
          <div className="flex items-center text-2xl font-semibold text-white">
            <div className="text-indigo-950 m-4 p-2 flex text-xl font-bold bg-gray-100 rounded-full flex-row justify-content items-center w-12 h-12">
              <h1>AL.</h1>
            </div>
            Admin Ala-Ala
          </div>
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-indigo-950 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                Sign in to your account
              </h1>

              {error && <div className="text-red-500">{error}</div>}
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-white border text-black sm:text-sm rounded-lg block w-full p-2.5 bg-indigo-950 placeholder-gray-400 focus:outline-0"
                    placeholder="bastian@blabla.com"
                    required
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white border text-black sm:text-sm rounded-lg block w-full p-2.5 bg-indigo-950 placeholder-gray-400 focus:outline-0"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                  />
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-white hover:text-gray-400 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit" 
                  className="flex w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing up..." : "Sign up"}
                </button>
                <p className="text-sm font-light text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-white hover:text-gray-400 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthLogin;
