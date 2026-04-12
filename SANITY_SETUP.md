# Sanity CMS Configuration

## 1️⃣ Créer un projet Sanity

Allez sur: https://www.sanity.io/

1. Créez un compte gratuitement
2. Cliquez sur "Create Project"
3. Nommez le projet: `CRMTN` (Centre de Recherche sur les Maladies Tropicales Négligées)
4. Sélectionnez le dataset: `production`
5. Notez votre **PROJECT ID** et **DATASET**

## 2️⃣ Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id_ici
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_api_token_ici
```

## 3️⃣ Générer un API Token

Dans le dashboard Sanity:
1. Aller à **Settings → API tokens**
2. Cliquer sur "Add API token"
3. Nom: `Next.js Site`
4. Permissions: Sélectionner "Editor" ou "Admin"
5. Copier le token et le mettre dans `.env.local`

## 4️⃣ Lancer le Sanity Studio

```bash
npm run dev -- studio
```

Accédez à: `http://localhost:3000/studio`

## 5️⃣ Remplir le contenu

Dans le Sanity Studio (à `http://localhost:3000/studio`), vous pouvez maintenant ajouter:

- ✅ **Publications**: Articles scientifiques avec année, journal, lien
- ✅ **Équipe**: Photos, bios, spécialités de chaque membre
- ✅ **Partenaires**: ONG, universités, ministères, bailleurs
- ✅ **Actualités**: News articles avec images et contenu riche
- ✅ **Domaines de Recherche**: Descriptions détaillées des axes
- ✅ **Programmes**: Formation avec dates et critères
- ✅ **Témoignages**: Histoires de patients, chercheurs, partenaires

## 6️⃣ Utiliser les données dans le site

Le site Next.js récupère automatiquement les données de Sanity via les queries dans `lib/sanity.ts`

Exemple - pour afficher les publications:
```typescript
import { client, PUBLICATIONS_QUERY } from '@/lib/sanity'

const publications = await client.fetch(PUBLICATIONS_QUERY)
```

---

## 📚 Documentation
- Sanity CLI: https://www.sanity.io/docs/cli
- Schemas: https://www.sanity.io/docs/schema-types
- Queries GROQ: https://www.sanity.io/docs/groq

---

**Support**: Si vous avez des questions, consultez la documentation Sanity ou contactez le développeur.
