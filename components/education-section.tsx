'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const programs = [
  {
    icon: GraduationCap,
    title: 'Programmes de Master & Doctorat',
    description: 'Formation avancée en recherche sur les maladies tropicales négligées.',
    duration: '2-4 ans',
    spots: '15 places/an',
  },
  {
    icon: BookOpen,
    title: 'Ateliers & Séminaires',
    description: 'Sessions de formation continue pour professionnels de santé.',
    duration: '1-5 jours',
    spots: '30 places/session',
  },
  {
    icon: Users,
    title: 'Stages de Recherche',
    description: 'Opportunités pratiques pour étudiants en médecine et sciences.',
    duration: '3-6 mois',
    spots: '20 places/an',
  },
  {
    icon: Award,
    title: 'Certifications Professionnelles',
    description: 'Programmes certifiés en diagnostic et traitement des MTN.',
    duration: '6-12 mois',
    spots: '25 places/an',
  },
]

export function EducationSection() {
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
            <span className="text-sm font-medium text-primary">Éducation & Formation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Former la Prochaine Génération
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nos programmes de formation offrent des opportunités uniques pour développer
            l'expertise en recherche et traitement des maladies tropicales négligées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {program.spots}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Bourses & Opportunités Disponibles
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Nous offrons plusieurs bourses d'études pour étudiants africains et chercheurs
            débutants désireux de contribuer à la lutte contre les MTN.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Postuler Maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Télécharger le Catalogue
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
