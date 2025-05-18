import React, { Suspense } from "react";
import Services from "../Services/Services";
import Success from "../Success/Success";
import Loader from "../../Components/Loader/Loader";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <section className="pt-3">
      <h1 className="italic text-5xl pb-3 font-extrabold text-center tracking-wide select-none animate-pulse transition duration-500 ease-in-out">
        Your interests, delivered.
      </h1>
      <Slider></Slider>
      <div className="w-11/12 mx-auto">
        <Suspense fallback={<Loader></Loader>}>
          <Services></Services>
        </Suspense>
        <Success></Success>
      </div>
    </section>
  );
};

export default Home;
