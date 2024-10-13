import React from "react";

const Card = ({ userInfo, profileImage }) => {
  return (
    <div className="card-hover flex flex-col sm:flex-row p-4 bg-white shadow-md rounded-lg max-w-full sm:max-w-md justify-center items-center">
      <img
        src={profileImage || userInfo.imageUrl}
        alt="Profile"
        className="w-32 h-32 rounded-full"
      />

      <div className="flex flex-col justify-center ml-4 text-center sm:text-left">
        <h2 className="break-words">{userInfo.name}</h2>
        <p className="break-words">{userInfo.position}</p>
        <p className="break-words">{userInfo.email}</p>
        <p>{userInfo.phone}</p>

        <div className="flex space-x-4 mt-4">
          {userInfo.linkedin && (
            <a href={userInfo.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          )}
          {userInfo.github && (
            <a href={userInfo.github} className="text-gray-800" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
