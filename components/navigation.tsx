'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Accueil', href: '#hero', nameEn: 'Home' },
  { name: 'À Propos', href: '#about', nameEn: 'About' },
  { name: 'Recherche', href: '#research', nameEn: 'Research' },
  { name: 'Publications', href: '#publications', nameEn: 'Publications' },
  { name: 'Services Cliniques', href: '#clinical', nameEn: 'Clinical Services' },
  { name: 'Contact', href: '#contact', nameEn: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState<'fr' | 'en'>('fr')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="hidden md:block">
              <div className="font-serif font-bold text-lg text-primary">CRMTN</div>
              <div className="text-xs text-muted-foreground">Saint-Louis, Sénégal</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {language === 'fr' ? item.name : item.nameEn}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="hidden md:flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
            </Button>

            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
            >
              {language === 'fr' ? 'Nous Soutenir' : 'Support Us'}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {language === 'fr' ? item.name : item.nameEn}
                  </a>
                ))}
                <div className="px-4 pt-4 border-t space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    className="w-full justify-start"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {language === 'fr' ? 'English' : 'Français'}
                  </Button>
                  <Button variant="default" size="sm" className="w-full">
                    {language === 'fr' ? 'Nous Soutenir' : 'Support Us'}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
