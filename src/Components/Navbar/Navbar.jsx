import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  // Smooth Scrolling by ID

  const handleScroll = (sectionName) => {
    const section = document.getElementById(sectionName);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-11/12 mx-auto p-5 border-4 border-t-0 rounded-2xl rounded-t-none border-white/60 ">
      <nav className="flex justify-between">
        <Link to="/">
          <h1 className="text-3xl text-[#2077b6] tracking-wide font-bold cursor-pointer">
            InterestInBox
          </h1>
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <a
              onClick={() => {
                handleScroll("services");
              }}
              className="nav-link cursor-pointer"
            >
              Our Services
            </a>

            <a
              onClick={() => {
                handleScroll("success");
              }}
              className="nav-link cursor-pointer"
            >
              Success
            </a>

            {/* <a className="nav-link cursor-pointer">
              Extra 2
            </a> */}

            <NavLink className="nav-link" to="/my-profile">
              My Profile
            </NavLink>
          </div>
        </div>
        <div>
          <Link to="/auth/login">
            <button className="btn btn-primary p-5 border-none text-white text-lg font-bold">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
