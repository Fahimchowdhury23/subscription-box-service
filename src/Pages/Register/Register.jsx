import React, { use, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlinePhotograph } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, googleSignIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const profile = {
      displayName,
      photoURL,
    };

    createUser(email, password)
      .then((result) => {
        updateUser(profile)
          .then(() => {
            toast.success(
              `Woohoo! ${result?.user?.displayName}, you're officially in. Let's have some fun!.`,
              {
                duration: 3000,
                className: "text-center",
              }
            );
            navigate("/");
          })
          .catch((error) => {
            toast.error("Current User is not updating", error?.message);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("That email is already taken. Try logging in?");
        } else if (error.code === "auth/weak-password") {
          toast.error(
            "Your password is too weak. Try adding numbers or symbols."
          );
        } else {
          toast.error("Oops, something went wrong. Please try again.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success(
          `Welcome, ${result?.user?.displayName}! You're logged in.`,
          {
            duration: 3000,
            className: "text-center",
          }
        );
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something went wrong", error?.message);
      });
  };

  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold text-white drop-shadow mb-8">
        Let's Get started!
      </h2>

      <div className="w-full max-w-2xl p-10 mx-auto rounded-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
        {/* Google Sign In */}

        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-2xl w-full font-semibold bg-sky-600 hover:bg-blue-500 text-white border-none transition backdrop-blur-xl"
        >
          <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
          Continue with Google
        </button>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <div className="flex items-center py-3">
            <p className="border-b-2 w-[20%] border-gray-500"></p>
            <p className="text-center w-[60%] text-gray-600 ">
              Or Continue with Filling up this form
            </p>
            <p className="border-b-2 w-[20%] border-gray-500"></p>
          </div>

          {/* Name Field */}

          <label className="flex items-center gap-2 text-blue-600/70 ">
            <FaRegCircleUser size={24} />
            Username
          </label>

          <input
            type="text"
            name="name"
            required
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Your Full Name"
          />

          {/* Photo URL Field */}

          <label className="flex items-center gap-2 text-blue-600/70 ">
            <HiOutlinePhotograph size={24} />
            Photo URL
          </label>
          <input
            type="text"
            name="photo"
            required
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Your Photo URL"
          />

          {/* Email Field */}

          <label className="flex items-center gap-2 text-blue-600/70 ">
            <HiOutlineMail size={24} />
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Email address"
          />

          {/* Password Field */}

          <label className="flex items-center gap-2 text-blue-600/80 ">
            <MdLockOutline size={24} /> Password
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              className="px-4 py-3 w-full rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
              placeholder="Password"
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute top-3 right-5 cursor-pointer text-sky-700  text-2xl"
            >
              {showPass ? <LuEye></LuEye> : <LuEyeClosed></LuEyeClosed>}
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-4 btn py-3 rounded-2xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition text-2xl backdrop-blur-xl"
          >
            Register
          </button>
        </form>

        <Link
          to="/auth/login"
          className="font-semibold mt-6 flex justify-center hover:underline text-blue-600"
        >
          Already have an account?
        </Link>
      </div>
    </section>
  );
};

export default Register;
