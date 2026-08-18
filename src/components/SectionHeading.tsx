import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  invert?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
}: Props) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`section-eyebrow ${invert ? 'text-brand-300' : ''}`}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className={`mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          invert ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            invert ? 'text-ink-200' : 'text-ink-500'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
