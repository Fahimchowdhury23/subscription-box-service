import React, { Suspense } from "react";
import Services from "../Services/Services";
import Success from "../Success/Success";
import Loader from "../../Components/Loader/Loader";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <section className="pt-20">
      <Slider></Slider>
      <Suspense fallback={<Loader></Loader>}>
        <Services></Services>
      </Suspense>
      <Success></Success>
    </section>
  );
};

export default Home;
