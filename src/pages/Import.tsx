import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Factory,
  Tractor,
  Package,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Settings,
  Truck,
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { IMAGES, IMPORT_CATEGORIES, COMPANY } from '@/data/site';

const iconMap: Record<string, typeof Factory> = { Factory, Tractor, Package };

const PROCESS = [
  { icon: ClipboardCheck, title: 'Needs Assessment', text: 'We work with you to understand your operational requirements, specifications, and budget.' },
  { icon: ShieldCheck, title: 'Sourcing & Vetting', text: 'We identify trusted manufacturers worldwide and vet them for quality, reliability, and compliance.' },
  { icon: Settings, title: 'Procurement', text: 'We handle negotiations, ordering, and quality assurance at the point of manufacture.' },
  { icon: Truck, title: 'Logistics & Customs', text: 'We manage freight, insurance, customs clearance, and last-mile delivery to your facility.' },
  { icon: Wrench, title: 'Installation Support', text: 'For machinery, we coordinate installation, training, and after-sales support.' },
];

const CAPABILITIES = [
  'Full container load (FCL) and LCL import management',
  'Customs clearance and duty optimization',
  'Manufacturer vetting and quality inspection',
  'Spare parts sourcing and supply chain management',
  'Installation, training, and after-sales coordination',
  'Flexible payment terms and trade finance support',
];

export default function Import() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.machinery} alt="Industrial machinery" className="h-full w-full object-cover" />
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
            Import Division
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            World-class machinery and products, imported with expertise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-ink-200"
          >
            From industrial production lines to agricultural equipment and specialized consumables —
            we handle sourcing, logistics, and customs so you can focus on operations. We also have ready to buy imported goods you can buy from us.
          </motion.p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="What We Import"
            title={<>We Import those, <span className="text-brand-600">but Not Limited.</span></>}
            description="Our import division is organized around the core needs of the industries we serve."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
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
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-brand-600 shadow-lg backdrop-blur">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-semibold text-ink-900">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{cat.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {cat.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm text-ink-700">
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink-50 py-24 lg:py-32">
        <div className="container-px">
          <SectionHeading
            align="center"
            eyebrow="How It Works"
            title={<>A seamless import process, <span className="text-brand-600">start to finish.</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-surface p-6 text-center hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mt-4 block font-display text-sm font-semibold text-brand-400">Step {i + 1}</span>
                  <h3 className="mt-1 font-display text-base font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Capabilities"
                title={<>More than just a supplier — <span className="text-brand-600">your import partner.</span></>}
                description="We don't just move boxes. We manage the entire import lifecycle, from identifying the right manufacturer to ensuring your equipment is installed and running."
              />
              <ul className="mt-8 space-y-4">
                {CAPABILITIES.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-base text-ink-700">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img src={IMAGES.machineryTanks} alt="Industrial tanks" className="aspect-[4/3] w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-brand-700 px-8 py-14 text-center sm:px-16"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Need to import machinery or products?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
                Tell us what you need. We'll find the right manufacturer, handle the logistics, and deliver to your door.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
