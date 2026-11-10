import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { profile, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

export default function Hero({
  onPlay,
  onResume,
  profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
}) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.45, 1], [0, 1]);

  // Subtle interactive parallax for fine pointer
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20 });
  const py = useSpring(my, { stiffness: 50, damping: 20 });
  const imgRotY = useTransform(px, [-1, 1], [-2, 2]);
  const imgRotX = useTransform(py, [-1, 1], [1.5, -1.5]);
  const imgShiftX = useTransform(px, [-1, 1], [-5, 5]);
  const chipX = useTransform(px, [-1, 1], [10, -10]);
  const chipY = useTransform(py, [-1, 1], [6, -6]);
  const glowX = useTransform(px, [-1, 1], ['-2%', '2%']);

  const metaItems = [
    'B.Tech CSE (AI & ML)',
    'JAIN University',
    'SIH 2026 Selected',
    'Vibe Coder',
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink select-none"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* ================= 1. FULL-BLEED CINEMATIC ATMOSPHERE & LIGHTING ================= */}
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ x: glowX }}>
        {/* Core Crimson Atmospheric Smoke directly behind Krishna's upper torso */}
        <div className="absolute right-[0%] top-[4%] h-[90vh] w-[68vw] rounded-full bg-[radial-gradient(ellipse_at_65%_38%,rgba(229,19,43,0.44)_0%,rgba(180,15,45,0.20)_42%,transparent_70%)] blur-3xl lg:right-[4%] lg:w-[54vw]" />
        
        {/* Magenta Atmospheric Haze Bloom */}
        <div className="absolute right-[8%] top-[10%] h-[72vh] w-[46vw] rounded-full bg-[radial-gradient(ellipse_at_60%_35%,rgba(185,20,105,0.30)_0%,transparent_62%)] blur-2xl" />

        {/* Ambient Warm Volumetric Backlight Rays */}
        <div className="absolute right-[12%] top-[14%] h-[60vh] w-[40vw] bg-[conic-gradient(from_210deg_at_55%_40%,rgba(229,19,43,0.18)_0deg,transparent_40deg,rgba(255,61,90,0.15)_85deg,transparent_135deg)] blur-2xl" />

        {/* Restrained Cool Blue Lighting along the lower distant horizon */}
        <div className="absolute bottom-0 inset-x-0 h-[34vh] bg-[radial-gradient(ellipse_85%_50%_at_50%_100%,rgba(56,189,248,0.18)_0%,rgba(15,76,120,0.09)_50%,transparent_75%)] blur-2xl" />
      </motion.div>

      {/* Floating Ambient Embers / Fine Red Particles */}
      <Particles className="z-[1]" count={48} color="255,61,90" />

      {/* Thin Horizontal Technical Light Trails */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[32%] top-[22%] w-[48vw]" style={{ animationDelay: '1s' }} />
        <span className="light-streak left-[24%] top-[64%] w-[38vw]" style={{ animationDelay: '3.4s' }} />
        <span className="light-streak left-[48%] top-[40%] w-[30vw]" style={{ animationDelay: '5s' }} />
      </div>

      {/* ================= 2. DARK MOUNTAIN SILHOUETTE LANDSCAPE ACROSS LOWER HERO ================= */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 z-[1] h-[22vh] sm:h-[26vh] overflow-hidden">
        {/* Distant Mountain Ridge Silhouette with Subtle Blue Highlight Crest */}
        <svg
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full opacity-60"
        >
          <path
            d="M0,240 L0,140 L130,115 L280,155 L440,95 L610,145 L780,85 L960,135 L1140,75 L1300,125 L1440,95 L1440,240 Z"
            fill="#090910"
            stroke="rgba(56,189,248,0.22)"
            strokeWidth="1.2"
          />
        </svg>

        {/* Foreground Mountain Silhouette Ridge */}
        <svg
          viewBox="0 0 1440 240"
          fill="none"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-[80%] opacity-95"
        >
          <path
            d="M0,240 L0,165 L190,135 L380,175 L540,125 L710,160 L900,110 L1080,150 L1260,120 L1440,155 L1440,240 Z"
            fill="#07070a"
          />
        </svg>

        {/* Soft Red Horizon Mist rising from valleys */}
        <div className="absolute bottom-0 inset-x-0 h-[45%] bg-gradient-to-t from-ink via-crimson/12 to-transparent blur-md" />
      </div>

      {/* ================= 3. RIGHT SIDE: HERO PORTRAIT & CIRCULAR ENERGY RINGS ================= */}
      <motion.div
        className="absolute inset-x-0 top-10 z-[3] flex h-[68svh] items-end justify-center sm:h-[74svh] lg:bottom-0 lg:left-auto lg:right-[-2vw] xl:right-[1vw] lg:top-10 lg:h-auto lg:w-[58vw] xl:w-[57vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative flex h-full w-full items-end justify-center lg:h-[92vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
        >
          {/* ================= CIRCULAR ENERGY RINGS (POSITIONED EXACTLY BEHIND HEAD & SHOULDERS) ================= */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[38%] left-[51%] -translate-x-1/2 -translate-y-1/2 z-0"
          >
            {/* Outer Concentric Technical Ring with Dashed Arcs, Dots & Slow Rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
              className="relative flex items-center justify-center h-[620px] w-[620px] sm:h-[700px] sm:w-[700px] lg:h-[780px] lg:w-[780px]"
            >
              <svg viewBox="0 0 780 780" className="h-full w-full">
                {/* Thin outer circular path */}
                <circle cx="390" cy="390" r="380" fill="none" stroke="rgba(229,19,43,0.22)" strokeWidth="1" />
                
                {/* High-tech dashed arc segment at top-right */}
                <circle
                  cx="390"
                  cy="390"
                  r="380"
                  fill="none"
                  stroke="rgba(255,61,90,0.65)"
                  strokeWidth="1.8"
                  strokeDasharray="8 14"
                  strokeDashoffset="60"
                />

                {/* Secondary dashed arc segment at bottom-left */}
                <circle
                  cx="390"
                  cy="390"
                  r="380"
                  fill="none"
                  stroke="rgba(255,61,90,0.45)"
                  strokeWidth="1.5"
                  strokeDasharray="4 10"
                  strokeDashoffset="280"
                />

                {/* Glowing Red & White Light Points / Particles stationed on outer circle */}
                <circle cx="655" cy="125" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 6px #ff3d5a)" />
                <circle cx="710" cy="230" r="2.5" fill="#ff3d5a" filter="drop-shadow(0 0 5px #e5132b)" />
                <circle cx="125" cy="655" r="3" fill="#ffffff" filter="drop-shadow(0 0 6px #ff3d5a)" />
                <circle cx="70" cy="490" r="2.5" fill="#ff3d5a" filter="drop-shadow(0 0 5px #e5132b)" />
                <circle cx="510" cy="760" r="3" fill="#ff3d5a" filter="drop-shadow(0 0 6px #e5132b)" />
              </svg>
            </motion.div>

            {/* Inner Glowing Crimson Ring (Surrounding Krishna's head & shoulders) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[460px] sm:h-[510px] sm:w-[510px] lg:h-[540px] lg:w-[540px] rounded-full border-2 border-crimson/75 shadow-[0_0_42px_rgba(229,19,43,0.55),inset_0_0_30px_rgba(229,19,43,0.22)]" />

            {/* Radiant Ambient Core Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(229,19,43,0.38)_0%,rgba(160,15,40,0.12)_60%,transparent_75%)] blur-2xl" />
          </div>

          {/* ================= REAL PHOTOGRAPH: KRISHNA (SEAMLESS CINEMATIC BLEND) ================= */}
          <div className="relative z-10 flex h-full w-auto items-end justify-center">
            {/* Atmospheric crimson backlight glow behind silhouette */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[18%] left-1/2 -translate-x-1/2 -z-10 h-[62%] w-[96%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,19,43,0.44)_0%,rgba(180,15,45,0.18)_50%,transparent_74%)] blur-3xl"
            />

            <img
              src="./images/krishna-portrait.png"
              alt="Krishna Kant Srivastava - AI / ML Engineer"
              className="relative z-10 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_55px_rgba(0,0,0,0.85)]"
            />

            {/* Seamless deep ink gradient melt at bottom of torso - dissolves jacket into dark background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[-25%] bottom-0 h-[38%] bg-gradient-to-t from-ink via-ink/90 via-35% to-transparent z-20"
            />

            {/* Ambient cinematic crimson fog rolling across lower torso */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[-20%] bottom-[6%] h-[26%] bg-[radial-gradient(ellipse_at_bottom,rgba(229,19,43,0.30)_0%,rgba(180,15,45,0.12)_50%,transparent_75%)] blur-2xl z-20 mix-blend-screen"
            />
          </div>

          {/* ================= 4. THREE FLOATING INFORMATION CARDS (EXACT TARGET MATCH) ================= */}
          {/* Card 1: SlopeSafe */}
          <motion.div
            className="absolute z-20 hidden md:block left-[1%] lg:left-[4%] top-[34%]"
            style={{ x: chipX, y: chipY }}
            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
          >
            <div className="relative glass rounded-2xl px-5 py-3.5 backdrop-blur-xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
              <p className="text-sm sm:text-base font-bold text-bone tracking-wide whitespace-nowrap">SlopeSafe</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2 mt-0.5 whitespace-nowrap">
                LANDSLIDE PREDICTION
              </p>

              {/* HUD Connector Line towards inner ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-full ml-1 hidden lg:flex items-center gap-1.5 opacity-60"
              >
                <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-white/30 to-crimson-2/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-2 shadow-[0_0_8px_#ff3d5a]" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: AI / ML Engineer */}
          <motion.div
            className="absolute z-20 hidden md:block right-[1%] lg:right-[3%] top-[24%]"
            style={{ x: chipX, y: chipY }}
            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 1.25, ease: EASE }}
          >
            <div className="relative glass rounded-2xl px-5 py-3.5 backdrop-blur-xl border border-crimson-2/50 shadow-[0_0_22px_rgba(229,19,43,0.35),0_16px_40px_rgba(0,0,0,0.7)]">
              <p className="text-sm sm:text-base font-bold text-bone tracking-wide whitespace-nowrap">AI / ML Engineer</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2 mt-0.5 whitespace-nowrap">
                SPECIALIZATION
              </p>

              {/* HUD Connector Line towards outer ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-full mr-1 hidden lg:flex items-center flex-row-reverse gap-1.5 opacity-60"
              >
                <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-white/30 to-crimson-2/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-2 shadow-[0_0_8px_#ff3d5a]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Core Stack */}
          <motion.div
            className="absolute z-20 hidden md:block right-[0%] lg:right-[2%] bottom-[25%]"
            style={{ x: chipX, y: chipY }}
            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
          >
            <div className="relative glass rounded-2xl px-5 py-3.5 backdrop-blur-xl border border-crimson/30 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
              <p className="text-sm sm:text-base font-bold text-bone tracking-wide whitespace-nowrap">Python · ML · React</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2 mt-0.5 whitespace-nowrap">
                CORE STACK
              </p>

              {/* HUD Connector Line towards outer ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-full mr-1 hidden lg:flex items-center flex-row-reverse gap-1.5 opacity-60"
              >
                <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-white/30 to-crimson-2/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-2 shadow-[0_0_8px_#ff3d5a]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Edge gradient for cinematic text readability on mobile */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[38svh] z-[3] h-[38svh] bg-gradient-to-b from-transparent via-ink/75 to-ink lg:hidden" />

      {/* ================= 5. LEFT SIDE: EDITORIAL & CINEMATIC COPY ================= */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-20 pt-[52svh] sm:pb-24 lg:max-w-[44vw] xl:max-w-[42vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Small S SERIES Label */}
        <motion.div variants={item} className="mb-2 flex items-center gap-3">
          <SeriesMark />
        </motion.div>

        {/* Main Heading: KRISHNA */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.80] tracking-[0.01em] text-bone"
          style={{ fontSize: 'clamp(4.6rem, 11vw, 10.5rem)' }}
        >
          <span className="bg-gradient-to-b from-white via-[#fce7ec] to-[#ff6b85] bg-clip-text text-transparent drop-shadow-[0_12px_45px_rgba(0,0,0,0.9)]">
            {profile.firstName}
          </span>
        </motion.h1>

        {/* Subtitle: THE SERIES */}
        <motion.p
          variants={item}
          className="mt-1 font-sans text-sm font-bold tracking-[0.65em] text-crimson-2 [text-shadow:0_2px_22px_rgba(229,19,43,0.6)] sm:text-base"
        >
          {profile.seriesTag}
        </motion.p>

        {/* Metadata Tag Row with [AI-ML] pill */}
        <motion.div
          variants={item}
          className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[12.5px] font-medium text-mist"
        >
          <span className="rounded border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-bold tracking-wider text-bone">
            AI-ML
          </span>
          {metaItems.map((m, i) => (
            <span key={m} className="flex items-center gap-2 whitespace-nowrap">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        {/* Professional Role Heading */}
        <motion.p
          variants={item}
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.32em] text-bone sm:text-xs sm:tracking-[0.36em]"
        >
          {profile.role.replace(/·/g, '•')}
        </motion.p>

        {/* Professional Introduction Paragraph */}
        <motion.p
          variants={item}
          className="mt-4 max-w-xl text-[14px] leading-relaxed text-bone/85 sm:text-[15px]"
        >
          {profile.intro}
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3.5">
          {/* Primary: Play Intro */}
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="group flex min-h-12 items-center gap-2.5 rounded-md bg-white px-7 py-3 text-[15px] font-bold text-ink shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-[#f4f1ec] hover:scale-105 active:scale-95 sm:px-8"
            >
              <span className="text-sm text-ink transition-transform group-hover:scale-125">▶</span> Play Intro
            </button>
          </Magnetic>

          {/* Secondary: + My Work */}
          <Magnetic>
            {profileId === 'recruiter' ? (
              <button
                type="button"
                data-cursor="view"
                onClick={onResume}
                className="glass flex min-h-12 items-center gap-2.5 rounded-md px-7 py-3 text-[15px] font-semibold text-bone transition-all duration-300 hover:bg-white/15 hover:border-crimson-2/40 hover:scale-105 active:scale-95 sm:px-8"
              >
                <span>📄</span> View Resume
              </button>
            ) : (
              <button
                type="button"
                data-cursor="link"
                onClick={() => scrollTo('#originals')}
                className="glass flex min-h-12 items-center gap-2 rounded-md px-7 py-3 text-[15px] font-semibold text-bone transition-all duration-300 hover:bg-white/15 hover:border-crimson-2/40 hover:scale-105 active:scale-95 sm:px-8"
              >
                <span className="text-base text-bone font-normal leading-none">+</span> My Work
              </button>
            )}
          </Magnetic>

          {/* Information button */}
          <button
            type="button"
            data-cursor="link"
            onClick={() => scrollTo('#about')}
            aria-label="More information"
            title="More information"
            className="glass flex h-12 w-12 items-center justify-center rounded-full text-base font-serif italic text-bone ring-1 ring-white/15 transition-all duration-300 hover:border-bone hover:bg-white/15 hover:scale-105 active:scale-95"
          >
            i
          </button>
        </motion.div>
      </motion.div>

      {/* ================= 6. LOWER HERO DETAILS ================= */}
      <div className="gutter absolute inset-x-0 bottom-6 z-10 hidden items-center justify-between text-xs lg:flex">
        {/* Bottom Left: Continue Exploring Indicator */}
        <button
          type="button"
          onClick={() => scrollTo('#originals')}
          className="group flex items-center gap-2.5 font-semibold tracking-[0.24em] text-mist/70 transition hover:text-bone"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[10px] text-crimson-2 transition group-hover:border-crimson-2 group-hover:translate-y-0.5">
            ↓
          </span>
          CONTINUE EXPLORING
        </button>

        {/* Bottom Center: Thin Progress Track */}
        <div className="hidden xl:flex items-center gap-2">
          <div className="h-[2px] w-32 rounded-full bg-white/15 overflow-hidden">
            <div className="h-full w-12 rounded-full bg-crimson-2 shadow-[0_0_8px_#ff3d5a]" />
          </div>
        </div>

        {/* Bottom Right: Series Viewing Status */}
        <div className="flex items-center gap-3 font-semibold tracking-[0.20em] text-smoke">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson-2 animate-pulse" />
          <span>SERIES PREMIERE • S01</span>
        </div>
      </div>

      {/* Blackout overlay during scroll out */}
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}
