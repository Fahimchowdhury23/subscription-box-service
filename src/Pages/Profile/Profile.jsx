import React, { use } from "react";
import AuthContext from "../../Contexts/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;

  // name, email, and photoURL
  return (
    <div className="w-11/12 mx-auto">
      <h1>Profile Details</h1>
      <p>{displayName}</p>
      <p>{email}</p>
      <img src={photoURL} alt="" />
    </div>
  );
};

export default Profile;
