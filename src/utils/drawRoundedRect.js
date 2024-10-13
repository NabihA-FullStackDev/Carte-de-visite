export const drawRoundedRect = (
  doc,
  startX,
  startY,
  cardWidth,
  height,
  borderRadius,
  shadowOffset = 0,
  hasBackground = false,
  lineWidth = 1.5
) => {
  const backgroundColor = [255, 255, 255];
  doc.setDrawColor(150); // Définir la couleur du cadre
  doc.setLineWidth(lineWidth); // Définir l'épaisseur du cadre

  if (hasBackground) {
    // Si un arrière-plan est nécessaire et que la couleur est spécifiée
    doc.setFillColor(...backgroundColor); // Remplir avec la couleur spécifiée
    doc.roundedRect(
      startX, // Position X
      startY, // Position Y
      cardWidth, // Largeur
      height, // Hauteur
      borderRadius, // Rayon des coins
      borderRadius, // Rayon des coins
      "F" // 'F' pour remplir le rectangle
    );
  } else {
    // Si pas de fond ou si le backgroundColor est null, dessiner uniquement le cadre
    doc.roundedRect(
      startX + shadowOffset, // Position X
      startY + shadowOffset, // Position Y
      cardWidth + shadowOffset, // Largeur
      height, // Hauteur
      borderRadius, // Rayon des coins
      borderRadius // Rayon des coins
    );
  }
};
