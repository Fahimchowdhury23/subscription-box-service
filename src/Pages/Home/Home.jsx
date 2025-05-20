import React, { Suspense } from "react";
import Services from "../Services/Services";
import Success from "../Success/Success";
import Loader from "../../Components/Loader/Loader";
import Slider from "../Slider/Slider";
import Shopping from "../Shopping/Shopping";

const Home = () => {
  return (
    <section className="pt-6 lg:pt-8">
      <h1 className="italic text-4xl lg:text-5xl pb-7 font-extrabold text-center tracking-wide animate-pulse transition duration-500 ease-in-out ">
        Your interests, delivered.
      </h1>
      <Slider></Slider>
      <div className="w-11/12 mx-auto">
        <Suspense fallback={<Loader></Loader>}>
          <Services></Services>
        </Suspense>
        <Shopping></Shopping>
        <Success></Success>
      </div>
    </section>
  );
};

export default Home;
