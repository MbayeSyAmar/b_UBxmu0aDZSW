'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

type SupportedLanguage = 'fr' | 'en'

interface ChatbotProps {
  language?: SupportedLanguage
}

interface QuickCategory {
  id: string
  label: string
  question: string
}

const FAQ_DATA = {
  fr: [
    {
      keywords: ['mission', 'objectif', 'but'],
      answer: 'La mission du CRMTN est de générer des connaissances exploitables sur les maladies tropicales négligées, afin de renforcer les systèmes de santé et de protéger les populations vulnérables.'
    },
    {
      keywords: ['contact', 'email', 'téléphone'],
      answer: 'Vous pouvez nous contacter via: partnerships@crmtn.org (Partenariats), clinical@crmtn.org (Services cliniques), engagement@crmtn.org (Éducation et médias).'
    },
    {
      keywords: ['localisation', 'adresse', 'où', 'location'],
      answer: 'Le CRMTN est basé à Saint-Louis, Sénégal (Route de Ngallèle BP 234).'
    },
    {
      keywords: ['recherche', 'domaines', 'étude'],
      answer: 'Nos domaines de recherche incluent: Vector ecology, Diagnostics rapides, Therapeutic evaluation, Maternal health focus, One Health systems, et Implementation science.'
    },
    {
      keywords: ['formation', 'programme', 'cours', 'éducation'],
      answer: 'Nous proposons 3 programmes principaux: Field Epidemiology Fellowship (12 mois), Laboratory Methods Academy (modulaire), et Implementation Leadership Series (format exécutif).'
    },
    {
      keywords: ['services', 'clinique', 'patient', 'soin'],
      answer: 'Nos services cliniques incluent: consultations spécialisées, laboratoire avancé, et participation à la recherche clinique avec un accompagnement éthique complet.'
    },
    {
      keywords: ['publications', 'article', 'recherche scientifique'],
      answer: 'Le CRMTN a publié plus de 184 articles scientifiques dans des revues internationales spécialisées en médecine tropicale et santé publique.'
    },
    {
      keywords: ['partenariat', 'collaboration', 'partenaire'],
      answer: 'Nous collaborons avec des institutions gouvernementales, ONG, universités et bailleurs de fonds au niveau national et international pour renforcer la lutte contre les MTN.'
    },
    {
      keywords: ['équipe', 'personnel', 'chercheurs'],
      answer: 'Le CRMTN compte 41 chercheurs et cliniciens multidisciplinaires en épidémiologie, parasitologie, immunologie et soins cliniques.'
    },
    {
      keywords: ['impact', 'personnes', 'bénéficiaires'],
      answer: 'Le CRMTN a touchéplus de 620 000 personnes à travers le dépistage, les diagnostics, le soutien thérapeutique et les initiatives de sensibilisation.'
    }
  ],
  en: [
    {
      keywords: ['mission', 'objective', 'goal'],
      answer: 'CRMTN\'s mission is to generate actionable knowledge on neglected tropical diseases to strengthen health systems and protect vulnerable populations.'
    },
    {
      keywords: ['contact', 'email', 'phone'],
      answer: 'You can reach us at: partnerships@crmtn.org (Partnerships), clinical@crmtn.org (Clinical services), engagement@crmtn.org (Education and media).'
    },
    {
      keywords: ['location', 'address', 'where'],
      answer: 'CRMTN is based in Saint-Louis, Senegal (Route de Ngallèle BP 234).'
    },
    {
      keywords: ['research', 'domains', 'study'],
      answer: 'Our research areas include: Vector ecology, Rapid diagnostics, Therapeutic evaluation, Maternal health focus, One Health systems, and Implementation science.'
    },
    {
      keywords: ['training', 'program', 'course', 'education'],
      answer: 'We offer 3 main programs: Field Epidemiology Fellowship (12 months), Laboratory Methods Academy (modular), and Implementation Leadership Series (executive format).'
    },
    {
      keywords: ['services', 'clinic', 'patient', 'care'],
      answer: 'Our clinical services include: specialized consultations, advanced laboratory, and clinical research participation with comprehensive ethical support.'
    },
    {
      keywords: ['publication', 'article', 'scientific research'],
      answer: 'CRMTN has published over 184 scientific articles in international journals specializing in tropical medicine and public health.'
    },
    {
      keywords: ['partnership', 'collaboration', 'partner'],
      answer: 'We collaborate with governmental institutions, NGOs, universities and donors nationally and internationally to strengthen NTD control efforts.'
    },
    {
      keywords: ['team', 'staff', 'researchers'],
      answer: 'CRMTN has 41 multidisciplinary researchers and clinicians in epidemiology, parasitology, immunology and clinical care.'
    },
    {
      keywords: ['impact', 'people', 'beneficiaries'],
      answer: 'CRMTN has reached over 620,000 people through screening, diagnostics, therapeutic support and awareness initiatives.'
    }
  ]
}

export default function Chatbot({ language: forcedLanguage }: ChatbotProps) {
  const { language } = useLanguage()
  const activeLanguage: SupportedLanguage = forcedLanguage ?? language
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text:
        activeLanguage === 'fr'
          ? 'Bonjour, je suis votre assistant CRMTN. Posez-moi une question precise.'
          : 'Hello, I am your CRMTN assistant. Ask me a specific question.',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    setMessages([
      {
        id: '1',
        text:
          activeLanguage === 'fr'
            ? 'Bonjour, je suis votre assistant CRMTN. Posez-moi une question precise.'
            : 'Hello, I am your CRMTN assistant. Ask me a specific question.',
        sender: 'bot',
        timestamp: new Date()
      }
    ])
  }, [activeLanguage])

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()

  const findAnswer = (userMessage: string): string => {
    const faqData = FAQ_DATA[activeLanguage]
    const normalizedMessage = normalizeText(userMessage)

    const exactIntents =
      activeLanguage === 'fr'
        ? [
            {
              test: /^(bonjour|salut|hello|bonsoir)$/,
              answer: 'Bonjour. Je suis un tres joli chatbot CRMTN et je peux repondre aux questions sur la mission, les contacts, la recherche, les services et les formations.'
            },
            {
              test: /^(qui es tu|tu es qui|que peux tu faire)$/,
              answer: 'Je suis l assistant CRMTN place en bas de page. Je reponds rapidement aux questions precises sur le centre.'
            }
          ]
        : [
            {
              test: /^(hello|hi|hey|good evening)$/,
              answer: 'Hello. I am a stylish CRMTN chatbot and I can answer specific questions about mission, contact, research, services, and training.'
            },
            {
              test: /^(who are you|what can you do)$/,
              answer: 'I am the CRMTN assistant at the bottom of the page. I answer specific center-related questions quickly.'
            }
          ]

    for (const intent of exactIntents) {
      if (intent.test.test(normalizedMessage)) {
        return intent.answer
      }
    }

    for (const faq of faqData) {
      if (faq.keywords.some(keyword => normalizedMessage.includes(normalizeText(keyword)))) {
        return faq.answer
      }
    }

    return activeLanguage === 'fr'
      ? 'Je n ai pas trouve une reponse precise. Essayez une question sur la mission, les contacts, la localisation, la recherche, les services ou les formations. Vous pouvez aussi ecrire a partnerships@crmtn.org.'
      : 'I could not find a precise answer. Try asking about mission, contacts, location, research, services, or training. You can also write to partnerships@crmtn.org.'
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 500)

    setInputValue('')
  }

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findAnswer(question),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 400)

    setInputValue('')
  }

  const quickCategories: QuickCategory[] =
    activeLanguage === 'fr'
      ? [
          { id: 'mission', label: 'Mission', question: 'Quelle est votre mission?' },
          { id: 'contact', label: 'Contact', question: 'Comment vous contacter?' },
          { id: 'research', label: 'Recherche', question: 'Quels sont vos domaines de recherche?' },
          { id: 'services', label: 'Services', question: 'Quels services cliniques proposez-vous?' },
          { id: 'training', label: 'Formation', question: 'Quels programmes de formation proposez-vous?' },
        ]
      : [
          { id: 'mission', label: 'Mission', question: 'What is your mission?' },
          { id: 'contact', label: 'Contact', question: 'How can I contact you?' },
          { id: 'research', label: 'Research', question: 'What are your research areas?' },
          { id: 'services', label: 'Services', question: 'What clinical services do you provide?' },
          { id: 'training', label: 'Training', question: 'What training programs do you offer?' },
        ]

  const suggestedQuestions =
    activeLanguage === 'fr'
      ? ['Quelle est votre mission?', 'Ou etes-vous bases?', 'Comment vous contacter?', 'Quels services cliniques proposez-vous?']
      : ['What is your mission?', 'Where are you based?', 'How can I contact you?', 'What clinical services do you provide?']

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 rounded-full shadow-lg px-5 py-4 z-40 transition-colors flex items-center gap-2 border border-white/40 backdrop-blur-xl"
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, rgba(10,37,64,0.92), rgba(22,68,106,0.9))'
            : 'linear-gradient(135deg, rgba(95,196,217,0.95), rgba(26,108,136,0.92))',
          color: 'white',
        }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        <span className="text-sm font-semibold hidden sm:inline">
          {activeLanguage === 'fr' ? 'Assistant' : 'Assistant'}
        </span>
        {!isOpen && (
          <motion.span
            className="absolute -top-1 -right-1"
            initial={{ opacity: 0.6, scale: 0.8 }}
            animate={{ opacity: [0.45, 0.95, 0.45], scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <Sparkles size={14} />
          </motion.span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.88, rotateX: -8, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 30, scale: 0.92, rotateX: -6, filter: 'blur(6px)' }}
            transition={{ type: 'spring', stiffness: 190, damping: 20, mass: 0.7 }}
            className="fixed bottom-24 right-6 w-[390px] max-w-[calc(100vw-20px)] rounded-3xl shadow-2xl z-40 flex flex-col border border-white/40 backdrop-blur-2xl overflow-hidden"
            style={{ height: '520px' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(95,196,217,0.35),transparent_42%),radial-gradient(circle_at_80%_100%,rgba(10,37,64,0.22),transparent_40%)] pointer-events-none" />

            {/* Header */}
            <div className="relative bg-gradient-to-r from-[#0a2540]/90 via-[#113a5f]/85 to-[#5fc4d9]/75 text-white p-4">
              <h3 className="font-semibold text-lg tracking-wide">CRMTN Assistant</h3>
              <p className="text-sm opacity-90">
                {activeLanguage === 'fr' ? 'Posez vos questions precises' : 'Ask your specific questions'}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {quickCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleQuickQuestion(category.question)}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/35 transition-colors border border-white/35"
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 bg-white/50 space-y-4 relative">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-[#0a2540] text-white rounded-br-none shadow-lg shadow-[#0a2540]/20'
                        : 'bg-white/85 text-gray-800 border border-white/80 rounded-bl-none backdrop-blur-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions - Show when empty or only greeting */}
            {messages.length <= 1 && (
              <div className="px-4 py-3 border-t border-white/60 bg-white/40 backdrop-blur-md">
                <p className="text-xs text-gray-700 mb-2 font-medium">
                  {activeLanguage === 'fr' ? 'Questions suggerees:' : 'Suggested questions:'}
                </p>
                <div className="space-y-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickQuestion(q)}
                      className="w-full text-left text-xs px-3 py-2 rounded-xl bg-white/70 hover:bg-[#5fc4d9] hover:text-white transition-colors border border-white/80"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t border-white/70 p-4 bg-white/60 rounded-b-3xl flex gap-2 backdrop-blur-md">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={activeLanguage === 'fr' ? 'Votre question...' : 'Your question...'}
                className="flex-1 px-4 py-2 rounded-xl border border-white/80 bg-white/85 focus:outline-none focus:border-[#5fc4d9] text-sm"
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5fc4d9] text-white p-2 rounded-xl hover:bg-[#0a2540] transition-colors"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
