'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FileText, Users, Microscope, Heart } from 'lucide-react'

const stats = [
  {
    icon: FileText,
    value: 250,
    suffix: '+',
    label: 'Publications Scientifiques',
    labelEn: 'Scientific Publications',
  },
  {
    icon: Users,
    value: 45,
    suffix: '',
    label: 'Chercheurs & Cliniciens',
    labelEn: 'Researchers & Clinicians',
  },
  {
    icon: Microscope,
    value: 18,
    suffix: '',
    label: 'Projets de Recherche Actifs',
    labelEn: 'Active Research Projects',
  },
  {
    icon: Heart,
    value: 50000,
    suffix: '+',
    label: 'Patients Touchés',
    labelEn: 'Patients Impacted',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des décennies de recherche dédiée à la lutte contre les maladies tropicales négligées
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-xl bg-white border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-2xl">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-sm font-medium text-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
