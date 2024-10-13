import React from 'react';

const ContactDetails = ({userInfo}) => {
  return (
    <div className="text-center sm:text-left">
      <h2 className="text-lg font-bold">{userInfo.name}</h2>
      <p className="text-gray-500">{userInfo.position}</p>
      <p className="text-gray-500">{userInfo.email}</p>
      <p className="text-gray-500">{userInfo.phone}</p>
    </div>
  );
};

export default ContactDetails;
