import React from "react";
import CountUp from "react-countup";
import { BiHappyBeaming } from "react-icons/bi";

const Success = () => {
  return (
    <section id="success" className="pt-20 pb-16 text-center w-10/12 mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-sky-700 text-4xl">
          Your Neighborhood's Finest Service
        </h2>
        <p className="opacity-80 text-lg text-slate-800 pb-8">
          Your gateway to personalized subscription boxes filled with surprises
          — tailored, trusted, and delivered with convenience and care.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 text-left gap-6">
          <div className="p-5 bg-sky-200 flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co/wFdYZbqn/categories.png"
              alt="Reviews"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={256} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Total Categories
            </p>
          </div>

          <div className="p-5 bg-sky-200 flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co/0jSpDnGB/Customer-Reviews-3-D-Icon-transparent-emp-800.webp"
              alt="Reviews"
            />
            <p className="font-extrabold text-5xl">
              <CountUp enableScrollSpy end={560} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Total Reviews
            </p>
          </div>

          <div className="p-5 bg-sky-200 flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co/LzsvD2D9/shop.png"
              alt="Shops"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={130} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Shops in Town
            </p>
          </div>

          <div className="p-5 bg-sky-200 flex flex-col gap-4 rounded-2xl">
            <img
              className="w-16 h-16"
              src="https://i.ibb.co/7xgv7jHF/happy.png"
              alt="Happy Customer"
            />
            <p className="font-bold text-5xl">
              <CountUp enableScrollSpy end={300} duration={4}></CountUp>+
            </p>
            <p className="font-semibold text-2xl text-[rgba(26,24,24,0.76)]">
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
