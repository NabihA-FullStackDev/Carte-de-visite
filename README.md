## Carte de Visite Interactive

Ce projet est une carte de visite interactive réalisée avec **React**, **Tailwind CSS**, **React Icons**, **jsPDF**, et **Font Awesome**. Il permet d'afficher les informations de contact, ainsi que les liens vers les réseaux sociaux, tout en étant entièrement responsive. En plus de l'affichage des informations, l'utilisateur peut générer un fichier PDF de la carte avec les informations et l'image de profil.

### Fonctionnalités :
- Carte de visite responsive (s'adapte aux différentes tailles d'écran).
- Affichage et modification des informations de contact (nom, entreprise, email, téléphone).
- Icônes des réseaux sociaux (LinkedIn, GitHub, etc.) via **React Icons**.
- Génération de la carte de visite en format PDF avec **jsPDF**.
- Utilisation de **Tailwind CSS** pour les styles et la mise en page.
- Possibilité d'ajouter et de changer une image de profil.
  
### Prérequis

- **Node.js** et **npm** doivent être installés sur votre machine.

### Installation

1. **Cloner le projet :**

   ```bash
   git clone https://github.com/votre-utilisateur/carte-de-visite.git
   cd carte-de-visite
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement :**

   ```bash
   npm start
   ```

   L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

### Intégration dans un autre projet

Si vous souhaitez réutiliser cette carte de visite dans un autre projet React :

1. **Copiez les fichiers suivants** dans votre projet :
   - Le dossier `src/components/` qui contient les composants `Card.js`, `Form.js`, et `PDFGenerator.js`.
   - Le dossier `src/utils/` qui contient les utilitaires comme `getBase64Image.js` et `drawRoundedRect.js`.
   - Le fichier `tailwind.config.js` pour la configuration de Tailwind CSS.
   - Les fichiers `index.css` et `App.css` pour les styles.

2. **Ajouter Tailwind CSS** à votre projet si ce n'est pas déjà fait :

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Ensuite, configurez Tailwind en suivant les instructions de la documentation officielle : [Documentation Tailwind](https://tailwindcss.com/docs/installation).

3. **Installer React Icons** pour les icônes des réseaux sociaux :

   ```bash
   npm install react-icons
   ```

   Ensuite, importez les icônes dans vos fichiers React, par exemple dans `Card.js` :

   ```javascript
   import { FaLinkedin, FaGithub } from 'react-icons/fa';
   ```

4. **Installer Font Awesome** pour d'autres icônes si nécessaire :

   ```bash
   npm install --save font-awesome
   ```

   Et ajoutez l'importation suivante dans votre `index.js` ou `App.js` :

   ```javascript
   import 'font-awesome/css/font-awesome.min.css';
   ```

### Génération PDF

Le composant **`PDFGenerator.js`** utilise **jsPDF** pour générer un PDF de la carte de visite. Les informations du formulaire, y compris l'image de profil, sont utilisées pour créer le PDF.

### Personnalisation

- **Icônes** : Vous pouvez facilement changer les liens et les icônes dans le fichier `Card.js` où sont utilisés `react-icons` et `Font Awesome`.
- **Styles** : Les styles sont gérés avec **Tailwind CSS**. Vous pouvez les personnaliser directement en modifiant les classes utilitaires dans les composants React.
- **Formulaire** : Le formulaire pour modifier les informations de la carte se trouve dans `Form.js`. Il peut être ajusté pour accepter plus de champs ou d'autres informations.

### Scripts Disponibles

- **`npm start`** : Lance le serveur de développement.
- **`npm run build`** : Crée une version optimisée pour la production.
- **`npm test`** : Lance les tests.

### Dépendances Principales

- **React** : ^18.3.1
- **Tailwind CSS** : ^3.4.13
- **React Icons** : ^5.3.0
- **jsPDF** : ^2.5.2
- **Font Awesome** : ^4.7.0

### Licence

Ce projet est sous licence MIT.

---

### Changelog :
- Ajout de la fonctionnalité de génération de PDF.
- Migration vers **React Icons** pour une meilleure gestion des icônes des réseaux sociaux.
- Ajout d'un formulaire pour modifier les informations de la carte de visite.
