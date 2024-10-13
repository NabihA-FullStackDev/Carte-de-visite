import React from "react";
import { jsPDF } from "jspdf";
import { getBase64Image } from "../utils/getBase64Image";
import { drawRoundedRect } from "../utils/drawRoundedRect";

const PDFGenerator = ({ userInfo, profileImage }) => {
  const linkedinLogoUrl =
    "https://cdn-icons-png.flaticon.com/512/174/174857.png"; // Lien vers le logo LinkedIn
  const githubLogoUrl = "https://cdn-icons-png.flaticon.com/512/733/733553.png"; // Lien vers le logo GitHub

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const cardWidth = 140; // Largeur de la carte
    const borderRadius = 10; // Rayon des coins arrondis
    const shadowOffset = 0.5; // Décalage pour l'ombre

    const pageWidth = doc.internal.pageSize.getWidth();
    const startX = (pageWidth - cardWidth) / 2; // Centrer la carte
    const startY = 10; // Position fixe en haut de la page

    // ---- Calculer la hauteur dynamique du contenu ----
    let currentY = startY + 10; // Position de départ du contenu
    const imageWidth = 56; // Largeur de l'image

    if (profileImage) {
      currentY += imageWidth; // Ajouter la hauteur de l'image + espacement
    } else {
      currentY += 45;
    }

    const socialIconsY = currentY; // Position pour les logos sociaux
    if (userInfo.github || userInfo.linkedin) {
      currentY += 20; // Ajouter la hauteur pour les logos
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
    ); // Dessiner l'ombre (gris léger)
    drawRoundedRect(
      doc,
      startX,
      startY,
      cardWidth,
      currentY,
      borderRadius,
      0,
      true
    ); // Dessiner le fond blanc

    // ---- Ajouter l'image et le texte après avoir dessiné l'ombre et le fond ----
    let contentY = startY + 10; // Réinitialiser la position pour le contenu

    const textStartX = startX + (cardWidth - imageWidth - cardWidth / 2) / 2; // Centrer l'image et le texte horizontalement

    if (profileImage) {
      doc.addImage(
        profileImage,
        "PNG",
        textStartX,
        contentY,
        imageWidth,
        imageWidth
      ); // Ajouter l'image de profil
      contentY += 15; // Ajuster après l'image
    }

    const textOffsetX = textStartX + imageWidth + 10; // Le texte commence après l'image

    // Ajouter le texte à droite de l'image
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(userInfo.name, textOffsetX, contentY); // Nom à côté de l'image
    contentY += 10;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(userInfo.position, textOffsetX, contentY); // Position
    contentY += 10;
    doc.text(userInfo.email, textOffsetX, contentY); // Email
    contentY += 10;
    doc.text(userInfo.phone, textOffsetX, contentY); // Téléphone
    contentY += 15; // Ajouter un espace après le texte

    // ---- Ajouter les logos des réseaux sociaux ----
    const linkedinLogoX = textOffsetX; // Position du logo LinkedIn
    const githubLogoX = linkedinLogoX + 15; // Position du logo GitHub

    if (userInfo.linkedin) {
      getBase64Image(linkedinLogoUrl, (base64LinkedIn) => {
        doc.addImage(base64LinkedIn, "PNG", linkedinLogoX, socialIconsY, 7, 7); // Logo LinkedIn

        if (userInfo.github) {
          getBase64Image(githubLogoUrl, (base64Github) => {
            doc.addImage(base64Github, "PNG", githubLogoX, socialIconsY, 7, 7); // Logo GitHub
            doc.save("carte-de-visite.pdf"); // Enregistrer le PDF une fois terminé
          });
        } else {
          doc.save("carte-de-visite.pdf");
        }
      });
    } else if (userInfo.github) {
      getBase64Image(githubLogoUrl, (base64Github) => {
        doc.addImage(base64Github, "PNG", githubLogoX, socialIconsY, 7, 7); // Logo GitHub
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
