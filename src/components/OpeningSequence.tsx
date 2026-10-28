import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic, Particles } from './fx';

/**
 * Cinematic Opening Sequence:
 * 1. Dark screen with cinematic letterbox animation.
 * 2. KRISHNA title reveal.
 * 3. S SERIES / THE SERIES subtitle appears.
 * 4. Sunglasses portrait emerges with dramatic red lighting & glowing rings.
 * 5. Slow camera push-in creates depth.
 * 6. Subtle anamorphic light sweep passes behind the subject.
 * 7. Transition smoothly into the main portfolio.
 * 8. The homepage displays the normal portrait without sunglasses.
 */
const TIMELINE = [
  { at: 200, beat: 1 },  // Studio Card (A SRIVASTAVA ORIGINAL)
  { at: 1000, beat: 2 }, // KRISHNA title reveal
  { at: 1900, beat: 3 }, // S SERIES subtitle
  { at: 2800, beat: 4 }, // Sunglasses portrait emerges + red lighting + concentric rings + slow camera push
  { at: 3800, beat: 5 }, // Subtle anamorphic light sweep sweeps behind subject
  { at: 5200, beat: 6 }, // Role & tagline reveal (AI / ML ENGINEER · PYTHON · SOFTWARE DEVELOPER)
  { at: 6200, beat: 7 }, // Glowing Enter / Play button + letterbox ready to transition
];

export default function OpeningSequence({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 7 : 0);

  useEffect(() => {
    if (reduced) return;
    const timers = TIMELINE.map(({ at, beat }) => window.setTimeout(() => setBeat(beat), at));
    // Auto-transition into the portfolio after 9.2 seconds if user has not clicked
    const autoDone = window.setTimeout(onDone, 9200);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(autoDone);
    };
  }, [reduced, onDone]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onDone();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-black select-none"
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Cinematic opening sequence"
    >
      {/* ================= CINEMATIC LETTERBOX BARS ================= */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-[8vh] bg-black sm:h-[9vh]"
        initial={{ y: 0 }}
        animate={{ y: beat >= 7 ? '-100%' : 0 }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 h-[8vh] bg-black sm:h-[9vh]"
        initial={{ y: 0 }}
        animate={{ y: beat >= 7 ? '100%' : 0 }}
        transition={{ duration: 1.1, ease: EASE }}
      />

      {/* ================= PROJECTOR & VOLUMETRIC RED LIGHTING ================= */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(65% 55% at 50% 50%, rgba(229,19,43,0.28), transparent 72%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 2 ? [0, 0.9, 0.6, 1] : 0 }}
        transition={{ duration: 1.4 }}
      />

      {/* Atmospheric particles */}
      <Particles className="z-[1]" count={36} color="255,61,90" />

      {/* Studio card beat 1 */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 z-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold tracking-[0.55em] text-mist sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.55em', opacity: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ATMOSPHERIC BACKDROP & GLOWING RINGS ================= */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: beat >= 4 ? 1 : 0 }}
        transition={{ duration: 1.3, ease: EASE }}
      >
        {/* Concentric Glowing Red Circular Rings Behind Hero */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
          <div className="h-[520px] w-[520px] rounded-full border border-crimson-2/30 shadow-[0_0_90px_rgba(229,19,43,0.35),inset_0_0_60px_rgba(229,19,43,0.16)] sm:h-[620px] sm:w-[620px] lg:h-[700px] lg:w-[700px]" />
          <div className="absolute inset-[15%] rounded-full border border-crimson/25 shadow-[0_0_50px_rgba(229,19,43,0.25)]" />
          <div className="absolute inset-[28%] rounded-full bg-[radial-gradient(circle,rgba(229,19,43,0.40)_0%,rgba(160,15,40,0.12)_60%,transparent_75%)] blur-2xl" />
        </div>

        {/* Dramatic Crimson & Magenta Haze Behind Shoulders */}
        <div className="absolute right-[12%] top-[15%] h-[65vh] w-[55vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(180,15,45,0.12)_60%,transparent)] blur-3xl" />
        <div className="absolute left-[12%] top-[25%] h-[55vh] w-[45vw] rounded-full bg-[radial-gradient(closest-side,rgba(160,20,90,0.24),transparent)] blur-3xl" />

        {/* Restrained Blue Highlights at Lower Landscape */}
        <div className="absolute bottom-0 inset-x-0 h-[28%] bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(56,189,248,0.16)_0%,transparent_75%)] blur-xl" />
      </motion.div>

      {/* ================= CINEMATIC SUNGLASSES PORTRAIT STAGE ================= */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-10 mx-auto flex h-[72vh] max-w-[1080px] items-end justify-center overflow-hidden"
        initial={{ opacity: 0, filter: 'blur(16px) brightness(0.2)' }}
        animate={beat >= 4 ? { opacity: 1, filter: 'blur(0px) brightness(1)' } : {}}
        transition={{ duration: 1.4, ease: EASE }}
      >
        {/* Sunglasses portrait with slow camera push-in */}
        <motion.div
          className="relative flex h-full w-full items-end justify-center"
          initial={{ scale: 1.0 }}
          animate={{ scale: beat >= 4 ? 1.08 : 1.0 }}
          transition={{ duration: 3.4, ease: EASE }}
        >
          {/* Real Photograph Layer: Krishna Sunglasses */}
          <img
            src="/images/krishna-sunglasses.png"
            alt="Krishna Kant Srivastava - Cinematic Sunglasses Portrait"
            className="relative z-10 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_65px_rgba(229,19,43,0.45)] [mask-image:linear-gradient(to_bottom,black_68%,transparent_98%)]"
          />

          {/* Subtle anamorphic light sweep passing behind the subject */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-transparent via-crimson-2/25 to-transparent"
            initial={{ x: '-120%', opacity: 0 }}
            animate={beat >= 5 ? { x: '120%', opacity: [0, 0.85, 0] } : {}}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />

          {/* Soft background light streak behind shoulders */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[35%] inset-x-0 z-0 h-[2px] bg-gradient-to-r from-transparent via-crimson-2/60 to-transparent blur-[1px]"
          />
        </motion.div>
      </motion.div>

      {/* Vignette backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(75%_65%_at_50%_45%,transparent_35%,rgba(0,0,0,0.85)_100%)]"
      />

      {/* ================= TITLE REVEAL (KRISHNA · S SERIES) ================= */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        {/* Main Heading: KRISHNA */}
        <motion.h1
          className="font-display leading-[0.80] tracking-[0.02em] text-bone drop-shadow-[0_12px_45px_rgba(0,0,0,0.9)]"
          style={{ fontSize: 'clamp(4.6rem, 18vw, 14rem)' }}
          initial={{ opacity: 0, scale: 1.25, filter: 'blur(20px)', letterSpacing: '0.4em' }}
          animate={beat >= 2 ? {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            letterSpacing: '0.03em',
            y: beat >= 4 ? '-27vh' : 0
          } : {}}
          transition={{ duration: 1.3, ease: EASE }}
        >
          <span className="bg-gradient-to-b from-white via-[#f4f1ec] to-[#ff99a8] bg-clip-text text-transparent">
            {profile.firstName}
          </span>
        </motion.h1>

        {/* Subtitle: S SERIES */}
        <motion.p
          className="font-sans text-sm font-bold tracking-[0.65em] text-crimson-2 [text-shadow:0_2px_22px_rgba(229,19,43,0.7)] sm:text-base"
          initial={{ opacity: 0, letterSpacing: '1.2em' }}
          animate={beat >= 3 ? {
            opacity: 1,
            letterSpacing: '0.65em',
            y: beat >= 4 ? '-27vh' : 0
          } : {}}
          transition={{ duration: 1.1, ease: EASE }}
        >
          S SERIES · {profile.seriesTag}
        </motion.p>
      </div>

      {/* ================= ROLE & PLAY CTA BUTTON ================= */}
      <div className="absolute inset-x-0 bottom-[10vh] z-30 flex flex-col items-center gap-5 px-4 text-center">
        <motion.p
          className="font-sans text-[10px] font-bold uppercase tracking-[0.32em] text-bone/90 sm:text-xs sm:tracking-[0.42em]"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 6 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {profile.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={beat >= 7 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 7 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-bone px-9 py-3.5 font-sans text-sm font-bold tracking-wider text-ink shadow-[0_0_50px_rgba(229,19,43,0.5)] transition hover:bg-white hover:scale-105 active:scale-95 sm:px-10 sm:py-4 sm:text-base"
            >
              <span className="text-base text-crimson transition-transform group-hover:scale-125">▶</span> ENTER SERIES
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* ================= SKIP INTRO BUTTON ================= */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-5 top-[calc(8vh+14px)] z-40 rounded-full border border-white/20 bg-black/40 px-5 py-2 font-sans text-xs font-semibold tracking-[0.2em] text-bone backdrop-blur-md transition hover:border-crimson-2 hover:bg-white/10 hover:text-white"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
