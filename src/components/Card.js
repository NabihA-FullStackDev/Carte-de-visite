import React from "react";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";

const Card = () => {
  return (
    <div className="card-hover flex flex-col sm:flex-row p-4 bg-white shadow-md rounded-lg max-w-fit sm:max-w-sm justify-center items-center">
      <Profile />
      <div className="flex flex-col justify-center ml-4 text-center sm:text-left">
        <ContactDetails />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Card;
