'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.research': 'Recherche',
    'nav.publications': 'Publications',
    'nav.clinical': 'Services Cliniques',
    'nav.training': 'Formation',
    'nav.community': 'Communauté',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',

    // Hero
    'hero.intro': 'Accueil',
    'hero.tagline': 'Approfondissement mondial de la recherche axée sur l\'institution',
    'hero.title': 'Faire Progresser la Recherche sur les Maladies Tropicales Négligées',
    'hero.subtitle': 'Le CRMTN unit la science de laboratoire, la rigueur clinique, l\'intelligence épidémiologique et le partenariat communautaire pour produire des preuves qui renforcent les systèmes de santé et protègent les populations vulnérables.',
    'hero.discover': 'Découvrez nos recherches',
    'hero.support': 'Soutenir notre mission',
    'hero.outlook': 'Perspective institutionnelle',
    'hero.location': 'Saint-Louis, Sénégal',
    'hero.research_platform': 'Plateforme de recherche',
    'hero.research_detail': 'Diagnostics, essais cliniques et voies de mise en œuvre',
    'hero.global_relevance': 'Pertinence mondiale',
    'hero.global_detail': 'Construit pour partenaire avec les ministères, les hôpitaux, les bailleurs de fonds et les institutions universitaires',

    // Metrics Section
    'metrics.title': 'Excellence mesurée avec une ligne directe vers l\'impact humain',
    'metrics.subtitle': 'Un signal institutionnel clair : solides résultats de recherche, équipes coordonnées, programmes actifs et portée mesurable.',
    'metrics.publications': 'Publications évaluées par les pairs',
    'metrics.publications_detail': 'Publiées dans les domaines de la médecine tropicale, de la science de la mise en œuvre et des diagnostics translationnels.',
    'metrics.researchers': 'Chercheurs et cliniciens',
    'metrics.researchers_detail': 'Équipes multidisciplinaires couvrant l\'épidémiologie, la parasitologie, l\'immunologie et les soins aux patients.',
    'metrics.programs': 'Programmes de recherche actifs',
    'metrics.programs_detail': 'Études longitudinales, voies d\'essai et plateformes de surveillance dans les environnements endémiques.',
    'metrics.impacted': 'Personnes impactées',
    'metrics.impacted_detail': 'Dépistage, diagnostics, soutien au traitement, sensibilisation et action sur le terrain.',

    // About Section
    'about.title': 'Une histoire institutionnelle construite autour de la preuve, de la confiance et de la valeur de la santé publique à long terme',
    'about.subtitle': 'Où recherche, soins et formation se renforcent mutuellement.',
    'about.mission': 'Mission',
    'about.mission_title': 'Générer des connaissances exploitables sur les maladies tropicales négligées.',
    'about.mission_detail': 'La rigueur scientifique est liée aux conditions réelles de mise en œuvre, aux réalités des patients et à la prise de décision du système de santé.',
    'about.vision': 'Vision',
    'about.vision_title': 'Avancer la détection précoce, les soins plus robustes et les systèmes de santé endémiques plus résilients.',
    'about.vision_detail': 'La recherche clinique, la surveillance et la sensibilisation sont positionnées comme faisant partie d\'un mandat institutionnel cohérent.',
    'about.values': 'Valeurs',
    'about.values_title': 'Intégrité, éthique, partenariat, accessibilité et respect des communautés.',
    'about.values_detail': 'Chaque point de contact renforce le professionnalisme sans perdre la dimension humaine de la recherche médicale.',
    'about.progression': 'Progression institutionnelle',
    'about.progression_detail': 'La recherche dirige. Les voies cliniques suivent. Les communautés en bénéficient.',
    'about.progression_body': 'La narration basée sur le défilement rend cette progression lisible: de la précision du laboratoire au déploiement opérationnel à l\'impact sanitaire visible.',

    // Research Section
    'research.eyebrow': 'Domaines de recherche',
    'research.title': 'Un portefeuille conçu pour la profondeur scientifique et la traduction en santé mondiale',
    'research.subtitle': 'Les thèmes de recherche sont présentés dans une grille calme et premium avec une forte hiérarchie et un mouvement subtil, prêts pour le vrai contenu institutionnel.',
    'research.vector': 'Écologie vectorielle et intelligence de transmission',
    'research.vector_detail': 'Observation de terrain haute résolution, modélisation environnementale et analyse entomologique pour anticiper les changements de transmission.',
    'research.diagnostics': 'Diagnostics rapides et découverte de biomarqueurs',
    'research.diagnostics_detail': 'Pipelines du laboratoire à la clinique conçus pour la fiabilité dans les paramètres de déploiement à faibles ressources.',
    'research.therapeutic': 'Évaluation thérapeutique et essais cliniques',
    'research.therapeutic_detail': 'Protocoles fondés sur l\'éthique traduisant les preuves en voies de soins plus sûres et plus efficaces.',
    'research.maternal': 'Maternité, pédiatrie et populations vulnérables',
    'research.maternal_detail': 'Études ciblées abordant les populations les plus affectées par le diagnostic retardé et l\'accès limité.',
    'research.onehealth': 'Une santé et systèmes environnementaux',
    'research.onehealth_detail': 'Analyse intégrée sur les écosystèmes, les vecteurs, les réservoirs et les profils de risque humain.',
    'research.implementation': 'Mise en œuvre et traduction politique',
    'research.implementation_detail': 'Recherche opérationnelle aidant les ministères et les partenaires à convertir les données en action durable.',
    'research.discuss': 'Discuter de la collaboration',

    // Publications Section
    'publications.title': 'Une présentation académique avec un rythme visuel inspiré par les revues',
    'publications.subtitle': 'Structuré pour la confiance : typographie forte, contrôles d\'interface retenue et suffisamment de finition pour paraître prêt pour la publication à première vue.',
    'publications.all': 'Tous les résultats',
    'publications.diagnostics': 'Diagnostics',
    'publications.clinical': 'Études cliniques',
    'publications.implementation': 'Mise en œuvre',
    'publications.abstract': 'Voir le résumé',

    // Clinical Section
    'clinical.title': 'Une couche institutionnelle orientée vers les patients qui semble précise, calme et digne de confiance',
    'clinical.subtitle': 'La clarté de la communication, de la pratique et du résultat font confiance. Le cadre est construit autour de la participation transparente des patients et de la coordination du système de santé.',
    'clinical.journey': 'Parcours du patient',
    'clinical.journey_1': 'Orientation et admission',
    'clinical.journey_2': 'Confirmation diagnostique',
    'clinical.journey_3': 'Traitement et suivi',
    'clinical.journey_4': 'Surveillance à long terme coordonnée',
    'clinical.consultation': 'Unités de consultation spécialisées',
    'clinical.consultation_detail': 'Admission structurée, orientation, consultation et suivi à long terme pour les maladies tropicales et parasitaires.',
    'clinical.laboratory': 'Services avancés de laboratoire et de spécimens',
    'clinical.laboratory_detail': 'Dépistage, flux de travail confirmés, analyse moléculaire et rapports surveillés dans les paramètres de recherche et de soins.',
    'clinical.research_participation': 'Participation à la recherche clinique',
    'clinical.research_participation_detail': 'Inscription transparente et dirigée par l\'éthique et soutien des participants à travers les études observationnelles et les essais interventionnels.',
    'clinical.note_1': 'Conçu pour la clarté pour les patients, les familles et les institutions qui font référence.',
    'clinical.note_2': 'Soutient les activités diagnostiques de routine et de recherche dirigée par un protocole.',
    'clinical.note_3': 'Construit en pensant à la communication accessible et à la dignité des participants.',

    // Education Section
    'education.title': 'Programmes conçus pour renforcer l\'expertise régionale de la prochaine génération',
    'education.subtitle': 'Le CRMTN est présenté non seulement comme un producteur de connaissances mais comme une plateforme disciplinée d\'enseignement, de mentorat et de renforcement de la capacité institutionnelle.',
    'education.fellowship': 'Bourse d\'épidémiologie de terrain',
    'education.fellowship_format': 'Cohorte de 12 mois',
    'education.fellowship_detail': 'Formation immersive en conception de surveillance, analyse d\'épidémies et traduction des preuves pour les systèmes de santé.',
    'education.laboratory': 'Académie des méthodes de laboratoire',
    'education.laboratory_format': 'Programme modulaire',
    'education.laboratory_detail': 'Instruction pratique en microscopie, flux de travail moléculaire, biosécurité et assurance qualité.',
    'education.leadership': 'Série de leadership en mise en œuvre',
    'education.leadership_format': 'Format exécutif',
    'education.leadership_detail': 'Programmes stratégiques à format court pour les ministères, les ONG et les partenaires institutionnels coordonnant l\'action MTN.',

    // Community Section
    'community.title': 'Impact humain présenté avec retenue, sérieux et clarté institutionnelle',
    'community.subtitle': 'La section évite les pièges de la charité et se concentre plutôt sur le vrai partenariat, la confiance durable et les stratégies de prévention et de sensibilisation co-créées.',
    'community.campaigns': 'Campagnes construites avec les communautés, pas seulement pour elles',
    'community.campaigns_detail': 'Matériels de sensibilisation à la santé, messages de prévention et voies d\'identification des cas co-conçus avec les leaders locaux.',
    'community.campaigns_stat': '64 districts engagés',
    'community.mobile': 'Circuits de dépistage et d\'orientation mobiles',
    'community.mobile_detail': 'Les équipes de terrain étendent l\'accès aux diagnostics et les voies d\'orientation guidées dans les zones éloignées et mal desservies.',
    'community.mobile_stat': '118 jours de déploiement annuels',
    'community.feedback': 'Boucles de rétroaction de recherche informées par les participants',
    'community.feedback_detail': 'Les communautés façonnent la diffusion, la conception du consentement et la stratégie d\'engagement pour entretenir la confiance et la clarté.',
    'community.feedback_stat': 'Rétention longitudinale de 91 %',

    // News Section
    'news.eyebrow': 'Actualités et événements',
    'news.title': 'Rythme éditorial pour les annonces institutionnelles, les réunions et les jalons majeurs',
    'news.subtitle': 'Le design se décale dans un tempo de magazine tout en restant discipliné, lisible et clairement institutionnel.',
    'news.read': 'Lire la mise à jour',

    // Media Section
    'media.title': 'Une archive raffinée pour les éléments visuels, les briefings et la documentation institutionnelle',
    'media.subtitle': 'Prêt à héberger une photographie authentique et des vidéos vérifiées tout en offrant déjà une présentation polie et prête pour la publication.',

    // Contact Section
    'contact.title': 'Construit pour les ministères, les institutions, les bailleurs de fonds, les cliniciens et les partenaires de recherche',
    'contact.subtitle': 'La section de fermeture est intentionnellement calme et précise : voies directes, un formulaire d\'enquête professionnel et un espace de coordination du campus.',
    'contact.partnerships': 'Partenariats institutionnels',
    'contact.partnerships_email': 'partnerships@crmtn.org',
    'contact.clinical': 'Coordination des services cliniques',
    'contact.clinical_email': 'clinical@crmtn.org',
    'contact.education': 'Demandes d\'éducation et de médias',
    'contact.education_email': 'engagement@crmtn.org',
    'contact.name': 'Nom',
    'contact.name_placeholder': 'Nom de contact institutionnel',
    'contact.organization': 'Organisation',
    'contact.organization_placeholder': 'Agence, ministère, hôpital ou partenaire',
    'contact.email': 'Email',
    'contact.email_placeholder': 'name@organization.org',
    'contact.subject': 'Sujet',
    'contact.subject_placeholder': 'Recherche, partenariat, formation, services cliniques',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Parlez-nous de votre enquête, collaboration ou besoin en service.',
    'contact.send': 'Envoyer la demande',
    'contact.campus': 'Aperçu du campus',
    'contact.campus_detail': 'Campus de coordination de recherche et clinique de Saint-Louis',
    'contact.campus_body': 'Prêt au déploiement avec incorporation de carte, couche SIG ou photographie institutionnelle spécifique à la localisation.',

    // Footer
    'footer.about': 'Recherche fondée sur les preuves, excellence clinique et action de santé publique pour les maladies tropicales négligées.',
    'footer.research': 'Recherche',
    'footer.clinical': 'Services cliniques',
    'footer.education': 'Éducation',
    'footer.impact': 'Impact communautaire',

    // Common
    'common.readMore': 'Lire la suite',
    'common.learnMore': 'En savoir plus',
    'common.viewAll': 'Voir tout',
    'common.eyebrow': 'Centre de Recherche sur les Maladies Tropicales Négligées',
    'common.crmtn': 'CRMTN',
    'common.credibility': 'Crédibilité institutionnelle',
    'common.credibility_detail': 'Recherche, soins, formation et sensibilisation alignés sur une plateforme autoritative unique.',
    'common.patient_centered': 'Science centrée sur le patient',
    'common.patient_centered_detail': 'Preuves encadrées autour des résultats, de la dignité et de l\'amélioration du système à long terme.',
    'common.current_focus': 'Sujet actuel',
    'common.focus': 'De l\'intelligence des pathogènes aux voies du patient',
    'common.focus_detail': 'L\'interface passe de l\'autorité scientifique à la confiance opérationnelle, créant un chemin transparent pour les collaborateurs, les cliniciens et les partenaires de santé publique.',
    'common.clinical_science': 'Science clinique',
    'common.clinical_science_detail': 'Preuves générées par des voies rigoureuses et dirigées par l\'éthique avec des équipes multidisciplinaires.',
    'common.regional_leadership': 'Leadership régional',
    'common.regional_leadership_detail': 'Programmes façonnés pour le déploiement dans le monde réel dans les paramètres endémiques et les réseaux de partenaires.',
    'common.community_impact': 'Impact communautaire',
    'common.community_impact_detail': 'Recherche traduite en services, sensibilisation, sensibilisation et amélioration des systèmes durables.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.clinical': 'Clinical Services',
    'nav.training': 'Training',
    'nav.community': 'Community',
    'nav.news': 'News',
    'nav.contact': 'Contact',

    // Hero
    'hero.intro': 'Home',
    'hero.tagline': 'Global health research with institutional depth',
    'hero.title': 'Advancing Research on Neglected Tropical Diseases',
    'hero.subtitle': 'CRMTN unites laboratory science, clinical rigor, epidemiological intelligence, and community partnership to produce evidence that strengthens health systems and protects vulnerable populations.',
    'hero.discover': 'Discover our research',
    'hero.support': 'Support our mission',
    'hero.outlook': 'Institutional outlook',
    'hero.location': 'Saint-Louis, Senegal',
    'hero.research_platform': 'Research platform',
    'hero.research_detail': 'Diagnostics, clinical trials, and implementation pathways',
    'hero.global_relevance': 'Global relevance',
    'hero.global_detail': 'Built to partner with ministries, hospitals, funders, and academic institutions',

    // Metrics Section
    'metrics.title': 'Measured excellence with a direct line to human impact',
    'metrics.subtitle': 'A clear institutional signal: strong research output, coordinated teams, active programs, and measurable reach across care and prevention pathways.',
    'metrics.publications': 'Peer-reviewed publications',
    'metrics.publications_detail': 'Published across tropical medicine, implementation science, and translational diagnostics.',
    'metrics.researchers': 'Researchers and clinicians',
    'metrics.researchers_detail': 'Multidisciplinary teams spanning epidemiology, parasitology, immunology, and patient care.',
    'metrics.programs': 'Active research programs',
    'metrics.programs_detail': 'Longitudinal studies, trial pathways, and surveillance platforms across endemic environments.',
    'metrics.impacted': 'People impacted',
    'metrics.impacted_detail': 'Through screening, diagnostics, treatment support, outreach, and policy-informed field action.',

    // About Section
    'about.title': 'An institutional story built around evidence, trust, and long-term public health value',
    'about.subtitle': 'Where research, care, and training reinforce one another.',
    'about.mission': 'Mission',
    'about.mission_title': 'Generate actionable knowledge on neglected tropical diseases.',
    'about.mission_detail': 'Scientific rigor is tied to real implementation conditions, patient realities, and health-system decision making.',
    'about.vision': 'Vision',
    'about.vision_title': 'Advance earlier detection, stronger care, and more resilient endemic health systems.',
    'about.vision_detail': 'Clinical research, surveillance, and outreach are positioned as part of one coherent institutional mandate.',
    'about.values': 'Values',
    'about.values_title': 'Integrity, ethics, partnership, accessibility, and respect for communities.',
    'about.values_detail': 'Every touchpoint reinforces professionalism without losing the human dimension of medical research.',
    'about.progression': 'Institutional progression',
    'about.progression_detail': 'Research leads. Clinical pathways follow. Communities benefit.',
    'about.progression_body': 'Scroll-based storytelling makes that progression legible: from laboratory precision to operational deployment to visible health impact.',

    // Research Section
    'research.eyebrow': 'Research areas',
    'research.title': 'A portfolio designed for scientific depth and global health translation',
    'research.subtitle': 'Research themes are presented in a calm, premium grid with strong hierarchy and subtle motion, ready for real institutional content.',
    'research.vector': 'Vector ecology and transmission intelligence',
    'research.vector_detail': 'High-resolution field observation, environmental modeling, and entomological analysis to anticipate transmission shifts.',
    'research.diagnostics': 'Rapid diagnostics and biomarker discovery',
    'research.diagnostics_detail': 'Laboratory-to-clinic pipelines designed for reliability in low-resource deployment settings.',
    'research.therapeutic': 'Therapeutic evaluation and clinical trials',
    'research.therapeutic_detail': 'Ethics-grounded protocols translating evidence into safer and more effective care pathways.',
    'research.maternal': 'Maternal, pediatric, and vulnerable populations',
    'research.maternal_detail': 'Focused studies addressing the populations most affected by delayed diagnosis and limited access.',
    'research.onehealth': 'One Health and environmental systems',
    'research.onehealth_detail': 'Integrated analysis across ecosystems, vectors, reservoirs, and human risk patterns.',
    'research.implementation': 'Implementation and policy translation',
    'research.implementation_detail': 'Operational research that helps ministries and partners convert data into durable action.',
    'research.discuss': 'Discuss collaboration',

    // Publications Section
    'publications.title': 'An academic presentation with a journal-inspired visual cadence',
    'publications.subtitle': 'Structured for trust: strong typography, restrained interface controls, and enough polish to feel publication-ready on first glance.',
    'publications.all': 'All outputs',
    'publications.diagnostics': 'Diagnostics',
    'publications.clinical': 'Clinical studies',
    'publications.implementation': 'Implementation',
    'publications.abstract': 'View abstract',

    // Clinical Section
    'clinical.title': 'A patient-facing institutional layer that feels precise, calm, and trustworthy',
    'clinical.subtitle': 'The clinical section softens the editorial tone slightly while preserving authority, helping patients and partners understand the care journey immediately.',
    'clinical.journey': 'Patient journey',
    'clinical.journey_1': 'Referral and intake',
    'clinical.journey_2': 'Diagnostic confirmation',
    'clinical.journey_3': 'Treatment and follow-up',
    'clinical.journey_4': 'Coordinated long-term monitoring',
    'clinical.consultation': 'Specialized consultation units',
    'clinical.consultation_detail': 'Structured intake, referral, consultation, and long-term follow-up for tropical and parasitic diseases.',
    'clinical.laboratory': 'Advanced laboratory and specimen services',
    'clinical.laboratory_detail': 'Screening, confirmatory workflows, molecular analysis, and monitored reporting across research and care settings.',
    'clinical.research_participation': 'Clinical research participation',
    'clinical.research_participation_detail': 'Transparent, ethics-led enrolment and participant support across observational studies and interventional trials.',
    'clinical.note_1': 'Designed for clarity for patients, families, and referring institutions.',
    'clinical.note_2': 'Supports both routine diagnostics and protocol-driven research activity.',
    'clinical.note_3': 'Built with accessible communication and participant dignity in mind.',

    // Education Section
    'education.title': 'Programs designed to strengthen the next generation of regional expertise',
    'education.subtitle': 'CRMTN is presented not only as a producer of knowledge but as a disciplined platform for teaching, mentorship, and institutional capacity building.',
    'education.fellowship': 'Field Epidemiology Fellowship',
    'education.fellowship_format': '12-month cohort',
    'education.fellowship_detail': 'Immersive training in surveillance design, outbreak analysis, and evidence translation for health systems.',
    'education.laboratory': 'Laboratory Methods Academy',
    'education.laboratory_format': 'Modular curriculum',
    'education.laboratory_detail': 'Hands-on instruction in microscopy, molecular workflows, biosafety, and quality assurance.',
    'education.leadership': 'Implementation Leadership Series',
    'education.leadership_format': 'Executive format',
    'education.leadership_detail': 'Short-format strategic programs for ministries, NGOs, and institutional partners coordinating NTD action.',

    // Community Section
    'community.title': 'Human impact presented with restraint, seriousness, and institutional clarity',
    'community.subtitle': 'The section avoids charity tropes and focuses instead on real partnership, durable trust, and co-created prevention and outreach strategies.',
    'community.campaigns': 'Campaigns built with communities, not just for them',
    'community.campaigns_detail': 'Health awareness materials, prevention messaging, and case-identification pathways co-designed with local leaders.',
    'community.campaigns_stat': '64 districts engaged',
    'community.mobile': 'Mobile screening and referral circuits',
    'community.mobile_detail': 'Field teams extend diagnostic access and guided referral pathways into remote and underserved areas.',
    'community.mobile_stat': '118 deployment days annually',
    'community.feedback': 'Participant-informed research feedback loops',
    'community.feedback_detail': 'Communities shape dissemination, consent design, and engagement strategy to sustain trust and clarity.',
    'community.feedback_stat': '91% longitudinal retention',

    // News Section
    'news.eyebrow': 'News and events',
    'news.title': 'Editorial rhythm for institutional announcements, convenings, and major milestones',
    'news.subtitle': 'The design shifts into a magazine-like tempo while staying disciplined, readable, and clearly institutional.',
    'news.read': 'Read update',

    // Media Section
    'media.title': 'A refined archive for visuals, briefings, and institutional documentation',
    'media.subtitle': 'Ready to host authentic photography and verified footage while already delivering a polished, publication-grade presentation.',

    // Contact Section
    'contact.title': 'Built for ministries, institutions, funders, clinicians, and research collaborators',
    'contact.subtitle': 'The closing section is intentionally calm and precise: direct pathways, a professional inquiry form, and a deployment-ready campus placeholder.',
    'contact.partnerships': 'Institutional partnerships',
    'contact.partnerships_email': 'partnerships@crmtn.org',
    'contact.clinical': 'Clinical services coordination',
    'contact.clinical_email': 'clinical@crmtn.org',
    'contact.education': 'Education and media inquiries',
    'contact.education_email': 'engagement@crmtn.org',
    'contact.name': 'Name',
    'contact.name_placeholder': 'Institutional contact name',
    'contact.organization': 'Organization',
    'contact.organization_placeholder': 'Agency, ministry, hospital, or partner',
    'contact.email': 'Email',
    'contact.email_placeholder': 'name@organization.org',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Research, partnership, training, clinical services',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Tell us about your inquiry, collaboration, or service need.',
    'contact.send': 'Send inquiry',
    'contact.campus': 'Campus overview',
    'contact.campus_detail': 'Saint-Louis research and clinical coordination campus',
    'contact.campus_body': 'Prepared for deployment with map embed, GIS layer, or location-specific institutional photography.',

    // Footer
    'footer.about': 'Evidence-led research, clinical excellence, and public health action for neglected tropical diseases.',
    'footer.research': 'Research',
    'footer.clinical': 'Clinical services',
    'footer.education': 'Education',
    'footer.impact': 'Community impact',

    // Common
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.viewAll': 'View all',
    'common.eyebrow': 'Centre de Recherche sur les Maladies Tropicales Negligees',
    'common.crmtn': 'CRMTN',
    'common.credibility': 'Institutional credibility',
    'common.credibility_detail': 'Research, care, training, and outreach aligned in one authoritative platform.',
    'common.patient_centered': 'Patient-centered science',
    'common.patient_centered_detail': 'Evidence framed around outcomes, dignity, and long-term system improvement.',
    'common.current_focus': 'Current focus',
    'common.focus': 'From pathogen intelligence to patient pathways',
    'common.focus_detail': 'The interface moves from scientific authority to operational trust, creating a seamless path for collaborators, clinicians, and public health partners.',
    'common.clinical_science': 'Clinical science',
    'common.clinical_science_detail': 'Evidence generated through rigorous, ethics-led pathways and multidisciplinary teams.',
    'common.regional_leadership': 'Regional leadership',
    'common.regional_leadership_detail': 'Programs shaped for real-world deployment across endemic settings and partner networks.',
    'common.community_impact': 'Community impact',
    'common.community_impact_detail': 'Research translated into services, awareness, outreach, and durable systems improvement.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
