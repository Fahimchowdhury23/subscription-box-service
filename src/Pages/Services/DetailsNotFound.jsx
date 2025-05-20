import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router";

const DetailsNotFound = () => {
  const { pathname } = useLocation();

  const errorUrlNo = pathname.split("/")[2];

  useEffect(() => {
    toast.dismiss();
    toast.error("Details not found!", {
      duration: 2000,
      className: "font-medium text-xl",
    });
  }, []);

  return (
    <div className="p-8 my-16 bg-white/40 mx-auto w-[40%] text-center rounded-2xl flex flex-col gap-8">
      <title>Details Not Found</title>
      <h1 className="text-3xl text-slate-700 font-semibold">
        This product /{errorUrlNo} doesn't exist
      </h1>

      <div className="flex justify-center items-center">
        <img
          className="w-60 h-60 rounded-2xl"
          src="https://i.ibb.co/wNqNr6nL/no-results-found-675567-6604.jpg"
          alt="No product found"
        />
      </div>

      <Link to="/">
        <button className="p-4 border-none btn cursor-pointer font-medium text-lg text-white rounded-xl bg-sky-500">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default DetailsNotFound;
