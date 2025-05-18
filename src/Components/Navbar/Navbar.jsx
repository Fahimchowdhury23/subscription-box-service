import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <section className="w-11/12 mx-auto p-5">
      <nav className="flex justify-between">
        <Link to="/">
          <h1 className="text-3xl text-[#2077b6] tracking-wide font-bold cursor-pointer">
            WebsiteName
          </h1>
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/services">
              Our Services
            </NavLink>
            <NavLink className="nav-link" to="/success">
              Success
            </NavLink>
            {/* <NavLink className="nav-link" to="/">
              Extra 2
            </NavLink> */}
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
