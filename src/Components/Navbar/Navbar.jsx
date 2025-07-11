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
          className: "text-center",
        });
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error("Something went wrong", error?.message);
      });
  };

  return (
    <section className="w-11/12 mx-auto p-3 lg:p-5 border-3 border-t-0 rounded-2xl rounded-t-none border-white/60">
      <nav className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 lg:w-10 lg:h-10"
            src="https://i.ibb.co/Q7Dwz2bb/logo-removebg-preview.png"
            alt=""
          />
          <Link to="/">
            <h1 className="text-xl lg:text-3xl text-[#2077b6] tracking-wide font-bold cursor-pointer">
              InterestInBox
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex gap-4">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/aboutUs">
              About Us
            </NavLink>

            <NavLink className="nav-link" to="/my-profile">
              My Profile
            </NavLink>
          </div>
        </div>

        <div>
          {user ? (
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="flex items-center mr-1 lg:mr-3 font-semibold text-xl">
                {user?.displayName}
              </div>

              <div>
                <Link to="/my-profile">
                  <div className="tooltip tooltip-bottom tooltip-info">
                    <div className="tooltip-content">
                      <div className="font-medium text-slate-700">
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
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
                </Link>
              </div>

              <button
                onClick={handleSignOut}
                className="btn flex items-center gap-1 rounded-full bg-gradient-to-br from-[#FF6A00] to-[#F20073] shadow-lg p-3 lg:p-5 border-none text-white lg:text-lg font-bold"
              >
                <LuLogOut /> Sign Out
              </button>
            </div>
          ) : (
            <Link to="/auth/login">
              <button className="btn flex items-center gap-1 p-3 lg:p-5 rounded-full bg-gradient-to-br from-[#34D27A] to-[#0CA66E] shadow-lg border-none text-white lg:text-lg font-bold">
                <MdOutlineLogin /> Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
