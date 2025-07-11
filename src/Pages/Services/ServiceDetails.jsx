import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoArrowUndo } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const [details, setDetails] = useState({});
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviewsList, setReviewsList] = useState([]);

  const { id } = useParams();

  const serviceData = useLoaderData();

  useEffect(() => {
    const clicked = serviceData.find((service) => service.id === id);
    setDetails(clicked);
  }, [serviceData, id]);

  const {
    thumbnail,
    banner,
    name,
    tech_category,
    price,
    frequency,
    description,
    subscription_benefits,
    ratings,
    number_of_reviews,
    features,
    premium,
  } = details;

  const handleSubmit = (e) => {
    e.preventDefault();

    const ratingNum = Number(rating);
    if (review.trim() === "") {
      toast.error("Please enter a review.");
      return;
    }

    if (!rating) {
      toast.error("You haven't rated yet.");
      return;
    }
    setReviewsList([
      ...reviewsList,
      { id: Date.now(), text: review.trim(), rating: ratingNum },
    ]);
    setReview("");
    setRating("");

    if (rating <= 3) {
      toast.success("We appreciate your feedback and will strive to improve.");
    } else {
      toast.success("Thanks for your support!");
    }
  };

  const dynamicTitle = `${name} | Home`;

  return (
    <section className="mt-16 mb-6 space-y-5">
      <title>{dynamicTitle}</title>
      <img
        className="rounded-2xl mt-10 mx-auto w-4/5 object-cover"
        src={banner}
        alt={name}
      />
      <div className="flex gap-4 justify-center items-center">
        <h1 className="text-3xl font-extrabold">{name}</h1>
        {premium && (
          <span className="badge badge-xl font-bold badge-primary rounded-full">
            Most Popular
          </span>
        )}
        <p className="rounded-full cursor-pointer text-xl badge-xl badge badge-soft badge-info">
          {tech_category}
        </p>
      </div>

      <p className="text-2xl text-primary text-center font-bold">
        From ${price} / {frequency}
      </p>

      <div className="text-center">
        <Link to={`/add-to-cart/${id}`}>
          <button className="mt-4 text-xl font-semibold bg-sky-500 text-white px-10 py-6 btn border-none  rounded-xl cursor-pointer">
            <FiShoppingCart size={24} className="mr-1 flex items-center" /> Add
            to Cart
          </button>
        </Link>
      </div>

      <p className="text-xl px-10 lg:px-24 text-center mb-8">{description}</p>

      <div className="flex gap-10 lg:gap-0 flex-col-reverse lg:flex-row justify-between items-center pt-8 px-16 lg:px-40">
        <div className="flex gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col space-y-5">
              <p className="text-2xl font-medium underline"> Features :</p>
              {features?.map((f, index) => (
                <p className="flex items-center gap-2" key={index}>
                  <FaCheck color="blue" /> {f}
                </p>
              ))}
            </div>
            <div className="border border-r-2 text-gray-500"></div>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-2xl font-medium underline">
              Subscription Benefits :
            </p>
            {subscription_benefits?.map((sub, index) => (
              <p className="flex items-center gap-2" key={index}>
                <FaCheck color="blue" /> {sub}
              </p>
            ))}
          </div>
        </div>

        <div>
          <img
            className="rounded-2xl w-96 bg-white p-2"
            src={thumbnail}
            alt={name}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <p className="text-4xl font-bold">{ratings}</p>
            {[...Array(5)].map((_, i) => {
              const diff = Math.round(ratings * 2) / 2 - i;
              return diff >= 1 ? (
                <FaStar key={i} size={24} className="text-yellow-400" />
              ) : diff === 0.5 ? (
                <FaStarHalfAlt key={i} size={24} className="text-yellow-400" />
              ) : (
                <FaRegStar key={i} size={24} className="text-yellow-400" />
              );
            })}
          </div>
          <p className="text-xl font-medium">
            Based on {number_of_reviews} reviews
          </p>
        </div>

        {/* Review Section */}

        <div className="w-6/9 lg:w-10/12 mx-auto mt-6 px-6 py-4 rounded-2xl border-1 border-sky-500">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Write a Review
          </h2>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Write your review"
              className="w-full border text-sky-600 border-gray-300 rounded-xl p-2 mb-3 [resize:none]"
              rows={6}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <input
              type="number"
              min="0"
              max="5"
              placeholder="Rating (1-5)"
              className="w-full border text-sky-600 border-gray-300 rounded-xl p-2 mb-3 
              [&::-webkit-inner-spin-button]:hidden
              [&::-webkit-outer-spin-button]:hidden
              [appearance:textfield]"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <button
              type="submit"
              className="w-full cursor-pointer text-xl btn bg-white text-blue-600 py-2 rounded-2xl hover:bg-blue-700 hover:text-white border-none transition"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Show Review */}

        <div className="mt-6 text-center">
          <h3 className="text-lg font-bold mb-2 underline">
            Customer Reviews :
          </h3>
          {reviewsList.length === 0 && (
            <p className="font-medium text-2xl">No reviews yet.</p>
          )}
          <ul className="grid-cols-2 grid gap-4">
            {reviewsList.map(({ id, text, rating }) => (
              <li key={id} className="font-medium">
                <div className="bg-white rounded-xl">
                  <p className="text-lg break-words line-clamp-4">{text}</p>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-sm text-yellow-600">
                      Rating: {rating} / 5
                    </p>
                    {[...Array(5)].map((_, i) => {
                      const diff = Math.round(rating) - i;
                      return diff >= 1 ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaRegStar key={i} className="text-yellow-400" />
                      );
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/">
        <button className="btn btn-secondary ml-3 mt-6 text-white border-none">
          <IoArrowUndo />
          Explore More
        </button>
      </Link>
    </section>
  );
};

export default ServiceDetails;
