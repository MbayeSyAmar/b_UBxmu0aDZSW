import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  institution: {
    title: 'Institution',
    links: [
      { name: 'À Propos', href: '#about' },
      { name: 'Équipe', href: '#about' },
      { name: 'Partenaires', href: '#about' },
      { name: 'Rapports Annuels', href: '#media' },
    ],
  },
  research: {
    title: 'Recherche',
    links: [
      { name: 'Projets de Recherche', href: '#research' },
      { name: 'Publications', href: '#publications' },
      { name: 'Opportunités', href: '#research' },
      { name: 'Éthique', href: '#research' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { name: 'Clinique', href: '#clinical' },
      { name: 'Formation', href: '#education' },
      { name: 'Communauté', href: '#community' },
      { name: 'Ressources', href: '#media' },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">C</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl">CRMTN</div>
                <div className="text-sm text-white/80">Saint-Louis, Sénégal</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Centre de Recherche sur les Maladies Tropicales Négligées.
              Institution de recherche médicale dédiée à la lutte contre les MTN
              et au développement de solutions innovantes.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Newsletter
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Restez informé de nos dernières recherches et actualités.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                S&apos;inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} CRMTN. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
