import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  // SignIn With Email and Password

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasMinLength = password.length >= 6;

    toast.dismiss();

    if (!hasUppercase) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must include at least one lowercase letter.");
      return;
    }
    if (!hasDigit) {
      toast.error("Password must include at least one digit.");
      return;
    }
    if (!hasMinLength) {
      toast.error("Must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        toast.success(`Welcome back, ${result?.user?.displayName}!`, {
          duration: 3000,
          className: "text-center",
        });
        setLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        toast.error("Invalid username or password", error?.message);
        setLoading(false);
      });
  };

  // SignIn With Google

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);

    googleSignIn()
      .then((result) => {
        toast.success(
          `Welcome, ${result?.user?.displayName}! You're logged in.`,
          {
            duration: 3000,
            className: "text-center",
          }
        );
        setGoogleLoading(false);
        navigate(state || "/");
      })
      .catch((error) => {
        setGoogleLoading(false);
        toast.error("Something went wrong", error?.message);
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <section className="py-12">
      <title>Login Page</title>
      <div className="grid grid-cols-2">
        <div className="flex flex-col w-full rounded-l-xl items-center justify-center bg-blue-700">
          <h2 className="text-center text-4xl font-bold text-white drop-shadow mb-8">
            {state ? "You have to Login first!" : "Welcome Back!"}
          </h2>
          <img
            src="https://i.ibb.co/WpNg6ywr/Humaaans-3-Characters.png"
            alt="3 characters having conversation"
          />
        </div>

        <div className="w-full p-10 border-l-0 rounded-r-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
          <div className="w-10/12 mx-auto">
            {/* Google Sign In */}

            <button
              onClick={handleGoogleSignIn}
              className="btn rounded-2xl w-full font-semibold bg-sky-600 hover:bg-blue-500 text-white border-none transition backdrop-blur-xl"
            >
              {googleLoading ? (
                <span className="loading loading-spinner text-white"></span>
              ) : (
                <>
                  <FcGoogle size={24} className="bg-white rounded-full p-0.5" />
                  Continue with Google
                </>
              )}
            </button>

            {/* Login Form */}

            <form onSubmit={handleLogIn} className="flex flex-col gap-3">
              <div className="flex items-center py-3">
                <p className="border-b-2 w-[20%] border-gray-500"></p>
                <p className="text-center w-[60%] text-gray-500 ">
                  Or Continue with Email / Password
                </p>
                <p className="border-b-2 w-[20%] border-gray-500"></p>
              </div>

              {/* Email Field*/}

              <label className="flex items-center gap-2 text-blue-600/70 ">
                <HiOutlineMail size={24} />
                Email
              </label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                placeholder="Email address"
              />
              <label className="flex items-center gap-2 text-blue-600/80 ">
                <MdLockOutline size={24} /> Password
              </label>

              {/* Password Field */}

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  className="px-4 py-3 w-full rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                  placeholder="Password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                  className="absolute top-3 right-5 cursor-pointer text-sky-700  text-2xl"
                >
                  {showPass ? <LuEye></LuEye> : <LuEyeClosed></LuEyeClosed>}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  to="/auth/reset-password"
                  className="text-sm text-blue-600/80 cursor-pointer hover:underline"
                >
                  Forgotten password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full btn py-3 rounded-2xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition backdrop-blur-xl"
              >
                {loading ? (
                  <span className="loading loading-spinner text-white"></span>
                ) : (
                  "Sign In"
                )}
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
