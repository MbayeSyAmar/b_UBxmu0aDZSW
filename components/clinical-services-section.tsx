'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Hospital, TestTube, Scan, HeartPulse, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Hospital,
    title: 'Consultations Spécialisées',
    description: 'Prise en charge par des experts en maladies tropicales négligées.',
  },
  {
    icon: TestTube,
    title: 'Laboratoire de Diagnostic',
    description: 'Analyses de pointe pour un diagnostic précis et rapide.',
  },
  {
    icon: Scan,
    title: 'Imagerie Médicale',
    description: 'Équipements modernes pour des examens d\'imagerie complets.',
  },
  {
    icon: HeartPulse,
    title: 'Soins Post-Traitement',
    description: 'Suivi et accompagnement des patients après traitement.',
  },
]

const clinicInfo = [
  {
    icon: Clock,
    title: 'Horaires',
    info: 'Lun-Ven: 8h-17h | Sam: 8h-12h',
  },
  {
    icon: MapPin,
    title: 'Localisation',
    info: 'Route de Ngallèle BP 234, Saint-Louis',
  },
]

export function ClinicalServicesSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="clinical" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Services Cliniques</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Des Soins de Qualité pour Tous
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Notre clinique offre des services de diagnostic et de traitement de pointe pour les patients
            atteints de maladies tropicales négligées.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-secondary/30 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Clinic Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Informations Pratiques
            </h3>

            <div className="space-y-6 mb-8">
              {clinicInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.title}</div>
                    <div className="text-white/80 text-sm">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                Prendre Rendez-vous
              </Button>
              <Button size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Appeler la Clinique
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/70 text-center">
              Urgences 24/7 disponibles
            </p>
          </motion.div>
        </div>

        {/* Patient Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl p-8 md:p-10"
        >
          <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
            Parcours Patient
          </h3>
          
          <div className="grid sm:grid-cols-4 gap-6">
            {['Accueil & Triage', 'Consultation', 'Diagnostic', 'Traitement & Suivi'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
