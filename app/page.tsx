'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  AudioWaveform,
  BadgeCheck,
  BookMarked,
  BookOpenText,
  Building2,
  CalendarDays,
  ChevronRight,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  Microscope,
  Play,
  ScanSearch,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Users,
  Video,
} from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

type NavItem = { label: string; href: string }
type Metric = { value: number; suffix: string; label: string; detail: string; icon: LucideIcon }
type ResearchArea = { title: string; summary: string; tag: string }
type Publication = { year: string; focus: string; title: string; journal: string }
type Service = { title: string; summary: string; note: string; icon: LucideIcon }
type Program = { title: string; format: string; summary: string; icon: LucideIcon }
type CommunityItem = { title: string; summary: string; stat: string }
type NewsItem = { date: string; category: string; title: string; summary: string }
type MediaItem = { title: string; type: string; summary: string; icon: LucideIcon }

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Clinical', href: '#clinical' },
  { label: 'Training', href: '#education' },
  { label: 'Community', href: '#community' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const metrics: Metric[] = [
  {
    value: 184,
    suffix: '+',
    label: 'Peer-reviewed publications',
    detail: 'Published across tropical medicine, implementation science, and translational diagnostics.',
    icon: BookMarked,
  },
  {
    value: 41,
    suffix: '',
    label: 'Researchers and clinicians',
    detail: 'Multidisciplinary teams spanning epidemiology, parasitology, immunology, and patient care.',
    icon: Microscope,
  },
  {
    value: 27,
    suffix: '',
    label: 'Active research programs',
    detail: 'Longitudinal studies, trial pathways, and surveillance platforms across endemic environments.',
    icon: Globe2,
  },
  {
    value: 620,
    suffix: 'k',
    label: 'People impacted',
    detail: 'Through screening, diagnostics, treatment support, outreach, and policy-informed field action.',
    icon: Users,
  },
]

const researchAreas: ResearchArea[] = [
  {
    title: 'Vector ecology and transmission intelligence',
    summary: 'High-resolution field observation, environmental modeling, and entomological analysis to anticipate transmission shifts.',
    tag: 'Surveillance',
  },
  {
    title: 'Rapid diagnostics and biomarker discovery',
    summary: 'Laboratory-to-clinic pipelines designed for reliability in low-resource deployment settings.',
    tag: 'Diagnostics',
  },
  {
    title: 'Therapeutic evaluation and clinical trials',
    summary: 'Ethics-grounded protocols translating evidence into safer and more effective care pathways.',
    tag: 'Clinical research',
  },
  {
    title: 'Maternal, pediatric, and vulnerable populations',
    summary: 'Focused studies addressing the populations most affected by delayed diagnosis and limited access.',
    tag: 'Equity',
  },
  {
    title: 'One Health and environmental systems',
    summary: 'Integrated analysis across ecosystems, vectors, reservoirs, and human risk patterns.',
    tag: 'Systems science',
  },
  {
    title: 'Implementation and policy translation',
    summary: 'Operational research that helps ministries and partners convert data into durable action.',
    tag: 'Impact',
  },
]

const publications: Publication[] = [
  {
    year: '2026',
    focus: 'Diagnostics',
    title: 'Operational deployment of integrated multiplex diagnostics for schistosomiasis and filarial disease in decentralized care settings',
    journal: 'Journal of Tropical Clinical Systems',
  },
  {
    year: '2026',
    focus: 'Field surveillance',
    title: 'Sentinel river-basin surveillance models for anticipating vector resurgence under climate variability',
    journal: 'Global Health Surveillance Review',
  },
  {
    year: '2025',
    focus: 'Implementation science',
    title: 'Community co-design as a determinant of sustained participation in neglected tropical disease prevention programs',
    journal: 'Implementation Science in Health',
  },
  {
    year: '2025',
    focus: 'Clinical pathways',
    title: 'Integrated referral and follow-up design for chronic sequelae in endemic disease care networks',
    journal: 'International Review of Tropical Medicine',
  },
]

const services: Service[] = [
  {
    title: 'Specialized consultation units',
    summary: 'Structured intake, referral, consultation, and long-term follow-up for tropical and parasitic diseases.',
    note: 'Designed for clarity for patients, families, and referring institutions.',
    icon: Stethoscope,
  },
  {
    title: 'Advanced laboratory and specimen services',
    summary: 'Screening, confirmatory workflows, molecular analysis, and monitored reporting across research and care settings.',
    note: 'Supports both routine diagnostics and protocol-driven research activity.',
    icon: FlaskConical,
  },
  {
    title: 'Clinical research participation',
    summary: 'Transparent, ethics-led enrolment and participant support across observational studies and interventional trials.',
    note: 'Built with accessible communication and participant dignity in mind.',
    icon: Syringe,
  },
]

const programs: Program[] = [
  {
    title: 'Field Epidemiology Fellowship',
    format: '12-month cohort',
    summary: 'Immersive training in surveillance design, outbreak analysis, and evidence translation for health systems.',
    icon: GraduationCap,
  },
  {
    title: 'Laboratory Methods Academy',
    format: 'Modular curriculum',
    summary: 'Hands-on instruction in microscopy, molecular workflows, biosafety, and quality assurance.',
    icon: BookOpenText,
  },
  {
    title: 'Implementation Leadership Series',
    format: 'Executive format',
    summary: 'Short-format strategic programs for ministries, NGOs, and institutional partners coordinating NTD action.',
    icon: Building2,
  },
]

const communityItems: CommunityItem[] = [
  {
    title: 'Campaigns built with communities, not just for them',
    summary: 'Health awareness materials, prevention messaging, and case-identification pathways co-designed with local leaders.',
    stat: '64 districts engaged',
  },
  {
    title: 'Mobile screening and referral circuits',
    summary: 'Field teams extend diagnostic access and guided referral pathways into remote and underserved areas.',
    stat: '118 deployment days annually',
  },
  {
    title: 'Participant-informed research feedback loops',
    summary: 'Communities shape dissemination, consent design, and engagement strategy to sustain trust and clarity.',
    stat: '91% longitudinal retention',
  },
]

const newsItems: NewsItem[] = [
  {
    date: 'April 2026',
    category: 'Regional partnership',
    title: 'CRMTN convenes a new West African network for riverine vector intelligence and coordinated surveillance',
    summary: 'A multi-institution platform links field sites, laboratories, and public agencies around early warning and shared epidemiological analysis.',
  },
  {
    date: 'March 2026',
    category: 'Clinical platform',
    title: 'New translational diagnostics corridor shortens sample-to-insight turnaround for endemic disease pathways',
    summary: 'The center expands laboratory capacity and strengthens direct coordination between research teams and clinical services.',
  },
  {
    date: 'February 2026',
    category: 'Training',
    title: 'The 2026 education cycle opens with advanced laboratory leadership and outbreak preparedness instruction',
    summary: 'New training tracks support regional resilience through technical mentoring, simulation, and institutional collaboration.',
  },
]

const mediaItems: MediaItem[] = [
  {
    title: 'Laboratory environments',
    type: 'Photo archive',
    summary: 'Controlled imaging surfaces prepared for validated microscopy, diagnostics, and quality workflows.',
    icon: ScanSearch,
  },
  {
    title: 'Field deployment briefings',
    type: 'Video library',
    summary: 'Short-form visual documentation for screening logistics, patient pathways, and outreach operations.',
    icon: Video,
  },
  {
    title: 'Institutional events and symposia',
    type: 'Editorial archive',
    summary: 'A polished record of convenings, visiting delegations, and scientific dissemination moments.',
    icon: CalendarDays,
  },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let animationFrame = 0
    const duration = 1400
    const startedAt = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setDisplayValue(Math.round(progress * value))
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick)
      }
    }

    animationFrame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [isInView, value])

  return (
    <span ref={ref} className="metric-value">
      {displayValue}
      {suffix}
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string
  title: string
  body: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default function Page() {
  const { language, setLanguage, t } = useLanguage()
  const [introVisible, setIntroVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroVisible(false), 3200)
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearTimeout(introTimer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="crmtn-site">
      <motion.div
        initial={false}
        animate={{ opacity: introVisible ? 1 : 0, pointerEvents: introVisible ? 'auto' : 'none' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="intro-overlay"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="intro-video"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/dem.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.35)' }} />
        <button className="intro-skip" onClick={() => setIntroVisible(false)}>
          {language === 'fr' ? 'Passer intro' : 'Skip intro'}
        </button>
        <div className="intro-caption">
          <span className="eyebrow">{t('common.eyebrow')}</span>
          <h1>CRMTN</h1>
          <p>{language === 'fr'
            ? 'Entrer dans une institution de recherche où les soins cliniques, la science de terrain et l\'action de santé publique avancent ensemble.'
            : 'Entering a research institution where clinical care, field science, and public health action move in one direction.'
          }</p>
        </div>
      </motion.div>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="site-header__inner">
          <a href="#top" className="brandmark" aria-label="CRMTN home">
            <Image
              src="/logo (3).png"
              alt="CRMTN Logo"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
            />
            <span className="brandmark__text">
              <strong>CRMTN</strong>
              <small>{t('nav.about') === 'À Propos' ? 'Centre de recherche médicale' : 'Medical research center'}</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#about">{t('nav.about')}</a>
            <a href="#research">{t('nav.research')}</a>
            <a href="#publications">{t('nav.publications')}</a>
            <a href="#clinical">{t('nav.clinical')}</a>
            <a href="#education">{t('nav.training')}</a>
            <a href="#community">{t('nav.community')}</a>
            <a href="#news">{t('nav.news')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </nav>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '8px 12px',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <a href="#contact" className="header-link">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-shell">
          <div className="hero-backdrop hero-backdrop--grid" />
          <div className="hero-backdrop hero-backdrop--aura" />
          <div className="hero-backdrop hero-backdrop--mist" />

          <div className="hero-layout">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="hero-copy"
            >
              <span className="eyebrow">{t('hero.tagline')}</span>
              <h1>{t('hero.title')}</h1>
              <p className="hero-lead">
                {t('hero.subtitle')}
              </p>

              <div className="hero-proof">
                <article>
                  <BadgeCheck size={18} />
                  <div>
                    <strong>{t('common.credibility')}</strong>
                    <span>{t('common.credibility_detail')}</span>
                  </div>
                </article>
                <article>
                  <HeartPulse size={18} />
                  <div>
                    <strong>{t('common.patient_centered')}</strong>
                    <span>{t('common.patient_centered_detail')}</span>
                  </div>
                </article>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.28 }}
              className="hero-visual"
            >
              <div className="hero-panel hero-panel--corridor">
                <div className="hero-panel__header">
                  <span>{t('hero.outlook')}</span>
                  <span>{t('hero.location')}</span>
                </div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hero-corridor"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src="/dreamina-2026-04-11-2544-The camera slowly approaches the paintin....mp4" type="video/mp4" />
                </video>
                <div className="hero-panel__footer">
                  <article>
                    <span>{t('hero.research_platform')}</span>
                    <strong>{t('hero.research_detail')}</strong>
                  </article>
                  <article>
                    <span>{t('hero.global_relevance')}</span>
                    <strong>{t('hero.global_detail')}</strong>
                  </article>
                </div>
              </div>

              <div className="hero-panel hero-panel--brief">
                <span className="eyebrow">{t('common.current_focus')}</span>
                <h3>{t('common.focus')}</h3>
                <p>
                  {t('common.focus_detail')}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="hero-ribbon">
            <article>
              <span>{t('common.clinical_science')}</span>
              <p>{t('common.clinical_science_detail')}</p>
            </article>
            <article>
              <span>{t('common.regional_leadership')}</span>
              <p>{t('common.regional_leadership_detail')}</p>
            </article>
            <article>
              <span>{t('common.community_impact')}</span>
              <p>{t('common.community_impact_detail')}</p>
            </article>
          </div>
        </section>

        <section className="section metrics-section">
          <SectionHeading
            eyebrow={t('common.eyebrow')}
            title={t('metrics.title')}
            body={t('metrics.subtitle')}
          />
          <div className="metrics-grid">
            {[
              { key: 'publications', value: 184, icon: BookMarked },
              { key: 'researchers', value: 41, icon: Microscope },
              { key: 'programs', value: 27, icon: Globe2 },
              { key: 'impacted', value: 620, suffix: 'k', icon: Users },
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.article
                  key={metric.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                  className="metric-card"
                >
                  <div className="metric-card__icon">
                    <Icon size={20} />
                  </div>
                  <CountUp value={metric.value} suffix={metric.suffix || ''} />
                  <h3>{t(`metrics.${metric.key}`)}</h3>
                  <p>{t(`metrics.${metric.key}_detail`)}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-grid">
            <SectionHeading
              eyebrow={t('about.title')}
              title={t('about.subtitle')}
              body=""
            />

            <div className="about-composition">
              <div className="about-timeline">
                <article>
                  <span>{t('about.mission')}</span>
                  <h3>{t('about.mission_title')}</h3>
                  <p>{t('about.mission_detail')}</p>
                </article>
                <article>
                  <span>{t('about.vision')}</span>
                  <h3>{t('about.vision_title')}</h3>
                  <p>{t('about.vision_detail')}</p>
                </article>
                <article>
                  <span>{t('about.values')}</span>
                  <h3>{t('about.values_title')}</h3>
                  <p>{t('about.values_detail')}</p>
                </article>
              </div>

              <div className="about-editorial">
                <div className="about-editorial__image">
                  <Image
                    src="/Gemini_Generated_Image_qja0p0qja0p0qja0.png"
                    alt="CRMTN Research Laboratory - Scientists collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="about-editorial__card">
                  <span className="eyebrow">{t('about.progression')}</span>
                  <h3>{language === 'fr' ? 'La recherche dirige. Les voies cliniques suivent. Les communautés en bénéficient.' : 'Research leads. Clinical pathways follow. Communities benefit.'}</h3>
                  <p>
                    {t('about.progression_body')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <SectionHeading
            eyebrow={t('research.eyebrow')}
            title={t('research.title')}
            body={t('research.subtitle')}
          />

          <div className="research-grid">
            {[
              { key: 'vector', tag: 'Surveillance' },
              { key: 'diagnostics', tag: 'Diagnostics' },
              { key: 'therapeutic', tag: 'Clinical research' },
              { key: 'maternal', tag: 'Equity' },
              { key: 'onehealth', tag: 'Systems science' },
              { key: 'implementation', tag: 'Impact' },
            ].map((area, index) => (
              <motion.article
                key={area.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.42, delay: index * 0.05, ease: 'easeOut' }}
                className="research-card"
              >
                <span>{area.tag}</span>
                <h3>{t(`research.${area.key}`)}</h3>
                <p>{t(`research.${area.key}_detail`)}</p>
                <a href="#contact">
                  {t('research.discuss')}
                  <ChevronRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="publications" className="section publications-section">
          <div className="section-topline">
            <SectionHeading
              eyebrow={t('publications.eyebrow')}
              title={t('publications.title')}
              body={t('publications.subtitle')}
            />
            <div className="filter-pills" aria-label="Publication filters">
              <button className="filter-pills__item filter-pills__item--active">{t('publications.all')}</button>
              <button className="filter-pills__item">{t('publications.diagnostics')}</button>
              <button className="filter-pills__item">{t('publications.clinical')}</button>
              <button className="filter-pills__item">{t('publications.implementation')}</button>
            </div>
          </div>

          <div className="publication-list">
            {publications.map((publication) => (
              <article key={publication.title} className="publication-row">
                <div className="publication-year">{publication.year}</div>
                <div className="publication-main">
                  <span>{publication.focus}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.journal}</p>
                </div>
                <a href="#contact" className="publication-link">
                  {t('publications.abstract')}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="clinical" className="section clinical-section">
          <div className="clinical-layout">
            <SectionHeading
              eyebrow={t('clinical.title')}
              title={language === 'fr' ? 'Une couche institutionnelle orientée vers les patients' : 'A patient-facing institutional layer that feels precise, calm, and trustworthy'}
              body={t('clinical.subtitle')}
            />

            <div className="clinical-composition">
              <div className="patient-journey">
                <span className="eyebrow">{t('clinical.journey')}</span>
                <div className="patient-journey__steps">
                  <article><strong>1</strong><span>{t('clinical.journey_1')}</span></article>
                  <article><strong>2</strong><span>{t('clinical.journey_2')}</span></article>
                  <article><strong>3</strong><span>{t('clinical.journey_3')}</span></article>
                  <article><strong>4</strong><span>{t('clinical.journey_4')}</span></article>
                </div>
              </div>

              <div className="service-grid">
                {[
                  { icon: Stethoscope, key: 'consultation' },
                  { icon: FlaskConical, key: 'laboratory' },
                  { icon: Syringe, key: 'research_participation' },
                ].map((service) => {
                  const Icon = service.icon
                  const noteKey = `clinical.note_${['consultation', 'laboratory', 'research_participation'].indexOf(service.key) + 1}`
                  return (
                    <article key={service.key} className="service-card">
                      <Icon size={18} />
                      <h3>{t(`clinical.${service.key}`)}</h3>
                      <p>{t(`clinical.${service.key}_detail`)}</p>
                      <span>{t(noteKey)}</span>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <SectionHeading
            eyebrow={t('education.title')}
            title={language === 'fr' ? 'Programmes conçus pour renforcer' : 'Programs designed to strengthen'}
            body={t('education.subtitle')}
          />

          <div className="program-grid">
            {[
              { icon: GraduationCap, key: 'fellowship' },
              { icon: BookOpenText, key: 'laboratory' },
              { icon: Building2, key: 'leadership' },
            ].map((program) => {
              const Icon = program.icon

              return (
                <article key={program.key} className="program-card">
                  <div className="program-card__topline">
                    <Icon size={18} />
                    <span>{t(`education.${program.key}_format`)}</span>
                  </div>
                  <h3>{t(`education.${program.key}`)}</h3>
                  <p>{t(`education.${program.key}_detail`)}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="community" className="section community-section">
          <div className="community-layout">
            <SectionHeading
              eyebrow={t('community.title')}
              title={language === 'fr' ? 'Impact humain présenté avec retenue' : 'Human impact presented with restraint'}
              body={t('community.subtitle')}
            />

            <div className="community-grid">
              {[
                { key: 'campaigns' },
                { key: 'mobile' },
                { key: 'feedback' },
              ].map((item) => (
                <article key={item.key} className="community-card">
                  <Handshake size={18} />
                  <h3>{t(`community.${item.key}`)}</h3>
                  <p>{t(`community.${item.key}_detail`)}</p>
                  <strong>{t(`community.${item.key}_stat`)}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section news-section">
          <SectionHeading
            eyebrow={t('news.eyebrow')}
            title={t('news.title')}
            body={t('news.subtitle')}
          />

          <div className="news-grid">
            {newsItems.map((item) => (
              <article key={item.title} className="news-card">
                <div className="news-card__meta">
                  <span>{item.category}</span>
                  <time>{item.date}</time>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href="#contact">
                  {t('news.read')}
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="media" className="section media-section">
          <SectionHeading
            eyebrow={t('media.title')}
            title={language === 'fr' ? 'Une archive raffinée' : 'A refined archive'}
            body={t('media.subtitle')}
          />

          <div className="media-grid">
            {mediaItems.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="media-card">
                  <div className="media-card__visual">
                    <div className="media-card__surface" />
                    <Icon size={26} />
                  </div>
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-layout">
            <div className="contact-copy">
              <SectionHeading
                eyebrow={t('contact.title')}
                title={language === 'fr' ? 'Construit pour les ministères' : 'Built for ministries'}
                body={t('contact.subtitle')}
              />

              <div className="contact-details">
                <article>
                  <AudioWaveform size={18} />
                  <div>
                    <strong>{t('contact.partnerships')}</strong>
                    <span>{t('contact.partnerships_email')}</span>
                  </div>
                </article>
                <article>
                  <HeartPulse size={18} />
                  <div>
                    <strong>{t('contact.clinical')}</strong>
                    <span>{t('contact.clinical_email')}</span>
                  </div>
                </article>
                <article>
                  <Globe2 size={18} />
                  <div>
                    <strong>{t('contact.education')}</strong>
                    <span>{t('contact.education_email')}</span>
                  </div>
                </article>
              </div>
            </div>

            <div className="contact-panel">
              <form className="contact-form">
                <div className="contact-form__row">
                  <label>
                    {t('contact.name')}
                    <input type="text" placeholder={t('contact.name_placeholder')} />
                  </label>
                  <label>
                    {t('contact.organization')}
                    <input type="text" placeholder={t('contact.organization_placeholder')} />
                  </label>
                </div>

                <div className="contact-form__row">
                  <label>
                    {t('contact.email')}
                    <input type="email" placeholder={t('contact.email_placeholder')} />
                  </label>
                  <label>
                    {t('contact.subject')}
                    <input type="text" placeholder={t('contact.subject_placeholder')} />
                  </label>
                </div>

                <label>
                  {t('contact.message')}
                  <textarea rows={6} placeholder={t('contact.message_placeholder')} />
                </label>

                <button type="submit" className="button button--primary button--full">
                  {t('contact.send')}
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="campus-card">
                <span>{t('contact.campus')}</span>
                <strong>{t('contact.campus_detail')}</strong>
                <p>{t('contact.campus_body')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <strong>CRMTN</strong>
          <p>{t('footer.about')}</p>
        </div>
        <div className="site-footer__meta">
          <span>{t('footer.research')}</span>
          <span>{t('footer.clinical')}</span>
          <span>{t('footer.education')}</span>
          <span>{t('footer.impact')}</span>
        </div>
      </footer>
    </div>
  )
}
