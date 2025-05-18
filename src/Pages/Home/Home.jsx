import React, { Suspense } from "react";
import Services from "../Services/Services";
import Success from "../Success/Success";
import Loader from "../../Components/Loader/Loader";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <section className="pt-20">
      <h1 className="italic text-4xl font-extrabold text-center md:text-6xl tracking-wide select-none animate-pulse transition duration-400 ease-out">
        Your interests, delivered.
      </h1>
      <Slider></Slider>
      <Suspense fallback={<Loader></Loader>}>
        <Services></Services>
      </Suspense>
      <Success></Success>
    </section>
  );
};

export default Home;
