import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import AuthContext from "../../Contexts/AuthContext";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineLogin } from "react-icons/md";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You've logged out successfully!", {
          duration: 3000,
          className: "text-center",
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error("Something went wrong", error?.message);
      });
  };

  return (
    <section className="w-11/12 mx-auto p-5 border-4 border-t-0 rounded-2xl rounded-t-none border-white/60 ">
      <nav className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Q7Dwz2bb/logo-removebg-preview.png"
            alt=""
          />
          <Link to="/">
            <h1 className="text-3xl text-[#2077b6] tracking-wide font-bold cursor-pointer">
              InterestInBox
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-4">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/my-profile">
              My Profile
            </NavLink>
          </div>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="tooltip tooltip-bottom tooltip-info">
                <div className="tooltip-content">
                  <div className="font-medium text-slate-700 text-lg">
                    {user?.displayName}
                  </div>
                </div>
                <div className="avatar avatar-online">
                  <div className="w-12 rounded-full">
                    <img
                      className="cursor-pointer"
                      src={user?.photoURL}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="btn flex items-center gap-1 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#F20073] shadow-lg p-5 border-none text-white text-lg font-bold"
              >
                <LuLogOut /> Sign Out
              </button>
            </div>
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
