import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";
import { jsPDF } from "jspdf";

const Card = () => {
  const [userInfo] = useState({
    name: "Prénom Nom",
    position: "Société",
    email: "contact@societe.com",
    phone: "+33 1 23 45 67 89",
    imageUrl: "logo512.png",
  });

  const [profileImage, setProfileImage] = useState("");

  useEffect(() => {
    getBase64Image(userInfo.imageUrl, (base64Image) => {
      setProfileImage(base64Image);
    });
  }, [userInfo.imageUrl]);

  // Fonction pour générer le PDF avec effet d'ombre et surélévation avec coins arrondis
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Dimensions de la carte
    const cardWidth = 120;
    const cardHeight = 80;
    const borderRadius = 10;

    // Obtenir les dimensions de la page
    const pageWidth = doc.internal.pageSize.getWidth();

    // Calcule la position horizontale pour centrer la carte
    const startX = (pageWidth - cardWidth) / 2;
    const startY = 30;

    // ---- Effet d'ombre et surélévation avec coins arrondis ----
    const shadowOffset = 0.5;

    // Ombre externe plus légère (rectangle légèrement plus grand que la carte)
    doc.setDrawColor(150);
    doc.setLineWidth(1);
    doc.roundedRect(startX + shadowOffset, startY + shadowOffset, cardWidth, cardHeight, borderRadius, borderRadius);

    // ---- Carte de visite ----
    doc.setDrawColor(255);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(startX, startY, cardWidth, cardHeight, borderRadius, borderRadius, 'F');

    // Ajoute l'image (si elle est disponible)
    if (profileImage) {
      doc.addImage(profileImage, "PNG", startX + 10, startY + 15, 30, 30);
    }

    // Ajoute le nom et la société (centré verticalement et à droite de l'image)
    const textOffsetX = startX + 50;
    const textStartY = startY + 20;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(userInfo.name, textOffsetX, textStartY);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(userInfo.position, textOffsetX, textStartY + 10);
    doc.text(userInfo.email, textOffsetX, textStartY + 20);
    doc.text(userInfo.phone, textOffsetX, textStartY + 30);

    // Ajoute les liens sociaux en dessous
    const linkYPosition = textStartY + 45;
    doc.setTextColor(0, 0, 255);
    doc.textWithLink("LinkedIn", textOffsetX, linkYPosition, {
      url: "https://linkedin.com",
    });
    doc.setTextColor(0, 0, 0);
    doc.textWithLink("GitHub", textOffsetX + 40, linkYPosition, {
      url: "https://github.com",
    });

    doc.save("carte-de-visite.pdf");
  };

  return (
    <>
      <div className="card-hover flex flex-col sm:flex-row p-4 bg-white shadow-md rounded-lg max-w-full sm:max-w-md justify-center items-center">
        <Profile imageUrl={userInfo.imageUrl} />
        <div className="flex flex-col justify-center ml-4 text-center sm:text-left">
          <ContactDetails userInfo={userInfo} />
          <SocialLinks />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row p-4 max-w-full sm:max-w-md justify-center items-center">
        <button
          onClick={generatePDF}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Télécharger en PDF
        </button>
      </div>
    </>
  );
};

// Fonction pour convertir une image en base64
const getBase64Image = (imgUrl, callback) => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imgUrl;
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    callback(dataURL);
  };
};

export default Card;
