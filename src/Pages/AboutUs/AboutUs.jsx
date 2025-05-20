import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="my-12 w-10/12 mx-auto">
      <title>About Us</title>
      <div className="p-5">
        <div className="flex justify-center">
          <img
            className="rounded-2xl max-w-xl lg:max-w-3xl"
            src="https://i.ibb.co/8nq539d4/about-us.png"
            alt="About Us"
          />
        </div>
        <p className="font-medium pt-6 text-xl text-center px-6 lg:px-24 text-slate-700/80">
          Welcome to <span className="font-bold text-lg">InterestInBox</span>,
          where passion meets purpose. We are a dedicated team of enthusiasts
          committed to bringing you carefully curated subscription boxes that
          inspire discovery, delight, and convenience. Our journey began with a
          simple idea — to connect people with unique, high-quality products
          that match their interests and lifestyles, delivered right to their
          doorstep. From outdoor adventure gear to rare coffees,
          <span className="font-bold text-lg"> books</span>, gaming essentials,
          and more, each box is thoughtfully designed to surprise and satisfy.
          Over the years, we've grown from a small startup fueled by curiosity
          and customer love into a trusted community that values authenticity,
          quality, and innovation. We believe that every subscription is more
          than just a delivery — it's an experience, a story, and a{" "}
          <span className="font-bold text-lg">moment of joy</span>. Thank you
          for being part of our journey. Whether you're discovering a new hobby,
          treating yourself, or gifting a loved one, we're here to make every
          unboxing special. Join us as we continue to explore, create, and share
          the best in subscription experiences.
        </p>
        <div className="text-center pt-5">
          <Link to="/">
            <button className="p-5 border-none btn cursor-pointer font-medium text-lg text-white rounded-xl bg-sky-500">
              See Our Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
