import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe2 } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/site';
import logo from '../images/logo.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img className="w-18 h-12 object-contain" src={logo} alt="Logo" />
          <span className="flex flex-col leading-none">
            <span
              className={`font-display text-lg font-semibold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              &nbsp;
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 ${
                scrolled ? 'text-brand-600' : 'text-brand-200'
              }`}
            >
               Trading PLC
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? scrolled
                      ? 'text-brand-700'
                      : 'text-white'
                    : scrolled
                      ? 'text-ink-600 hover:text-ink-900'
                      : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-600/10 ring-1 ring-brand-600/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-3">
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
            scrolled ? 'text-ink-800 hover:bg-ink-100' : 'text-white hover:bg-white/10'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-ink-100 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn-primary mt-2">
                Request a Quote
              </Link>
              <p className="px-4 pt-3 text-xs text-ink-400">{COMPANY.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
