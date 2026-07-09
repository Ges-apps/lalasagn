'use client'


import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { OliveBranch, BasilLeaf, LemonSlice, WavyLine, CeramicPlate } from './Illustrations';

const stats = [
  { value: 'آماده‌سازی مواد', unit: '', label: 'روزانه' },
  { value: '۱۰۰٪', unit: '', label: 'مواد تازه روزانه' },
  { value: 'پخت شده', unit: '', label: 'با عشق' },
  { value: '+۱۲k', unit: '', label: 'مشتری خوشحال' },
];

function StatCard({ value, unit, label, delay }: { value: string; unit: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay, type: 'spring', stiffness: 180 }}
      className="text-center bg-white rounded-3xl p-6 border-2 border-[#2A1A0E]"
      style={{ boxShadow: '-4px 4px 0px #2A1A0E' }}
    >
      <div className="font-display text-4xl text-[#1B6FBF]">{value}<span className="text-2xl">{unit}</span></div>
      <div className="font-hand text-lg text-[#5C7A2E] mt-1 font-semibold">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden" style={{ background: '#F5E8C8' }}>
      <div className="absolute inset-0 texture-lines opacity-30 pointer-events-none" />

      {/* Decorations — RTL positions */}
      <motion.div
        className="absolute top-10 left-10 opacity-70"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <LemonSlice size={64} />
      </motion.div>
      <div className="absolute bottom-10 right-8 opacity-60">
        <BasilLeaf size={56} />
      </div>
      <div className="absolute top-1/2 left-4 hidden xl:block opacity-40 scale-x-[-1]">
        <OliveBranch width={140} height={70} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hand text-xl text-[#D4622A] mb-2 font-semibold">درباره ما</p>
            <h2 className="section-title hand-underline text-blue-500">داستان ما</h2>
            <div className="flex justify-center mt-4">
              <WavyLine width={180} color="#5C7A2E" />
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6"
          >
            <p className="font-hand text-2xl text-[#5C7A2E] leading-relaxed font-semibold text-right">
              «لالازان از کجا شروع شد ؟»
            </p>
            <p className="text-[#2A1A0E] leading-relaxed text-lg font-body text-right">
              وقتی می‌گوییم «از زبان تا لالازان»، فقط یک جمله نیست؛ خلاصه‌ی شروع یک رؤیاست.

              همه‌چیز از یک کلاس زبان آغاز شد. جایی که بهار همیشه با عشق لازانیای خانگی درست می‌کرد و برای دوستانش می‌آورد. عطر و طعمش آن‌قدر خاص بود که یک روز یکی از همان دوستان گفت: «چرا این لازانیا رو به همه معرفی نمی‌کنی؟»

              همان پیشنهاد ساده، جرقه‌ی یک رؤیای بزرگ شد            </p>

          </motion.div>

          {/* Visual column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative rounded-[2.5rem] overflow-hidden border-4 border-[#2A1A0E]"
              style={{ boxShadow: '-8px 8px 0px #2A1A0E' }}
            >
              <img
                src="l1.webp"
                alt="پاستا دست‌ساز"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute bottom-4 right-4 bg-white rounded-2xl px-4 py-2 border-2 border-[#2A1A0E]"
                style={{ boxShadow: '-3px 3px 0px #2A1A0E' }}
              >
                <span className="font-hand text-lg text-[#1B6FBF] font-bold">لالازان✦</span>
              </div>
            </div>

            {/* Floating smaller photo */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-6 w-44 rounded-2xl overflow-hidden"
              style={{ border: '3px solid #2A1A0E', boxShadow: '-4px 4px 0px #1B6FBF' }}
            >
              <img
                src="l2.webp"
                alt="مادربزرگ آشپزی"
                className="w-full h-36 object-cover"
              />
            </motion.div>

            {/* Ceramic plate deco */}
            <div className="absolute -top-8 -right-8 opacity-70">
              <CeramicPlate size={90} />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={0.1 * i} />
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 C1320,50 1400,20 1440,30 L1440,60 L0,60 Z"
            fill="#FDF6E8"
          />
        </svg>
      </div>
    </section>
  );
}
