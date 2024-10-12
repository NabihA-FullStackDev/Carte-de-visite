## Carte de Visite Interactive

Ce projet est une carte de visite interactive réalisée avec **React**, **Tailwind CSS**, et **Font Awesome** pour les icônes des réseaux sociaux. Il permet d'afficher les informations de contact, ainsi que les liens vers les réseaux sociaux, tout en étant entièrement responsive.

### Fonctionnalités :
- Carte de visite responsive (s'adapte aux différentes tailles d'écran).
- Affichage des informations de contact (nom, entreprise, email, téléphone).
- Icônes des réseaux sociaux (LinkedIn, GitHub, etc.) via Font Awesome.
- Utilisation de **Tailwind CSS** pour les styles et la mise en page.

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
   - Le dossier `src/components/` qui contient les composants `Card.js`, `Profile.js`, `ContactDetails.js`, et `SocialLinks.js`.
   - Le fichier `tailwind.config.js` pour la configuration de Tailwind CSS.
   - Les fichiers `index.css` et `App.css` pour les styles.

2. **Ajouter Tailwind CSS** à votre projet si ce n'est pas déjà fait :

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Ensuite, configurez Tailwind en suivant les instructions de la documentation officielle : [Documentation Tailwind](https://tailwindcss.com/docs/installation).

3. **Installer Font Awesome** pour les icônes des réseaux sociaux :

   ```bash
   npm install --save font-awesome
   ```

   Et ajoutez l'importation suivante dans votre `index.js` ou `App.js` :

   ```javascript
   import 'font-awesome/css/font-awesome.min.css';
   ```

### Personnalisation

- **Icônes** : Vous pouvez facilement changer les liens et les icônes dans le fichier `SocialLinks.js`.
- **Styles** : Les styles sont gérés avec **Tailwind CSS**. Vous pouvez les personnaliser directement en modifiant les classes utilitaires dans les composants React.

### Scripts Disponibles

- **`npm start`** : Lance le serveur de développement.
- **`npm build`** : Crée une version optimisée pour la production.
- **`npm test`** : Lance les tests.

### Dépendances Principales

- **React** : ^18.3.1
- **Tailwind CSS** : ^3.4.13
- **Font Awesome** : ^4.7.0

### Licence

Ce projet est sous licence MIT.