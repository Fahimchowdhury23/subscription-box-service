import React, { use, useState } from "react";
import AuthContext from "../../Contexts/AuthContext";
import { RiEditCircleFill } from "react-icons/ri";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUser } = use(AuthContext);
  const { displayName, email, photoURL, metadata } = user;
  const [loading, setLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const convertedSeconds = parseInt(metadata?.lastLoginAt);

  const date = new Date(convertedSeconds);

  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = date.toLocaleString("en-US", { month: "long" });
  const time = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Dhaka",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    const profile = {
      displayName,
      photoURL,
    };

    setLoading(true);

    updateUser(profile)
      .then(() => {
        toast.success(`Done! ${displayName}, your profile is up to date.`, {
          duration: 3000,
          className: "text-center",
        });
        setLoading(false);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        toast.error("Current User is not updating", error?.message);
      });
  };

  const dynamicName = `${displayName} | InterestInBox`;

  return (
    <section className="w-11/12 mx-auto">
      <title>{dynamicName}</title>
      <div className="my-10 flex flex-col items-center mx-auto w-[50%] h-[70vh] bg-sky-200/50 backdrop-blur-xl border border-white/30 shadow-xl rounded-3xl">
        <h1 className="text-3xl font-bold pt-12">Profile Details</h1>

        <div className="mt-10 flex items-center gap-10">
          <div>
            <img
              className="rounded-full w-60 h-60 object-cover"
              src={photoURL}
              alt={displayName}
            />
          </div>

          <div>
            <div className="flex gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-1">{displayName}</h3>
                <p className="text-gray-500">Geneva, Switzerland</p>
              </div>

              <div>
                <button
                  onClick={() => {
                    setShowEdit(true);
                    window.scrollTo({
                      top: 700,
                      behavior: "smooth",
                    });
                  }}
                  className="btn ml-4 flex mb-2 justify-center border-none items-center btn-primary text-white px-5"
                >
                  <RiEditCircleFill className="text-blue-800" size={18} />
                  Edit
                </button>
                <div className="text-slate-700 text-center">
                  <p>Click here to edit</p>
                  <p>your name</p>
                </div>
              </div>
            </div>

            <div className="pt-4 text-lg">
              <div className="border-t-2 text-sky-500 pb-6"></div>
              <ul className="space-y-2 text-gray-600/70">
                <li>
                  Email:
                  <span className="ml-3 font-medium text-slate-700">
                    {email}
                  </span>
                </li>
                <li>
                  City: <span className="ml-3 text-slate-700">Geneva</span>
                </li>
                <li>
                  Last LogIn At :
                  <span className="ml-3 font-medium text-slate-700">{`${day} ${monthName} ${year} , ${time}`}</span>
                </li>
                <li>
                  Country :
                  <span className="ml-3 text-slate-700">Switzerland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Update Profile Form */}

      {showEdit ? (
        <>
          <div className="py-12">
            <div className="w-full max-w-2xl mx-auto p-10 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-xl">
              <h2 className="flex items-center justify-center gap-3 text-4xl font-bold text-slate-700 drop-shadow mb-5">
                <FaCircleUser /> Update your Profile
              </h2>

              <form
                onSubmit={handleUpdateProfile}
                className="flex flex-col gap-3"
              >
                <label className="font-semibold text-gray-600 drop-shadow">
                  New Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                  placeholder="Enter Your New Name"
                />

                <label className="font-semibold text-gray-600 drop-shadow">
                  Photo URL
                </label>

                <input
                  type="text"
                  name="photo"
                  required
                  className="px-4 py-3 rounded-xl bg-white/60 text-sky-700 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/70"
                  placeholder="Your New Photo URL"
                />

                <button
                  type="submit"
                  className="w-full btn mt-2 flex items-center rounded-xl border-none bg-sky-600/80 hover:bg-sky-600 text-white font-medium transition backdrop-blur-xl"
                >
                  {loading ? (
                    <span className="loading loading-spinner text-white"></span>
                  ) : (
                    <>Update Profile</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Profile;
