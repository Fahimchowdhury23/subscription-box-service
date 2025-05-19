import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.dismiss();
    toast.error("Are you lost❓ you shouldn't be here.", {
      duration: 2000,
      className: "font-medium text-lg",
    });
  }, []);

  return (
    <div className="bg-gradient-to-b min-h-screen from-[#87ceeb] to-white">
      <div className="flex flex-col pt-20 my-auto justify-center items-center">
        <img
          className="rounded-2xl h-130"
          src="https://i.ibb.co/r2zjmYpc/error.jpg"
          alt="404 Error!"
        />
        <div className="flex mt-6 gap-5">
          <button
            className="cursor-pointer px-3 py-2 font-medium text-lg rounded-xl bg-sky-500"
            onClick={() => {
              navigate("/");
              toast.success(
                "Welcome back again, don't roam around carelessly. 🏡"
              );
            }}
          >
            Go back Home
          </button>
          <button
            className="cursor-pointer px-3 py-2 font-medium text-lg rounded-xl bg-green-500"
            onClick={() => {
              toast.success("Let's pick up right where you left off! ⏳", {
                duration: 3000,
              });
              setTimeout(() => navigate(-1), 2000);
            }}
          >
            Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
