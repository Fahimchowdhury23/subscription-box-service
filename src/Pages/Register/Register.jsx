import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlinePhotograph } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router";

const Register = () => {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold text-white drop-shadow mb-8">
        Let's Get started!
      </h2>

      <div className="w-full max-w-2xl p-10 mx-auto rounded-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
        <form className="flex flex-col gap-3">
          <button className="btn rounded-2xl font-semibold bg-sky-600 hover:bg-blue-500 text-white border-none transition backdrop-blur-xl">
            <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
            Continue with Google
          </button>

          <div className="flex items-center py-3">
            <p className="border-b-2 w-[20%] border-gray-500"></p>
            <p className="text-center w-[60%] text-gray-600 ">
              Or Continue with Filling up this form
            </p>
            <p className="border-b-2 w-[20%] border-gray-500"></p>
          </div>

          <label className="flex items-center gap-2 text-blue-600/70 ">
            <FaRegCircleUser size={24} />
            Username
          </label>

          <input
            type="text"
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Your Full Name"
          />

          <label className="flex items-center gap-2 text-blue-600/70 ">
            <HiOutlinePhotograph size={24} />
            Photo URL
          </label>

          <input
            type="text"
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Your Photo URL"
          />

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

          <button
            type="submit"
            className="w-full mt-4 btn py-3 rounded-2xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition text-2xl backdrop-blur-xl"
          >
            Register
          </button>
        </form>
        <p className="mt-6 justify-center flex gap-2 text-blue-500">
          Already have an account?
          <Link
            to="/auth/login"
            className="font-semibold hover:underline text-blue-600"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
