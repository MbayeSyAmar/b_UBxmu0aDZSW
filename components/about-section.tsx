'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Notre Mission',
    description:
      "S'assurer que personne n'est laissé pour compte face aux maladies tropicales négligées à travers la recherche innovante et les soins de qualité.",
  },
  {
    icon: Eye,
    title: 'Notre Vision',
    description:
      'Devenir un centre de référence mondial pour la recherche et le traitement des maladies tropicales négligées en Afrique de l\'Ouest.',
  },
  {
    icon: Award,
    title: 'Nos Valeurs',
    description:
      'Excellence scientifique, intégrité, collaboration, innovation et engagement envers les communautés vulnérables.',
  },
]

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={containerRef} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">À Propos du CRMTN</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 text-balance">
              Centre de Recherche sur les Maladies Tropicales Négligées
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Basé à Saint-Louis, Sénégal, le CRMTN est une institution de recherche médicale de pointe
                spécialisée dans la lutte contre les maladies tropicales négligées (MTN).
              </p>
              <p>
                Depuis notre création, nous nous engageons à développer des solutions innovantes pour les
                populations les plus vulnérables, en combinant recherche scientifique d'excellence, soins
                cliniques de qualité et engagement communautaire.
              </p>
              <p>
                Notre équipe multidisciplinaire de chercheurs, cliniciens et experts travaille en étroite
                collaboration avec des partenaires nationaux et internationaux pour faire avancer la lutte
                contre les MTN en Afrique de l'Ouest et au-delà.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground">Route de Ngallèle BP 234, Saint-Louis</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
