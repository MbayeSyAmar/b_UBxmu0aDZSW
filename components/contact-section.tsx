'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    info: 'crmtn7@gmail.com',
    link: 'mailto:crmtn7@gmail.com',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    info: '+221 33 XXX XX XX',
    link: 'tel:+221XXXXXXXX',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    info: 'Route de Ngallèle BP 234, Saint-Louis, Sénégal',
    link: '#',
  },
]

export function ContactSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Contactez-Nous</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nous Sommes à Votre Écoute
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Vous avez une question, une demande de partenariat ou souhaitez en savoir plus sur nos activités?
            N'hésitez pas à nous contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-secondary/30 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Envoyez-nous un Message
            </h3>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Prénom
                  </label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Sujet
                </label>
                <Input id="subject" placeholder="Objet de votre message" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <Button size="lg" className="w-full group">
                Envoyer le Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Informations de Contact
              </h3>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.info}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border/50"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/30 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Carte Interactive</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
