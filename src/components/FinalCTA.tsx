import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { sendContactInquiry } from '../services/api';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.6em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Internship / Collaboration');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; error?: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatusMessage({ text: 'Please fill out all fields.', error: true });
      return;
    }
    setSubmitting(true);
    setStatusMessage(null);
    try {
      const res = await sendContactInquiry({ name, email, subject, message });
      setStatusMessage({ text: res.message || 'Message delivered to Python backend!' });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setStatusMessage({
        text: err?.message || 'Could not connect to Python API. Message not sent.',
        error: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const ctas = [
    { label: "Let's Build", href: `mailto:${profile.email}?subject=${encodeURIComponent("Let's build something")}`, primary: true, cursor: 'play' },
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-6 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.85] text-bone"
        style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-2 text-xs font-semibold tracking-[0.4em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className={`flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-bold tracking-[0.12em] transition ${
                  c.primary ? 'bg-crimson text-white shadow-[0_0_50px_rgba(229,19,43,0.5)] hover:bg-crimson-2' : 'border border-white/25 text-bone hover:border-bone hover:bg-white/10'
                }`}
              >
                {c.primary && <span>▶</span>}
                {c.label.toUpperCase()}
                {!c.primary && <span className="text-mist">↗</span>}
              </a>
            </Magnetic>
          </motion.div>
        ))}

        <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } } }}>
          <Magnetic>
            <button
              type="button"
              onClick={() => setFormOpen((o) => !o)}
              className="flex min-h-12 items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 text-sm font-bold tracking-[0.12em] text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              DIRECT MESSAGE (PYTHON API) {formOpen ? '▲' : '▼'}
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Interactive Contact Form backed by Python backend */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative mt-8 w-full max-w-xl text-left"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-white/15 bg-ink-2/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Live Backend Integration</p>
                  <h4 className="mt-1 font-display text-2xl text-bone">Send Direct Message</h4>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400">
                  POST /api/contact
                </span>
              </div>

              {statusMessage && (
                <div
                  className={`mb-4 rounded-lg p-3 text-xs font-medium ${
                    statusMessage.error
                      ? 'border border-crimson/50 bg-crimson/20 text-rose-200'
                      : 'border border-emerald-500/50 bg-emerald-500/20 text-emerald-200'
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-mist">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Sharma"
                    className="w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-mist">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-xs font-semibold text-mist">Inquiry Topic</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-bone focus:border-crimson focus:outline-none"
                >
                  <option value="Internship / Full-time Role">Internship / Full-time Role</option>
                  <option value="Collaborative Hackathon Project">Collaborative Hackathon Project</option>
                  <option value="AI / ML Consultation & Prototyping">AI / ML Consultation & Prototyping</option>
                  <option value="General Discussion">General Discussion</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-xs font-semibold text-mist">Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Krishna about your opportunity, project idea, or timeline..."
                  className="w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm text-bone placeholder-smoke focus:border-crimson focus:outline-none"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-[11px] text-smoke">Saved securely in Python SQLite database.</p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 rounded-lg bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:bg-crimson-2 disabled:opacity-50"
                >
                  {submitting ? 'Transmitting...' : 'Send Message ↗'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mt-16 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. A personal, streaming-inspired portfolio — not affiliated with any streaming service.
        </p>
      </footer>
    </section>
  );
}
