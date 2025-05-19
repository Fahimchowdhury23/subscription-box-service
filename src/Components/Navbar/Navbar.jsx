import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  // Smooth Scrolling by ID

  const handleScroll = (sectionName) => {
    const section = document.getElementById(sectionName);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
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
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn flex items-center gap-1 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#F20073] shadow-lg p-5 border-none text-white text-lg font-bold"
            >
              <LuLogOut /> Sign Out
            </button>
          ) : (
            <Link to="/auth/login">
              <button className="btn flex items-center gap-1 p-5 rounded-full bg-gradient-to-br from-[#34D27A] to-[#0CA66E] shadow-lg border-none text-white text-lg font-bold">
                <MdOutlineLogin /> LogIn
              </button>
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
