'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 800)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  const handleSkip = () => {
    setIsVisible(false)
    setTimeout(onComplete, 300)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
        >
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors z-10"
          >
            Passer l&apos;intro
          </button>

          {/* Corridor perspective effect */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20" />

            {/* Animated corridor lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1] }}
              className="absolute inset-0"
            >
              {/* Perspective lines */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0.5, scaleY: 0.5, opacity: 0 }}
                  animate={{
                    scaleX: [0.5, 1.2],
                    scaleY: [0.5, 1.5],
                    opacity: [0, 0.1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: `${60 + i * 15}%`,
                    height: `${40 + i * 10}%`,
                    border: '1px solid rgba(10, 37, 64, 0.08)',
                    borderRadius: '8px',
                  }}
                />
              ))}
            </motion.div>

            {/* Moving silhouettes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0, scale: 0.8 }}
                  animate={{
                    x: [100, 300],
                    opacity: [0, 0.15, 0.15, 0],
                    scale: [0.8, 1, 1.1],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${45 + i * 5}%`,
                  }}
                >
                  <div
                    className="rounded-full blur-sm"
                    style={{
                      width: `${40 + i * 20}px`,
                      height: `${80 + i * 30}px`,
                      background: 'rgba(10, 37, 64, 0.1)',
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Light effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.5, 2] }}
              transition={{ duration: 2.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-100/40 to-cyan-100/40 blur-3xl"
            />
          </div>

          {/* Center logo/text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
            transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
            className="relative z-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
              CRMTN
            </h1>
            <p className="text-sm md:text-base text-muted-foreground tracking-wide">
              Centre de Recherche sur les Maladies Tropicales Négligées
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
