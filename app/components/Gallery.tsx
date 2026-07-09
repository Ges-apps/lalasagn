'use client'

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import { WavyLine, OliveBranch } from './Illustrations';

const photos = [
  {
    src: '1.jpg',
    alt: 'سالن رستوران',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '2.jpg',
    alt: 'پاستا تازه',
    span: '',
  },
  {
    src: '3.jpg',
    alt: 'لازانیا',
    span: '',
  },
  {
    src: '4.jpg',
    alt: 'مواد تازه',
    span: '',
  },
  {
    src: '5.jpg',
    alt: 'بوراتا',
    span: '',
  },
  {
    src: '6.jpg',
    alt: 'میز چیده شده',
    span: 'col-span-2',
  },
  {
    src: '7.jpg',
    alt: 'تیرامیسو',
    span: '',
  },
  {
    src: '1.jpg',
    alt: 'پیتزا',
    span: '',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FDF6E8 0%, #F5E8C8 100%)' }}
    >
      {/* Decorations */}
      <div className="absolute top-8 left-8 opacity-40 scale-x-[-1]">
        <OliveBranch width={180} height={90} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hand text-xl text-[#5C7A2E] mb-2 font-semibold">لحظه‌ها و طعم‌ها</p>
            <h2 className="section-title text-blue-500">گالری</h2>
            <div className="flex justify-center mt-4">
              <WavyLine width={160} color="#5C7A2E" />
            </div>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer border-2 border-[#2A1A0E] group ${photo.span}`}
              style={{ boxShadow: '-4px 4px 0px #2A1A0E' }}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#1B6FBF] opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-hand text-xl text-[#2A1A0E80] mb-4 font-semibold">ما را در اینستاگرام دنبال کنید</p>
          <a
            href="https://www.instagram.com/lalasagn/"
            className="inline-flex items-center gap-3 font-display text-xl px-8 py-4 rounded-full text-white border-2 border-[#2A1A0E] hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #1B6FBF, #D4622A)',
              boxShadow: '-4px 4px 0px #2A1A0E',
            }}
          >
            @lalasagn
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/85 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 left-6 bg-white rounded-full p-2 text-[#2A1A0E] shadow-lg"
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.src} alt={lightbox.alt} className="w-full max-h-[80vh] object-cover" />

          </motion.div>
        </motion.div>
      )}

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#FDF6E8"
          />
        </svg>
      </div>
    </section>
  );
}
