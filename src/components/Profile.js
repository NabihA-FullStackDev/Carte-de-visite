import React from 'react';

const Profile = ({ imageUrl }) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={imageUrl}
        alt="Profile"
        className="rounded-full w-32 h-32"
      />
    </div>
  );
};

export default Profile;
