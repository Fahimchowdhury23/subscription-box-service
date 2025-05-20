import React, { use } from "react";
import Service from "./Service";

const subscriptionPromise = fetch("/subscriptionData.json").then((res) =>
  res.json()
);

const Services = () => {
  const subscriptionData = use(subscriptionPromise);

  return (
    <section id="services" className="text-center space-y-6 pt-8 lg:pt-20">
      <div className="px-8 lg:px-40">
        <h1 className="text-3xl mb-6 font-bold lg:font-extrabold">
          Need It? Want It? It's Already in Your Next Box.
        </h1>
        <p className="text-xl">
          From trail-ready survival kits and hand-selected
          <span className="font-bold"> used books </span> to gamer accessories,
          <span className="font-bold"> rare coffee beans</span>, global snacks,
          <span className="font-bold"> fresh fruits</span>, premium pet food,
          collectible toys, and
          <span className="font-bold"> artisan fragrances</span> — explore
          curated boxes that deliver new surprises to your doorstep every month
          (or year). Discover something you'll love in every shipment!
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subscriptionData.map((subscription) => (
          <Service key={subscription.id} subscription={subscription}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
