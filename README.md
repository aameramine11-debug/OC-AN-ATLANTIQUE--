# AMA Jet Ski Atlantic — React + Vite

Projet React prêt à lancer, construit avec les six photos fournies par l'utilisateur.
Le site utilise des fichiers image locaux dans `public/images/`, donc les photos ne dépendent pas de liens d'images externes.

## Lancer le projet
1. Décompressez le ZIP.
2. Ouvrez le dossier `ama-jetski-atlantic` dans VS Code.
3. Ouvrez Terminal > New Terminal, puis lancez :
   ```bash
   npm install
   npm run dev
   ```
4. Ouvrez l'URL locale affichée par Vite.

## Avant de publier
- Ouvrez `src/App.jsx` et remplacez `WHATSAPP_NUMBER = "212600000000"` par le vrai numéro de l'agence, sans `+`, espaces ou tirets.
- Confirmez les tarifs et les conditions de réservation directement avec l'agence.
- Le formulaire ouvre WhatsApp avec les détails préremplis ; il n'enregistre pas les réservations dans une base de données et ne prend pas de paiement en ligne.
- Instagram pointe vers `https://www.instagram.com/location_de_jetski_agadir/`.
- Les polices web sont chargées via Google Fonts. Le site et les photos locales restent fonctionnels sans cette police, avec une police de remplacement.

## Production
```bash
npm run build
npm run preview
```
Le site compilé se trouve dans `dist/`.


Logo : le fichier fourni par le client est utilisé dans la navigation et le pied de page (`public/images/ama-logo.png`).


## Langues
Le site inclut un sélecteur FR / EN / عربي dans l’en-tête. Le contenu principal, les tarifs, les questions fréquentes et le message de réservation WhatsApp changent selon la langue. L’arabe active également la direction RTL.
