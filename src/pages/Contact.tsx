import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe2,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { COMPANY, EXPORT_PRODUCTS } from '@/data/site';

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiry_type: 'export' | 'import';
  product: string;
  message: string;
};

const EMPTY: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  inquiry_type: 'export',
  product: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  // Function to send emails directly from the browser using EmailJS
  const sendEmails = async (formData: FormState) => {
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'support@rubantrading.com';

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS is not configured. Please check your environment variables.');
    }

    // Import EmailJS dynamically
    const emailjs = await import('@emailjs/browser');
    
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Send to customer - using the correct EmailJS format
    const customerTemplateParams = {
      to_email: formData.email,
      from_name: COMPANY.name || 'Ruban Trading',
      to_name: formData.name,
      subject: `Thank you for your ${formData.inquiry_type} inquiry - Ruban Trading`,
      reply_to: 'support@rubantrading.com',
      name: formData.name,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      inquiry_type: formData.inquiry_type,
      product: formData.product || 'Not specified',
      message: formData.message,
      year: new Date().getFullYear(),
    };

    // Send to admin
    const adminTemplateParams = {
      to_email: ADMIN_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      subject: `New ${formData.inquiry_type} inquiry from ${formData.name}`,
      reply_to: formData.email,
      name: formData.name,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      email: formData.email,
      inquiry_type: formData.inquiry_type,
      product: formData.product || 'Not specified',
      message: formData.message,
      year: new Date().getFullYear(),
    };

    // Send both emails
    try {
      // Send customer confirmation
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        customerTemplateParams
      );

      // Send admin notification
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        adminTemplateParams
      );

      return { success: true };
    } catch (error) {
      console.error('EmailJS error:', error);
      throw new Error('Failed to send email notifications');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    // Validate required fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    // 1. Save to Supabase
    if (!isSupabaseConfigured || !supabase) {
      setStatus('error');
      setErrorMsg('The database is not configured. Make sure your .env file has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart the dev server.');
      return;
    }

    const { error: supabaseError } = await supabase.from('contact_inquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      phone: form.phone.trim() || null,
      inquiry_type: form.inquiry_type,
      product: form.product.trim() || null,
      message: form.message.trim(),
    });

    if (supabaseError) {
      setStatus('error');
      setErrorMsg('Something went wrong saving your message. Please try again or email us directly.');
      return;
    }

    // 2. Send emails (both to customer and admin)
    try {
      await sendEmails(form);
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Even if email fails, the form data is saved in Supabase
      setStatus('error');
      setErrorMsg('Message saved but email notification failed. We will still respond to your inquiry.');
      return;
    }

    setStatus('success');
    setForm(EMPTY);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: COMPANY.address },
    { icon: Phone, label: 'Call Us', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
    { icon: Mail, label: 'Email Us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: Clock, label: 'Office Hours', value: 'Mon–Fri, 8:30 AM – 5:30 PM EAT' },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/20581299/pexels-photo-20581299.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cargo port"
            className="h-full w-full object-cover"
          />
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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's build something together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-xl text-lg text-ink-200"
          >
            Whether you're sourcing agricultural commodities or importing machinery,
            our team will respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24 lg:py-32">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Info column */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Get in Touch"
                title={<>We're here to <span className="text-brand-600">help.</span></>}
                description="Reach out by phone, email, or the form — whatever's easiest for you. We respond to every inquiry personally."
              />
              <div className="mt-10 space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-ink-400">{info.label}</div>
                        <div className="mt-0.5 text-sm font-medium text-ink-800">{info.value}</div>
                      </div>
                    </div>
                  );
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      {info.href ? (
                        <a href={info.href} className="block transition-opacity hover:opacity-80">{content}</a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 rounded-2xl bg-brand-900 p-6"
              >
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-brand-300" />
                  <h3 className="font-display text-base font-semibold text-white">Global Trade Desk</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  For time-sensitive shipments and urgent inquiries, our trade desk monitors global
                  markets and logistics channels in real time.
                </p>
              </motion.div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="card-surface p-8 sm:p-10"
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center py-16 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">Message Sent</h3>
                      <p className="mt-2 max-w-sm text-sm text-ink-500">
                        Thank you for reaching out. Our team will get back to you within one business day.
                        A confirmation email has been sent to you.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-8 text-sm font-semibold text-brand-700 hover:text-brand-800"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <h3 className="font-display text-xl font-semibold text-ink-900">Request a Quote</h3>

                      {/* Inquiry type toggle */}
                      <div>
                        <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-500">
                          Inquiry Type
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {(['export', 'import'] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => update('inquiry_type', type)}
                              className={`rounded-xl border px-4 py-3 text-sm font-semibold capitalize transition-all ${
                                form.inquiry_type === type
                                  ? 'border-brand-600 bg-brand-50 text-brand-700'
                                  : 'border-ink-200 bg-white text-ink-500 hover:border-ink-300'
                              }`}
                            >
                              {type === 'export' ? 'Export Inquiry' : 'Import Inquiry'}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Full Name" required>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => update('name', e.target.value)}
                            placeholder="Your Full Name"
                            className="input-base"
                          />
                        </Field>
                        <Field label="Email" required>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => update('email', e.target.value)}
                            placeholder="Email Address"
                            className="input-base"
                          />
                        </Field>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Company">
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => update('company', e.target.value)}
                            placeholder="Company name"
                            className="input-base"
                          />
                        </Field>
                        <Field label="Phone">
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update('phone', e.target.value)}
                            placeholder="+1 234 567 890"
                            className="input-base"
                          />
                        </Field>
                      </div>

                      <Field label={form.inquiry_type === 'export' ? 'Product of Interest' : 'Equipment / Product Needed'}>
                        {form.inquiry_type === 'export' ? (
                          <select
                            value={form.product}
                            onChange={(e) => update('product', e.target.value)}
                            className="input-base"
                          >
                            <option value="">Select a product</option>
                            {EXPORT_PRODUCTS.map((p) => (
                              <option key={p.slug} value={p.name}>{p.name}</option>
                            ))}
                            <option value="Other">Other</option>
                          </select>
                        ) : (
                          <input
                            type="text"
                            value={form.product}
                            onChange={(e) => update('product', e.target.value)}
                            placeholder="e.g. Food processing line, tractor, spare parts..."
                            className="input-base"
                          />
                        )}
                      </Field>

                      <Field label="Message" required>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="Tell us about your requirements, volume, timeline, destination port..."
                          className="input-base resize-none"
                        />
                      </Field>

                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {errorMsg}
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / CTA STRIP */}
      <section className="pb-24 lg:pb-32">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl bg-ink-950 px-8 py-12 sm:px-16"
          >
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">Visit our office</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {COMPANY.address}<br />
                  {COMPANY.poBox}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href={`tel:${COMPANY.phone}`} className="btn-ghost">Call Us</a>
                <a href={`mailto:${COMPANY.email}`} className="btn-primary">Email Us</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #d5d9df;
          background: #f6f7f8;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #1f242c;
          transition: all 0.2s;
        }
        .input-base:focus {
          outline: none;
          border-color: #3d7d63;
          background: white;
          box-shadow: 0 0 0 3px rgba(61, 125, 99, 0.12);
        }
        .input-base::placeholder {
          color: #b0b7c2;
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-500">
        {label}{required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
    </div>
  );
}