'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Bug, Droplet, Stethoscope, Activity, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const researchAreas = [
  {
    icon: Bug,
    title: 'Parasitologie',
    description: 'Recherche sur les parasites responsables des maladies tropicales négligées.',
    projects: 12,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Droplet,
    title: 'Immunologie',
    description: 'Étude des réponses immunitaires et développement de vaccins.',
    projects: 8,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Stethoscope,
    title: 'Épidémiologie',
    description: 'Surveillance et analyse de la distribution des maladies.',
    projects: 15,
    color: 'from-teal-500 to-blue-500',
  },
  {
    icon: Activity,
    title: 'Essais Cliniques',
    description: 'Développement et évaluation de nouveaux traitements.',
    projects: 10,
    color: 'from-blue-600 to-cyan-600',
  },
]

export function ResearchSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="research" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Nos Domaines de Recherche</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Innovation & Excellence Scientifique
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Notre recherche multidisciplinaire vise à comprendre, prévenir et traiter les maladies
            tropicales négligées à travers des approches innovantes et collaboratives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 mb-4 bg-gradient-to-br ${area.color} rounded-xl`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">
                    {area.projects} projets actifs
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group">
            Voir Tous les Projets
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
