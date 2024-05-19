import Link from 'next/link'
import React from 'react'

const Register = () => {
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
                Sign up here
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                // onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    name="name"
                    id="name"
                    className="bg-white border text-black sm:text-sm rounded-lg block w-full p-2.5 bg-indigo-950 placeholder-gray-400 focus:outline-0"
                    placeholder="bastian@blabla.com"
                    required
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    // value={username}
                    // onChange={(e) => setEmail(e.target.value)}
                    name="username"
                    id="username"
                    className="bg-white border text-black sm:text-sm rounded-lg block w-full p-2.5 bg-indigo-950 placeholder-gray-400 focus:outline-0"
                    placeholder="bastian@blabla.com"
                    required
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
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
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    required
                  />
                </div>
                <button
                  type="submit" // Call handleLogin when button is clicked
                  className="flex w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 items-center justify-center"
                >
                  Sign up
                </button>
                <p className="text-sm font-light text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-white hover:text-gray-400 hover:underline "
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
