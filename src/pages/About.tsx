import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  BadgeCheck,
  Globe2,
  Sprout,
  Users,
  TrendingUp,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { IMAGES, COMPANY, STATS, MARKETS } from '@/data/site';

const MILESTONES = [
  { year: '2020', title: 'Founded', description: 'Melak Birhan Trading PLC established in Addis Ababa with a focus on agricultural exports and local Tradig.' },
  { year: '2021', title: 'Largest Local Supplier', description: 'Becomes the largest supplier of non GMO soybean, desi chickpea and nuts across the country' },
  { year: '2023', title: 'Organic Certification', description: 'Achieved EU Organic and USDA NOP certification for our soybean supply chain.' },
  { year: '2024', title: 'Import Division', description: 'Launched our import division, bringing industrial machinery to Ethiopia' },
  { year: '2025', title: 'Export Division', description: 'Launched our export division, supplying organic Ethiopian agricaltural products to the global markets' },
  { year: '2026', title: 'Global Expansion', description: 'Expanded export markets to Asia, Europe, and North America — now serving 10+ countries.' },
];

const TEAM_VALUES = [
  { icon: Target, title: 'Our Mission', text: 'To make Ethiopian agricultural products Availiable to global markets while delivering world-class machinery and products to the industries that need them.' },
  { icon: Eye, title: 'Our Vision', text: 'To be the most trusted trading partner between Africa and the world — known for quality, integrity, and sustainable sourcing.' },
  { icon: Heart, title: 'Our Promise', text: 'Every contract honored, every shipment inspected, every relationship valued. We build partnerships that last decades, not seasons.' },
];

const PILLARS = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Transparency in every transaction, from farm-gate pricing to final delivery.' },
  { icon: BadgeCheck, title: 'Quality', text: 'Pre-shipment inspection, lab testing, and third-party certification on every export.' },
  { icon: Globe2, title: 'Global Reach', text: 'A logistics and market network spanning six continents and 10+ countries.' },
  { icon: Sprout, title: 'Sustainability', text: 'Direct trade with cooperatives, supporting regenerative agriculture and fair pricing.' },
  { icon: Users, title: 'Partnerships', text: 'Long-term relationships with buyers, suppliers, and logistics partners worldwide.' },
  { icon: TrendingUp, title: 'Growth', text: 'Continuous expansion of product lines, markets, and service capabilities.' },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.cargoPort} alt="Cargo port" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 to-ink-950/50" />
        </div>
        <div className="container-px relative z-10 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-brand-300"
          >
            <span className="h-px w-6 bg-current" />
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            A decade of building bridges in global trade.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-ink-200"
          >
            Founded in {COMPANY.founded} in Addis Ababa, {COMPANY.name} has grown from a single-container
            exporter into a diversified global trading house.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title={<>Rooted in Ethiopia, <span className="text-brand-600">reaching the world.</span></>}
                description="What began as a family venture exporting pulses to neighboring markets has grown into a multi-product, multi-market trading company. We've stayed true to our roots — direct relationships with farmers, fair pricing, and an unwavering commitment to quality."
              />
              <p className="mt-6 text-base leading-relaxed text-ink-500">
                Today, Ruban Trading PLC operates across two divisions: an export division shipping
                organic soybean, non-GMO soybean meal, pulses, and oilseeds to 10+ countries, and an
                import division supplying industrial machinery, agricultural equipment, and specialized
                products to businesses across East Africa.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {STATS.slice(0, 4).map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-semibold text-brand-600">
                      {s.value}<span className="text-brand-400">{s.suffix}</span>
                    </div>
                    <div className="mt-1 text-sm text-ink-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img src={IMAGES.heroHarvest} alt="Harvest" className="aspect-[3/4] w-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-8 overflow-hidden rounded-2xl shadow-lg"
              >
                <img src={IMAGES.machinery} alt="Machinery" className="aspect-[3/4] w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / PROMISE */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-3">
            {TEAM_VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-surface p-8 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Journey"
            title={<>Milestones along <span className="text-brand-600">the way.</span></>}
          />
          <div className="mt-16 space-y-0">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex gap-6 pb-12 last:pb-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="hidden w-1/2 md:block" />
                <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-ink-200 md:block">
                  <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-600 shadow-md" />
                </div>
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="card-surface p-6 hover:shadow-md">
                    <span className="font-display text-2xl font-semibold text-brand-600">{m.year}</span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-ink-950 py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            invert
            eyebrow="What Drives Us"
            title={<>Six pillars of <span className="text-brand-300">everything we do.</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="rounded-3xl bg-brand-50 p-10 lg:p-16">
            <SectionHeading
              align="center"
              eyebrow="Global Reach"
              title={<>Serving buyers across <span className="text-brand-600">six continents.</span></>}
            />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {MARKETS.map((m, i) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm"
                >
                  {m}
                </motion.span>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/contact" className="btn-primary">
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
