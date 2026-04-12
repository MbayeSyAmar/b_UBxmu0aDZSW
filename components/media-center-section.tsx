'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Newspaper, Calendar, ArrowRight, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const news = [
  {
    category: 'Actualités',
    title: 'Lancement d\'un nouveau programme de recherche sur la bilharziose',
    date: '15 Mars 2026',
    excerpt: 'Le CRMTN annonce un partenariat international pour développer de nouvelles thérapies.',
  },
  {
    category: 'Événements',
    title: 'Conférence Internationale sur les MTN - Saint-Louis 2026',
    date: '8 Mars 2026',
    excerpt: 'Plus de 200 chercheurs attendus pour partager les dernières avancées scientifiques.',
  },
  {
    category: 'Publications',
    title: 'Nouvelle étude publiée dans The Lancet',
    date: '1 Mars 2026',
    excerpt: 'Nos chercheurs publient des résultats prometteurs sur un traitement innovant.',
  },
]

export function MediaCenterSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Centre de Médias</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Actualités & Événements
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Restez informé des dernières nouvelles, événements et réalisations du CRMTN.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-primary/30" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>

                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                  Lire la suite
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <Button size="lg" variant="outline">
            <Newspaper className="mr-2 w-5 h-5" />
            Voir Toutes les Actualités
          </Button>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-primary mb-8">
            Galerie Photo & Vidéo
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <ImageIcon className="w-8 h-8 text-primary/30" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
