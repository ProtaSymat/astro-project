# PixelPerfect - Agence Web Moderne

## 🚀 Aperçu

**PixelPerfect** est une agence web de pointe, spécialisée dans la création de sites et d'applications web modernes. Nous utilisons des technologies de pointe pour offrir une expérience utilisateur sans pareil à travers un site vitrine innovant.

![Aperçu de PixelPerfect](/images/preview.webp)

[🔗 **Visitez notre site**](https://astro-project-lemon.vercel.app/)

## ✨ Caractéristiques Principales

- 🎨 **Design Moderne et Responsive :** Une interface élégante qui s'adapte à tous les écrans.
- ⚡ **Performances Optimisées :** Un site ultra-rapide grâce à Astro.
- 📝 **Blog Technique Intégré :** Des articles sur le développement web avec syntaxe mise en évidence.
- 🧩 **Composants Réutilisables :** Une architecture modulaire pour une maintenance facilitée.
- 🔍 **SEO Optimisé :** Des métadonnées et une structure sémantique pour un meilleur référencement.
- 📱 **PWA :** Des fonctionnalités de Progressive Web App pour une expérience proche des applications natives.
- 🌙 **Mode Sombre/Clair :** Un thème qui s'adapte aux préférences des utilisateurs.

## 🛠️ Technologies

- **Astro :** Un framework statique moderne.
- **React :** Pour des composants interactifs.
- **Tailwind CSS :** Un framework CSS utilitaire.
- **TypeScript :** Pour un typage statique.
- **Markdown :** Pour la gestion du contenu.
- **Vercel :** Pour le déploiement et l'hébergement.

## 📁 Structure du Projet

```
pixelperfect/
├── public/
│   ├── images/         # Images statiques
│   ├── icons/          # Icônes et favicon
│   └── robots.txt      # Configuration SEO
├── src/
│   ├── components/     # Composants réutilisables
│   ├── content/        # Contenu en Markdown
│   ├── layouts/        # Modèles de pages
│   ├── pages/          # Pages du site
│   ├── styles/         # Styles globaux
│   └── utils/          # Fonctions utilitaires
├── astro.config.mjs    # Configuration d'Astro
├── tailwind.config.js  # Configuration de Tailwind CSS
└── package.json        # Dépendances du projet
```

## 🚀 Installation et Développement

### Prérequis

- Node.js version 18 ou plus
- npm ou yarn

### Mise en Place

```bash
# Cloner le dépôt
git clone https://github.com/ProtaSymat/astro-project.git
cd pixelperfect

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```
Le site sera accessible à l'adresse `http://localhost:4321`.

### Scripts Disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Construire le site pour la production
npm run preview      # Aperçu du build de production
npm run astro        # Utiliser la CLI d'Astro
npm run lint         # Lancer une vérification du code
```

## 🎨 Personnalisation

### Couleurs et Thème

Modifiez le fichier `tailwind.config.js` pour personnaliser la palette de couleurs :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#votre-couleur-primaire',
      secondary: '#votre-couleur-secondaire'
    }
  }
}
```

### Contenu et Composants

- **Navigation :** `src/components/layout/Header.astro`
- **Page d'accueil :** `src/pages/index.astro`
- **À propos :** `src/pages/about.astro`
- **Services :** `src/pages/services.astro`

## 🚀 Déploiement

### Avec Vercel

1. Connectez votre dépôt GitHub à Vercel.
2. Configurez les variables d'environnement si nécessaire.
3. Le déploiement se fait automatiquement à chaque push.

### Manuellement

```bash
# Construire le projet pour la production
npm run build

# Les fichiers sont générés dans le dossier /dist
# Uploadez le contenu sur votre serveur
```

## 📊 Performances

Notre site atteint d'excellents scores de performance, y compris :

- **Lighthouse :** 98/100
- **Core Web Vitals :** Tous verts
- **Temps de Chargement :** Inférieur à 1 seconde
- **Taille des Bundles :** Optimisée

## 🤝 Contributions

Les contributions sont les bienvenues ! Suivez ces étapes :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/NouvelleFonctionnalité`)
3. Committez vos changements (`git commit -m 'Ajout de NouvelleFonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/NouvelleFonctionnalité`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Marie Dubois** - Lead Developer & UI/UX Designer
- **Thomas Martin** - Full-Stack Developer
- **Sophie Laurent** - Frontend Specialist
- **Alexandre Durand** - Backend & DevOps

## 📞 Contact

**PixelPerfect Agency**

- Site web : [https://astro-project-lemon.vercel.app/](https://astro-project-lemon.vercel.app/)
- Email : [mathys@pixelperfect.fr](mailto:mathys@pixelperfect.fr)
- Téléphone : +33 1 23 45 67 89
- Adresse : 123 Rue de la Tech, 75001 Paris

Développé avec ❤️ par **l'équipe PixelPerfect**.