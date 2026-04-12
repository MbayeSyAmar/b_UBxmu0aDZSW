'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, Calendar, Users as UsersIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const publications = [
  {
    title: 'Novel Therapeutic Approaches for Schistosomiasis in West African Populations',
    authors: 'Dr. Fatou Diallo, Dr. Moussa Seck, et al.',
    journal: 'The Lancet Infectious Diseases',
    year: '2025',
    impact: 'High Impact',
    category: 'Parasitologie',
  },
  {
    title: 'Epidemiological Patterns of Lymphatic Filariasis in Rural Senegal',
    authors: 'Dr. Amadou Diop, Dr. Aissatou Ndiaye, et al.',
    journal: 'PLOS Neglected Tropical Diseases',
    year: '2025',
    impact: 'High Impact',
    category: 'Épidémiologie',
  },
  {
    title: 'Community-Based Interventions for Onchocerciasis Elimination',
    authors: 'Dr. Ibrahima Fall, Dr. Marième Sow, et al.',
    journal: 'American Journal of Tropical Medicine',
    year: '2024',
    impact: 'Medium Impact',
    category: 'Santé Publique',
  },
]

export function PublicationsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="publications" ref={containerRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Publications Scientifiques</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nos Contributions à la Science
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez nos recherches publiées dans les revues scientifiques de renommée mondiale,
            contribuant à l'avancement de la lutte contre les maladies tropicales négligées.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {pub.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {pub.impact}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  {pub.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <UsersIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{pub.authors}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4 flex-shrink-0" />
                    <span>{pub.journal}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{pub.year}</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="group/btn">
                  Lire la Publication
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline">
            Voir Toutes les Publications
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
