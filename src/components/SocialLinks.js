import React from 'react';

const SocialLinks = () => {
  return (
    <div className="flex mt-2 justify-center sm:justify-start">
      <a href="https://www.linkedin.com" className="mx-2 text-blue-500" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin text-2xl"></i>
      </a>
      <a href="https://github.com" className="mx-2 text-gray-800" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github text-2xl"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
