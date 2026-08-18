import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Ship,
  Plane,
  Factory,
  Tractor,
  Package,
  ShieldCheck,
  BadgeCheck,
  Globe2,
  Sprout,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import {
  IMAGES,
  STATS,
  EXPORT_PRODUCTS,
  IMPORT_CATEGORIES,
  VALUES,
  SUPPLY_CHAIN,
  MARKETS,
  COMPANY,
} from '@/data/site';

const iconMap: Record<string, typeof Factory> = {
  Factory,
  Tractor,
  Package,
  ShieldCheck,
  BadgeCheck,
  Globe2,
  Sprout,
};

function AnimatedStat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
        {value}
        <span className="text-brand-300">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-ink-300">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroSoybean}
            alt="Soybean harvest"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-brand-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/30" />
        </div>

        <div className="container-px relative z-10 pt-28">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Global Import & Export · Est. {COMPANY.founded}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              From Ethiopian Soil
              <span className="block text-brand-300">to World Markets.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200"
            >
              Ruban Trading PLC is a global trading house — exporting certified-organic soybean,
              non-GMO soybean, pulses, and oilseeds, while importing the machinery and products
              that move industries forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/export" className="btn-primary">
                Explore Our Exports
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/import" className="btn-ghost">
                Import Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-300"
            >
              {MARKETS.map((m) => (
                <span key={m} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {m}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative -mt-px bg-brand-900 py-16">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <AnimatedStat key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO / WHAT WE DO */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="What We Do"
                title={<>A two-way bridge between <span className="text-brand-600">origin</span> and <span className="text-brand-600">demand</span>.</>}
                description="We source, certify, and ship agricultural commodities to buyers across six continents — and we bring world-class industrial machinery, manufacturing equipment, and specialized products into the markets we serve."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
                  <Ship className="h-4 w-4" /> Export
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-4 py-2 text-sm font-medium text-gold-700">
                  <Plane className="h-4 w-4" /> Import
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-ink-100 px-4 py-2 text-sm font-medium text-ink-700">
                  <Globe2 className="h-4 w-4" /> Global Trade
                </span>
              </div>
              <div className="mt-8">
                <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Learn about our story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="card-surface overflow-hidden hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={IMAGES.soybeanClose} alt="Soybeans" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-900">Export</h3>
                  <p className="mt-1 text-sm text-ink-500">Organic soybean meal, non-GMO soybean, pulses & oilseeds.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="card-surface mt-8 overflow-hidden hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={IMAGES.machineryPipes} alt="oil factory machineries" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-900">Import</h3>
                  <p className="mt-1 text-sm text-ink-500">Machinery, equipment & specialized products.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORT CATEGORIES */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Import Division"
            title={<>World-class machinery, <span className="text-brand-600">delivered to your door.</span></>}
            description="From industrial production lines to manufacturing  equipment and specialized consumables, we import the tools that power growth."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {IMPORT_CATEGORIES.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group card-surface overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow-lg backdrop-blur">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-ink-900">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{cat.description}</p>
                    <ul className="mt-4 space-y-2">
                      {cat.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-ink-600">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link to="/import" className="btn-primary">
              View Import Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPORT PRODUCTS */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Export Division"
              title={<>Ethiopia's finest, <span className="text-brand-600">trusted worldwide.</span></>}
              description="Our export portfolio is built on direct farmer relationships, rigorous quality control, and full traceability from field to container."
            />
            <Link to="/export" className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-700">
              All products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPORT_PRODUCTS.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group card-surface overflow-hidden hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                    {product.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-700 backdrop-blur">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{product.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-500">{product.description}</p>
                  <Link to={`/export#${product.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY CHAIN */}
      <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={IMAGES.cargoShip} alt="Cargo ship" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-950" />
        </div>
        <div className="container-px relative z-10">
          <SectionHeading
            align="center"
            invert
            eyebrow="Our Process"
            title={<>A supply chain built on <span className="text-brand-300">trust and traceability.</span></>}
            description="Every shipment follows a rigorous five-step process — from origin sourcing to final delivery."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {SUPPLY_CHAIN.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand-400/40 hover:bg-white/10"
              >
                <span className="font-display text-3xl font-semibold text-brand-400/60">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{s.description}</p>
                {i < SUPPLY_CHAIN.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-brand-400/40 to-transparent lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="Why Ruban"
            title={<>Principles that guide <span className="text-brand-600">every shipment.</span></>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = iconMap[v.icon];
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-surface p-7 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-brand-700 px-8 py-16 text-center sm:px-16 lg:py-20"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Ready to trade with confidence?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
                Whether you're sourcing agricultural commodities or importing machinery,
                our team is ready to build a solution tailored to your needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
