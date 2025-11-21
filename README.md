# Portfolio Théo Simonet

Portfolio personnel construit avec Vite.

## Développement local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions lors de chaque push sur la branche `main`.

### Configuration requise

1. Dans les paramètres du dépôt GitHub, aller dans **Settings > Pages**
2. Sous **Build and deployment**, sélectionner **Source: GitHub Actions**

Le site sera accessible à l'adresse : https://hithubfr.github.io/theo/

### Workflow

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) :
- Se déclenche automatiquement lors des pushs sur `main`
- Peut aussi être déclenché manuellement via l'onglet Actions
- Build le projet avec Vite
- Déploie les fichiers statiques sur GitHub Pages
