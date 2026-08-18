import { Link } from 'react-router-dom';
import { Globe2, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, EXPORT_PRODUCTS } from '@/data/site';
import logo from '../images/logo.svg';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="container-px relative z-10 grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex flex-col leading-none items-center justify-center">
              <span className="font-display text-xl font-semibold text-white ">Ruban </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-300">
                Trading PLC 
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
            {COMPANY.tagline}. A global trading house connecting Ethiopian agricultural excellence with world markets, and bringing world-class machinery home.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Navigate</h4>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1 text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Export Products</h4>
          <ul className="mt-5 space-y-3">
            {EXPORT_PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/export#${p.slug}`}
                  className="group inline-flex items-center gap-1 text-sm text-ink-300 transition-colors hover:text-white"
                >
                  {p.name}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="text-ink-400">{COMPANY.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`tel:${COMPANY.phone}`} className="text-ink-300 transition-colors hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${COMPANY.email}`} className="text-ink-300 transition-colors hover:text-white">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Import & Export · Agricultural Commodities · Industrial Machinery</p>
        </div>
      </div>
    </footer>
  );
}
