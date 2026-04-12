## 🆘 Aide & Dépannage Sanity CMS

### ❌ "Cannot find module @sanity/client"

**Solution**: Installez les packages
```bash
npm install
```

---

### ❌ "Sanity project not configured"

**Solution**: Créez `.env.local` avec:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Créez le projet sur: https://www.sanity.io/

---

### ❌ "NEXT_PUBLIC_SANITY_PROJECT_ID is undefined"

**Solution**: Le fichier `.env.local` doit être à la **racine du projet**, pas dans un sous-dossier

Vérifie:
```
/c:/Users/.../b_UBxmu0aDZSW/
├── .env.local          ← ICI!
├── app/
├── lib/
└── sanity.config.ts
```

---

### ❌ "Studio displays blank page"

**Solution**:
1. Vérifiez les clés dans `.env.local`
2. Assurez-vous que le **dataset est 'production'**
3. Relancez le serveur avec `npm run dev`

---

### ❌ "Images ne s'affichent pas"

**Solution**: Sanity fournit un CDN, mais vous devez utiliser `@sanity/image-url`:

```typescript
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
```

Puis utiliser:
```jsx
<img src={urlFor(image).width(300).url()} />
```

---

### ✅ "Comment ajouter une nouvelle langue?"

Sanity supporte nativement plusieurs langues! Vous pouvez:

1. Dans vos schemas, ajouter des champs par langue:
```typescript
{
  name: 'title_fr',
  title: 'Titre (FR)',
  type: 'string',
},
{
  name: 'title_en',
  title: 'Titre (EN)',
  type: 'string',
}
```

2. Ou utiliser un système de traduction complète (demandez au développeur)

---

### ✅ "Comment importer des publications existantes?"

Sanity permet les **imports en bulk**:

1. Exportez vos publications en JSON
2. Utilisez `sanity import` CLI:
```bash
sanity import publications.json
```

Contact: support@sanity.io pour l'aide

---

### ✅ "Comment publier le site?"

**Phase 1: Développement LOCAL**
```bash
npm run dev
```
Accédez à http://localhost:3000

**Phase 2: Production (Vercel)**
1. Poussez le code sur GitHub
2. Connectez le repo à Vercel
3. Configurez les variables d'environnement
4. Vercel déploiera automatiquement

---

### ✅ "Qui a accès au Sanity Studio?"

Par défaut: **QUI VEUT**

Pour sécuriser:
1. Allez sur Sanity → Settings → Access
2. Configurez les rôles (Editor, Viewer, Admin)
3. Invitez l'équipe CRMTN

---

### ✅ "Sauvegardes automatiques?"

**OUI!** Sanity archive versionne tout automatiquement.
- Historique complet disponible
- Restore en 1 clic
- Aucune donnée ne se perd

---

### 📞 Support 24/7

- **Docs officielles**: https://www.sanity.io/docs
- **Community Slack**: https://slack.sanity.io/
- **Email**: support@sanity.io

---

## Vous avez un autre problème?

Decrivez:
1. Quoi avez-vous fait?
2. Quelle erreur avez-vous reçu?
3. Screenshot si possible

Envoyez email à: votre_email@crmtn.org
