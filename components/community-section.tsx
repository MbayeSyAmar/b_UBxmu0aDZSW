'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Users, Megaphone, HandHeart } from 'lucide-react'

const initiatives = [
  {
    icon: Megaphone,
    title: 'Campagnes de Sensibilisation',
    description: 'Programmes éducatifs dans les communautés locales pour prévenir les MTN.',
    impact: '25 villages touchés',
  },
  {
    icon: HandHeart,
    title: 'Dépistage Communautaire',
    description: 'Initiatives mobiles de dépistage gratuit dans les zones rurales.',
    impact: '10,000+ personnes dépistées',
  },
  {
    icon: Users,
    title: 'Formation des Agents de Santé',
    description: 'Renforcement des capacités des travailleurs de santé communautaires.',
    impact: '200 agents formés',
  },
  {
    icon: Heart,
    title: 'Soutien aux Patients',
    description: 'Groupes de soutien et accompagnement psychosocial des patients.',
    impact: '500+ bénéficiaires',
  },
]

const testimonials = [
  {
    quote: 'Grâce au CRMTN, j\'ai pu recevoir un traitement qui a changé ma vie. Leur équipe est exceptionnelle.',
    author: 'Aminata D.',
    role: 'Patiente',
  },
  {
    quote: 'La formation que j\'ai reçue m\'a permis de mieux servir ma communauté et de sauver des vies.',
    author: 'Moussa S.',
    role: 'Agent de Santé Communautaire',
  },
]

export function CommunitySection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Engagement Communautaire</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Personne n'est Laissé pour Compte
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Notre engagement va au-delà de la recherche. Nous travaillons directement avec les communautés
            pour prévenir, dépister et traiter les maladies tropicales négligées.
          </p>
        </motion.div>

        {/* Initiatives */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-secondary/30 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-2xl">
                <initiative.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {initiative.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {initiative.description}
              </p>
              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full">
                <span className="text-xs font-medium text-accent">{initiative.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-primary mb-12">
            Témoignages
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border/50"
              >
                <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">
                  &ldquo;
                </div>
                <div className="relative z-10 pt-8">
                  <p className="text-foreground/90 mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
