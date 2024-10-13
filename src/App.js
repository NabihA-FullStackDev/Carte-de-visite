import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import PDFGenerator from "./components/PDFGenerator";
import { getBase64Image } from "./utils/getBase64Image";
import { FaEdit } from "react-icons/fa";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Prénom Nom",
    position: "Société",
    email: "contact@societe.com",
    phone: "+33 1 23 45 67 89",
    imageUrl: "logo512.png",
    linkedin: "",
    github: "",
  });

  const [profileImage, setProfileImage] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (userInfo.imageUrl) {
      getBase64Image(userInfo.imageUrl, (base64Image) => {
        setProfileImage(base64Image);
      });
    }
  }, [userInfo.imageUrl]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo({ ...userInfo, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="App">
      <div className="flex justify-center place-items-center space-x-4">
        <Card userInfo={userInfo} profileImage={profileImage} />
      </div>
      {isFormVisible && (
          <Form
            userInfo={userInfo}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
          />
        )}
      <div className="flex flex-row justify-center place-items-center space-x-4 w-full text-center">
        <PDFGenerator userInfo={userInfo} profileImage={profileImage} />
        <div className="icon-container" onClick={toggleFormVisibility}>
          <FaEdit size={24} className="cursor-pointer" />{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
