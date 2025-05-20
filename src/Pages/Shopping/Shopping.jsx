import React from "react";

const Shopping = () => {
  return (
    <div className="pt-24">
      <h1 className="text-center text-4xl pb-10 font-extrabold">
        Trusted by Thousands of Happy Customers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 w-11/12 mx-auto items-center">
        <div className="text-center lg:text-left">
          <p className="text-2xl font-bold mb-5">Your Smile is our Strength</p>
          <div>
            <div>
              <h3 className="text-xl font-semibold">Community & Loyalty</h3>
              <ul className="text-lg font-medium space-y-2">
                <li>• 65 % of customers renew year after year</li>
                <li>• Referral program rewards loyal advocates</li>
                <li>• Quarterly user meet-ups and webinars</li>
              </ul>
            </div>

            <div className="border-b-2 border-sky-400 w-11/12 lg:w-6/9 my-3"></div>

            <h3 className="text-xl font-semibold mt-4">Global Footprint</h3>
            <ul className="text-lg font-medium space-y-2">
              <li>• Trusted in 42 countries and counting</li>
              <li>• Localized interfaces in 12 languages</li>
              <li>• Interactive map showing customer clusters worldwide</li>
            </ul>

            <div className="border-b-2 border-sky-400 w-11/12 lg:w-6/9 my-3"></div>

            <h3 className="text-xl font-semibold mt-4">Sustainable Impact</h3>
            <ul className="text-lg font-medium space-y-2">
              <li>• Carbon-neutral operations since 2023</li>
              <li>• 1% of revenue pledged to environmental nonprofits</li>
              <li>• Annual user conference—next stop: Singapore, Oct 2025</li>
            </ul>
          </div>
        </div>
        <img
          className="rounded-2xl w-full max-w-xl lg:max-w-lg mx-auto"
          src="https://i.ibb.co/hJksYVvS/shopping.jpg"
          alt="shopping"
        />
      </div>
    </div>
  );
};

export default Shopping;
