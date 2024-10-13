import React from "react";

const Form = ({ userInfo, handleChange, handleImageChange }) => {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <label>Nom:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={userInfo.position}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Téléphone:</label>
        <input
          type="tel"
          name="phone"
          value={userInfo.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>LinkedIn:</label>
        <input
          type="url"
          name="linkedin"
          value={userInfo.linkedin}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>GitHub:</label>
        <input
          type="url"
          name="github"
          value={userInfo.github}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label>Image de profil:</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="border p-2 rounded w-full"
        />
      </div>
    </form>
  );
};

export default Form;
