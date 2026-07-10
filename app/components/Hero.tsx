'use client'

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { LemonSlice, TomatoSlice, BasilLeaf, PastaSwirl, OliveBranch, StarDoodle } from './Illustrations';

const floatAnim = (delay = 0, y = 12) => ({
  animate: { y: [0, -y, 0], rotate: [0, 3, -3, 0] },
  transition: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' as const, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FDF6E8 60%, #F0E8C8 100%)' }}
    >
      <div className="absolute inset-0 texture-dots opacity-40 pointer-events-none" />

      {/* Floating decorations — RTL swapped positions */}
      <motion.div className="absolute top-24 right-[6%]" {...floatAnim(0, 10)}>
        <LemonSlice size={90} />
      </motion.div>
      <motion.div className="absolute top-16 left-[8%]" {...floatAnim(1, 14)}>
        <TomatoSlice size={75} />
      </motion.div>
      <motion.div className="absolute bottom-32 right-[4%]" {...floatAnim(0.5, 8)}>
        <BasilLeaf size={70} />
      </motion.div>
      <motion.div className="absolute bottom-20 left-[6%]" {...floatAnim(2, 12)}>
        <PastaSwirl size={85} />
      </motion.div>
      <motion.div className="absolute top-1/3 right-[2%]" {...floatAnim(1.5, 6)}>
        <StarDoodle size={36} />
      </motion.div>
      <motion.div className="absolute top-1/2 left-[3%]" {...floatAnim(0.8, 8)}>
        <StarDoodle size={28} />
      </motion.div>

      {/* Olive branches */}
      <div className="absolute bottom-0 right-0 opacity-50">
        <OliveBranch width={220} height={110} />
      </div>
      <div className="absolute bottom-0 left-0 opacity-50 scale-x-[-1]">
        <OliveBranch width={220} height={110} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: 15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/logo.png"
            alt="لا لازانی"
            className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-xl animate-pulse"
          />
        </motion.div>

        {/* Tagline chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="inline-flex items-center gap-2 bg-[#1B6FBF15] rounded-full px-5 py-2 mb-5 border border-[#1B6FBF30]"
        >
          <span className="font-hand text-lg text-[#1B6FBF] font-semibold">از زبان تا لالازان</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 100 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#1B6FBF] leading-none mb-4"
          style={{ lineHeight: 1.25 }}
        >
          لا لازان
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-hand text-2xl md:text-3xl text-[#5C7A2E] font-semibold mb-3"
        >
          «هر بشقاب یک داستان دارد»
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="font-body text-lg text-[#2A1A0E80] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          آشپزی ایتالیایی اصیل با مواد تازه، دستورالعمل‌های مادربزرگ و عشق دست‌ساز هر روز صبح
        </motion.p>


     
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#1B6FBF] flex flex-col items-center gap-1"
      >
        <span className="font-hand text-sm">درباره ما</span>
        <ChevronDown size={22} />
      </motion.a>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,30 1440,40 L1440,80 L0,80 Z"
            fill="#F5E8C8"
          />
        </svg>
      </div>
    </section>
  );
}
