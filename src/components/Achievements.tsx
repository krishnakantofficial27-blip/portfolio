import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { achievements, skillBadges, type SkillBadge } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const [selectedBadge, setSelectedBadge] = useState<SkillBadge | null>(null);

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                <div className="relative mt-auto flex flex-wrap items-center justify-center gap-3 pt-5">
                  {a.link && (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                    >
                      {a.linkLabel || 'View certificate ↗'}
                    </a>
                  )}
                  {a.webLink && (
                    <a
                      href={a.webLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="link"
                      className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-crimson-2 underline decoration-crimson-2/60 underline-offset-4 hover:decoration-crimson-2"
                    >
                      {a.webLinkLabel || 'Live Web Link ↗'}
                    </a>
                  )}
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Google Cloud Skill Badges Showcase */}
      <div className="mt-16">
        <div className="gutter mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-2">Verified Credentials</p>
            <h3 className="mt-1 font-sans text-lg font-semibold text-bone sm:text-2xl">
              Google Cloud Skill Badges <span className="text-mist">· {skillBadges.length} Credentials</span>
            </h3>
          </div>
          <p className="text-xs text-smoke">Official Google Cloud Skill Verifications</p>
        </div>

        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-4 overflow-x-auto py-5">
            {skillBadges.map((badge, i) => (
              <motion.div
                key={badge.id}
                onClick={() => setSelectedBadge(badge)}
                data-cursor="badge"
                className="group relative flex w-[280px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:ring-white/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.06, ease: EASE }}
              >
                {/* Badge Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden bg-white/95 p-3 flex items-center justify-center transition duration-500 group-hover:scale-[1.02]">
                  <img
                    src={badge.image}
                    alt={badge.title}
                    className="h-full w-full object-contain drop-shadow-sm"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-200">
                    Click to inspect ↗
                  </span>
                </div>

                {/* Badge Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                        {badge.category}
                      </span>
                      <span className="text-[10px] text-smoke font-mono">GCP</span>
                    </div>
                    <h4 className="mt-2 line-clamp-2 text-sm font-semibold leading-snug text-bone group-hover:text-white transition">
                      {badge.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-smoke">
                    <span>{badge.issuer}</span>
                    <span className="text-emerald-400 font-medium">Verified ✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>

      {/* Modal for detailed badge preview */}
      <AnimatePresence>
        {selectedBadge && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBadge(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-ink-2 p-6 ring-1 ring-white/20 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-mist">
                    Verified Skill Badge
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBadge(null)}
                  className="rounded-lg p-1.5 text-smoke hover:bg-white/10 hover:text-bone transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 flex flex-col items-center text-center">
                <div className="w-56 max-w-full overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/10">
                  <img
                    src={selectedBadge.image}
                    alt={selectedBadge.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <span className="mt-4 inline-block rounded-full bg-crimson-2/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-crimson-2">
                  {selectedBadge.category}
                </span>

                <h3 className="mt-2.5 font-sans text-lg font-bold text-bone">
                  {selectedBadge.title}
                </h3>

                <p className="mt-1 text-xs text-smoke font-mono">
                  {selectedBadge.issuer} · {selectedBadge.level}
                </p>

                <p className="mt-3.5 text-xs leading-relaxed text-bone/80 bg-white/5 p-3 rounded-lg border border-white/5">
                  {selectedBadge.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
