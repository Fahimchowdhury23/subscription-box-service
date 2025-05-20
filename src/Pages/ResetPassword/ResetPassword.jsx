import React, { use, useRef, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { Link } from "react-router";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import ResetContext from "../../Contexts/ResetContext";

const ResetPassword = () => {
  const { passwordReset } = use(AuthContext);
  const { resetEmail } = use(ResetContext);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = emailRef.current.value;
    try {
      await passwordReset(email);
      setLoading(false);
      toast.success("Password-reset email sent!");
      window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
    } catch (error) {
      toast.error("Something is wrong!", error?.message);
    }
  };

  return (
    <section className="py-12">
      <title>Reset Password</title>
      <div className="w-full max-w-lg lg:max-w-2xl mx-auto p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
        <h2 className="text-center text-4xl font-bold text-slate-700 drop-shadow mb-5">
          Reset Your Password
        </h2>
        <p className="text-center font-semibold text-gray-600 drop-shadow mb-4">
          You'll receive instructions for resetting your password
        </p>
        <form onSubmit={handleForgetPassword} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            ref={emailRef}
            defaultValue={resetEmail}
            required
            className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
            placeholder="Your Email address"
          />

          <button
            type="submit"
            className="w-full btn mt-2 flex items-center rounded-xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition backdrop-blur-xl"
          >
            {loading ? (
              <span className="loading loading-spinner text-white"></span>
            ) : (
              <>
                <MdEmail size={20} /> Send Email
              </>
            )}
          </button>
        </form>

        <Link
          to="/auth/login"
          className="font-semibold mt-6 flex justify-center hover:underline text-blue-600"
        >
          Return to LogIn
        </Link>
      </div>
    </section>
  );
};

export default ResetPassword;
