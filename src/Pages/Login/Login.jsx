import React from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router";

const Login = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2">
        <div className="flex flex-col w-full rounded-l-xl items-center justify-center bg-blue-700">
          <h2 className="text-center text-4xl font-bold text-white drop-shadow mb-8">
            Welcome Back!
          </h2>
          <img
            src="https://i.ibb.co/WpNg6ywr/Humaaans-3-Characters.png"
            alt="3 characters having conversation"
          />
        </div>

        {/* Login Form */}

        <div className="w-full p-10 rounded-r-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
          <div className="w-10/12 mx-auto">
            <form className="flex flex-col gap-3">
              <button className="btn rounded-2xl font-semibold bg-sky-600 hover:bg-blue-500 text-white border-none transition backdrop-blur-xl">
                <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
                Continue with Google
              </button>
              <div className="flex items-center py-3">
                <p className="border-b-2 w-[20%] border-gray-500"></p>
                <p className="text-center w-[60%] text-gray-500 ">
                  Or Continue with Email / Password
                </p>
                <p className="border-b-2 w-[20%] border-gray-500"></p>
              </div>

              <label className="flex items-center gap-2 text-blue-600/70 ">
                <HiOutlineMail size={24} />
                Email
              </label>
              <input
                type="email"
                className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Email address"
              />
              <label className="flex items-center gap-2 text-blue-600/80 ">
                <MdLockOutline size={24} /> Password
              </label>
              <input
                type="password"
                className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Password"
              />
              <div className="flex justify-between items-center">
                <a className="text-sm text-blue-600/80 cursor-pointer hover:underline">
                  Forgotten password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full btn py-3 rounded-2xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition backdrop-blur-xl"
              >
                Sign In
              </button>
            </form>
            <p className="mt-6 justify-center flex gap-2 text-blue-500">
              Are you new here?
              <Link
                to="/auth/register"
                className="font-semibold hover:underline text-blue-600"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
