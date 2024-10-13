import React from "react";
import { jsPDF } from "jspdf";
import { getBase64Image } from "../utils/getBase64Image";
import { drawRoundedRect } from "../utils/drawRoundedRect";

const PDFGenerator = ({ userInfo, profileImage }) => {
  const linkedinLogoUrl = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
  const githubLogoUrl = "https://cdn-icons-png.flaticon.com/512/733/733553.png";

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    //TODO Dynamiser les dimensions
    const cardWidth = 140;
    const borderRadius = 10;
    const shadowOffset = 0.5;

    const pageWidth = doc.internal.pageSize.getWidth();
    const startX = (pageWidth - cardWidth) / 2;
    const startY = 10;

    // ---- Calculer la hauteur dynamique du contenu ----
    let currentY = startY + 10;
    const imageWidth = 56;

    if (profileImage) {
      currentY += imageWidth;
    } else {
      currentY += 45;
    }

    const socialIconsY = currentY;
    if (userInfo.github || userInfo.linkedin) {
      currentY += 20;
    }

    // ---- Dessiner l'ombre et le fond ----
    drawRoundedRect(
      doc,
      startX,
      startY,
      cardWidth,
      currentY,
      borderRadius,
      shadowOffset
    );
    drawRoundedRect(
      doc,
      startX,
      startY,
      cardWidth,
      currentY,
      borderRadius,
      0,
      true
    );

    // ---- Ajouter l'image et le texte après avoir dessiné l'ombre et le fond ----
    let contentY = startY + 10;

    const textStartX = startX + (cardWidth - imageWidth - cardWidth / 2) / 2;

    if (profileImage) {
      doc.addImage(
        profileImage,
        "PNG",
        textStartX,
        contentY,
        imageWidth,
        imageWidth
      );
      contentY += 15;
    }

    const textOffsetX = textStartX + imageWidth + 10;

    // Ajouter le texte à droite de l'image
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(userInfo.name, textOffsetX, contentY);
    contentY += 10;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(userInfo.position, textOffsetX, contentY);
    contentY += 10;
    doc.text(userInfo.email, textOffsetX, contentY);
    contentY += 10;
    doc.text(userInfo.phone, textOffsetX, contentY);
    contentY += 15;

    // ---- Ajouter les logos des réseaux sociaux ----
    const linkedinLogoX = textOffsetX;
    const githubLogoX = linkedinLogoX + 15;

    if (userInfo.linkedin) {
      getBase64Image(linkedinLogoUrl, (base64LinkedIn) => {
        doc.addImage(base64LinkedIn, "PNG", linkedinLogoX, socialIconsY, 7, 7);

        if (userInfo.github) {
          getBase64Image(githubLogoUrl, (base64Github) => {
            doc.addImage(base64Github, "PNG", githubLogoX, socialIconsY, 7, 7);
            doc.save("carte-de-visite.pdf");
          });
        } else {
          doc.save("carte-de-visite.pdf");
        }
      });
    } else if (userInfo.github) {
      getBase64Image(githubLogoUrl, (base64Github) => {
        doc.addImage(base64Github, "PNG", githubLogoX, socialIconsY, 7, 7);
        doc.save("carte-de-visite.pdf");
      });
    } else {
      doc.save("carte-de-visite.pdf");
    }
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
    >
      Télécharger la carte en PDF
    </button>
  );
};

export default PDFGenerator;
