import React from "react";
import { Link } from "react-router";

const Service = ({ subscription }) => {
  const {
    id,
    thumbnail,
    name,
    tech_category,
    price,
    frequency,
    features,
    premium,
  } = subscription;

  return (
    <section className="bg-white p-3 hover:scale-105 cursor-pointer transition duration-400 ease-out rounded-2xl flex flex-col">
      <div className="bg-[#f5deb3] text-left rounded-xl flex-1">
        <img
          className="rounded-xl rounded-bl-none rounded-br-none object-cover w-full"
          src={thumbnail}
          alt={name}
        />

        <h3 className="text-2xl mt-3 pl-3 font-extrabold">{name}</h3>
        <div className="flex mt-4 pl-3 gap-2">
          {premium && (
            <span className="badge badge-xl font-bold badge-primary rounded-full">
              Most Popular
            </span>
          )}
          <p className="rounded-full badge-xl flex items-center justify-center badge badge-soft badge-success w-3/12">
            {tech_category}
          </p>
        </div>

        <p className="text-lg mt-2 pl-3 font-bold">
          From ${price} / {frequency}
        </p>
        <ul className="my-3 flex pl-3 flex-col gap-1 text-lg">
          {features.map((feature, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`details/${id}`}>
        <button className="w-full mt-4 text-xl font-semibold border-1 text-sky-500 border-solid border-sky-500 p-5 btn btn-outline hover:bg-sky-500 hover:text-white rounded-full cursor-pointer">
          View More
        </button>
      </Link>
    </section>
  );
};

export default Service;
