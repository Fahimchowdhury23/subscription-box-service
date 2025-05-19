import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  return (
    <section
      className={`space-y-6 p-20 flex flex-col bg-gradient-to-r from-[#fffeff] via-[#94eae8]  to-white items-center`}
    >
      <div>
        <Link to="/">
          <h1 className="text-3xl text-[#2077b6] tracking-wide font-bold cursor-pointer">
            InterestInBox
          </h1>
        </Link>
      </div>

      <div className="flex gap-4">
        <NavLink className="footer-link" to="/">
          Home
        </NavLink>

        <NavLink className="footer-link" to="/my-profile">
          My Profile
        </NavLink>
      </div>

      <div className="border-b-2 w-3/4 border-sky-500"></div>

      {/* Social Icons */}

      <div className="flex gap-6">
        <a
          href="https://github.com/Fahimchowdhury23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="cursor-pointer hover:text-[rgb(80,80,80)]"
            size={36}
          />
        </a>
        <a
          href="https://discord.com/users/879041544181649500"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord
            className="cursor-pointer hover:text-[rgb(88,101,242)]"
            size={36}
          />
        </a>
        <a
          href="https://www.facebook.com/fahimchowdhury23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook
            className="cursor-pointer hover:text-blue-600"
            size={36}
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer hover:text-red-600" size={36} />
        </a>
      </div>
      <div className="mt-3 text-[#2077b6] text-lg space-x-3">
        <a className="link link-hover">Terms & Conditions</a>
        <span>|</span>
        <a className="link link-hover">Privacy Policy</a>
        <span>|</span>
        <a className="link link-hover">Cookie Policy</a>
      </div>
    </section>
  );
};

export default Footer;
