// Fonction utilitaire pour calculer la hauteur dynamique de la carte
export const calculateCardHeight = (userInfo, profileImage) => {
  let baseHeight = 10; // Hauteur minimale de la carte
  const lineHeight = 1; // Hauteur de chaque ligne de texte
  const linesForName = Math.ceil(userInfo.name.length / 30);
  const linesForPosition = Math.ceil(userInfo.position.length / 30);
  const linesForEmail = Math.ceil(userInfo.email.length / 30);
  const numberOfTextLines = linesForName + linesForPosition + linesForEmail + 1;

  const dynamicHeight = lineHeight * numberOfTextLines;
  const imageHeight = profileImage ? 40 : 0;
  return baseHeight + dynamicHeight + imageHeight + 20;
};
