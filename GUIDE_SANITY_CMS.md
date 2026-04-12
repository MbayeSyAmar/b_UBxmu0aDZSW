# 🎯 CRMTN Website - Guide d'Utilisation de Sanity CMS

## Vue d'ensemble

Votre site web CRMTN utilise **Sanity CMS** comme système de gestion de contenu. Cela signifie que vous pouvez mettre à jour le contenu du site **sans toucher au code**.

---

## 🚀 Démarrage Rapide

### 1. Accéder au Sanity Studio

Lors du lancement du serveur de développement:
```bash
npm run dev
```

Accédez à le **Sanity Studio** (interface de gestion) à: **`http://localhost:3000/studio`**

### 2. Ajouter du contenu

Dans le studio, vous verrez des sections pour:
- 📝 **Publications**: Articles scientifiques
- 👥 **Équipe**: Profils des chercheurs
- 🤝 **Partenaires**: Organisations collaboratrices
- 📰 **Actualités**: News et événements
- 🔬 **Domaines de Recherche**: Axes d'étude
- 📚 **Programmes**: Formation et éducation
- 💬 **Témoignages**: Histoires de patients/collaborateurs

---

## 📖 Guide par Section

### 📰 Actualités (News)

Chaque actualité contient:
- **Titre**: Titre de l'article
- **Catégorie**: Type (Partenariat régional, Plateforme clinique, Formation, etc.)
- **Date**: Quand l'article a été publié
- **Résumé**: Préview courte sur la page d'accueil
- **Contenu**: Article complet (supporté du **texte riche**: gras, listes, images)
- **Image**: Photo mise en avant

✅ **Conseil**: Ajoutez 2-3 actualités par mois pour garder le site frais!

---

### 📚 Publications Scientifiques

Chaque publication:
- **Année**: 2026, 2025, etc.
- **Domaine**: Diagnostics, Field surveillance, Implementation science, etc.
- **Titre**: Titre de l'article
- **Journal**: Nom de la revue
- **URL**: Lien vers l'article (DOI ou PubMed)
- **Auteurs**: Noms des chercheurs (optionnel)

✅ **Conseil**: Signalez vos publications pour augmenter votre crédibilité!

---

### 👥 Équipe

Pour chaque membre:
- **Nom**: Complet
- **Titre**: Position (Directeur, Chercheur, Clinicien, etc.)
- **Rôle**: Domaine principal (Recherche Clinique, Épidémiologie, Lab, etc.)
- **Biographie (FR et EN)**: Parcours et expertise
- **Photo**: Portrait professionnel
-**Spécialités**: Tags (Parasitologie, Immunologie, etc.)

✅ **Conseil**: Cela renforce la crédibilité et permet la collaboration!

---

### 🤝 Partenaires

Pour chaque partenaire:
- **Nom**: Organisation
- **Catégorie**: Ministère, Université, Hôpital, ONG, Bailleur, Intl
- **Description**: Qui sont-ils et pourquoi vous travaillez ensemble
- **Logo**: Logo officiel
- **Site web**: Lien vers leur site
- **Pays**: Localisation

✅ **Conseil**: Mettez en avant vos partenaires clés!

---

### 🔬 Domaines de Recherche

Pour chaque domaine:
- **Titre**: (ex. "Vector ecology and transmission intelligence")
- **Résumé**: 1-2 phrases
- **Tag**: Surveillance, Diagnostics, Recherche clinique, etc.
- **Description Complète**: Texte riche avec images

✅ **Conseil**: Cela attire les chercheurs et collaborateurs intéressés!

---

### 📚 Programmes de Formation

Pour chaque programme:
- **Titre**: (ex. "Field Epidemiology Fellowship")
- **Format**: 12-month cohort, Modular, Executive, On-demand
- **Résumé**: Court aperçu
- **Description Complète**: Contenu détaillé
- **Image**: Photo ou logo
- **Critères d'éligibilité**: Prérequis
- **Date de démarrage**: Quand le programme commence
- **Lien de candidature**: URL pour postuler

✅ **Conseil**: Attirez les futurs leaders! 🎓

---

### 💬 Témoignages

Pour chaque témoignage:
- **Nom**: De la personne
- **Rôle**: Sa position (Patient, Chercheur, Partenaire, etc.)
- **Type**: Catégorie
- **Message**: Citation courte (50-100 mots)
- **Photo**: Portrait
- **Ordre**: Position sur la page

✅ **Conseil**: Cela montre l'impact réel du CRMTN!

---

## ⚙️ Astuces Pratiques

### Éditeur de Texte Riche

Dans les champs "Contenu" ou "Description", vous pouvez:
- **Gras**: `**texte**`
- *Italique*: `*texte*`
- Titres: Utiliser H1, H2, H3
- Listes: Créer des listes à puces
- Images: Glisser-déposer ou uploader
- Liens: Ajouter des liens externes

### Images

- **Taille recommandée**: 1200px largeur min
- **Formats**: JPG, PNG, WebP
- **Optim**: Compressez avant upload pour eviter la lenteur

### Ordre d'affichage

Certains contenus ont un champ "Ordre":
- `1`: Apparît en premier
- `2`: Apparît en deuxième
- etc.

Utilisez ceci pour contrôler l'ordre des éléments sur la page

---

## 🔄 Workflows Courants

### Ajouter une nouvelle équipe
1. Allez à **Équipe** → **Nouveau**
2. Remplissez tous les champs
3. Uploadez une photo
4. Cliquez **Publier**

### Publier une actualité
1. Allez à **Actualités** → **Nouveau**
2. Tapez le titre et sélectionnez la catégorie
3. Écrivez le résumé et le contenu
4. Ajoutez une image
5. Cliquez **Publier**

### Ajouter une publication
1. Allez à **Publications** → **Nouveau**
2. Année, Domaine, Titre, Journal, URL
3. Cliquez **Publier**

---

## 🆘 Support

Si vous avez des questions:
1. Consultez la doc officielle Sanity: https://www.sanity.io/docs
2. Contactez votre développeur web
3. Envoyez un email à: support@crmtn.org

---

## 📋 Checklist pour Bien Démarrer

- [ ] J'ai accès au Sanity Studio
- [ ] J'ai rempli l'équipe (au moins 5 membres clés)
- [ ] J'ai listé les partenaires principaux
- [ ] J'ai ajouté 3+ publications récentes
- [ ] J'ai publié 2-3 actualités
- [ ] J'ai créé au moins 1 témoignage
- [ ] J'ai testé la page d'accueil pour vérifier l'affichage

---

## 🎉 C'est tout!

Vous êtes prêt à gérer votre site web CRMTN! 🚀

Le site se met à jour automatiquement quand vous publiez du contenu dans Sanity.

**Bon courage!** 💪
