import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Globe2,
  Package,
  FileCheck,
  Ship,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { IMAGES, EXPORT_PRODUCTS, MARKETS, COMPANY } from '@/data/site';

const CERTIFICATIONS = [
  'EU Organic (EC 834/2007)',
  'Non-GMO Verified',
];

const ADVANTAGES = [
  { icon: Leaf, title: 'Certified Organic & Non-GMO', text: 'Full organic and non-GMO certification with identity-preserved supply chains and lab-verified documentation.' },
  { icon: Globe2, title: 'Direct from Origin', text: 'We source directly from farming cooperatives, ensuring traceability from field to container.' },
  { icon: FileCheck, title: 'Quality Guaranteed', text: 'Pre-shipment inspection, lab testing, and third-party certification on every shipment.' },
  { icon: Ship, title: 'Reliable Logistics', text: 'FCL container shipping with full documentation, insurance, and real-time tracking.' },
];

export default function Export() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.heroHarvest} alt="Harvest" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 to-ink-950/40" />
        </div>
        <div className="container-px relative z-10 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-brand-300"
          >
            <span className="h-px w-6 bg-current" />
            Export Division
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ethiopia's agricultural excellence, exported to the world.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-ink-200"
          >
            Organic soybean, non-GMO soybean meal, pulses, and oilseeds — sourced from farming
            cooperatives, certified to global standards, and shipped to 30+ countries.
          </motion.p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Our Products"
            title={<>Four core commodities, <span className="text-brand-600">infinite applications.</span></>}
            description="Each product in our portfolio is sourced, processed, and certified to meet the exacting standards of global buyers."
          />
          <div className="mt-16 space-y-12">
            {EXPORT_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.slug}
                id={product.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`grid scroll-mt-24 gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl [direction:ltr]">
                  <div className="relative aspect-[4/3]">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
                  </div>
                </div>
                <div className="[direction:ltr]">
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((t) => (
                      <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-ink-900">{product.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-500">{product.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="rounded-xl border border-ink-100 bg-ink-50 px-4 py-3">
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">{spec.label}</div>
                        <div className="mt-1 text-sm font-semibold text-ink-800">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Request a Quote
                    <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Source From Us"
            title={<>The Ruban advantage in <span className="text-brand-600">every shipment.</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-surface p-7 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{a.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="rounded-3xl bg-brand-900 px-8 py-16 sm:px-16">
            <SectionHeading
              align="center"
              invert
              eyebrow="Certifications & Standards"
              title={<>Quality you can <span className="text-brand-300">verify.</span></>}
              description="Our products meet the most demanding international standards, with third-party certification on every shipment."
            />
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {CERTIFICATIONS.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-300" />
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETS */}
      <section className="pb-24 lg:pb-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Global Markets"
            title={<>Trusted by buyers in <span className="text-brand-600">30+ countries.</span></>}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {MARKETS.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-ink-100 bg-white px-4 py-5 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <Package className="h-5 w-5 text-brand-500" />
                <span className="text-sm font-semibold text-ink-800">{m}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
