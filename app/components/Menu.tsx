'use client'

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { WavyLine, PastaSwirl, TomatoSlice, StarDoodle } from './Illustrations';

type MenuItem = {
  name: string;
  nameIt: string;
  description: string;
  price: string;
  image: string;
};

type Category = {
  id: string;
  label: string;
  color: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: 'antipasti',
    label: 'لازانیا',
    color: '#5C7A2E',
    items: [
      {
        name: 'راگو گوشت',
        nameIt: 'Ragu di Carne',
        description: 'شیت دست ساز , راگو گوشت , سس بلونز, پوره پومودورو',
        price: '۹۲۰ هزار تومان',
        image: '/lasa.png',
      },
      {
        name: 'مرغ و ریحون',
        nameIt: 'Di pollo',
        description: 'شیت دست ساز , راگو مرغ , بشامل خامه , سس ریحون',
        price: '۷۵۰ هزار تومان',
        image: '/lasa.png',
      },
      {
        name: 'سبزیجات',
        nameIt: 'Verdure',
        description: 'شیت دست ساز , کدو و بادمجان , بشامل جعفری و نخود فرنگی',
        price: '۶۳۰ هزار تومان',
        image: '/lasa.png',
      },
    ],
  },
  {
    id: 'primi',
    label: 'پیتزا',
    color: '#D4622A',
    items: [
      {
        name: 'پیتزا مارگاریتا',
        nameIt: 'margherita',
        description: 'خمیر ایتالیایی , سس پومودورو , موزارلا تازه , گوجه چری , ریحون',
        price: '۴۷۰ هزار تومان',
        image: '/pizza.png',
      },
      {
        name: 'چهار پنیرگردو',
        nameIt: 'quattro formaggi',
        description: 'خمیر ایتالیایی , گردو کاراملایز , روکولا , چهارنوع پنیر دست ساز تازه',
        price: '۵۵۰ هزار تومان',
        image: '/pizza.png',
      },

    ],
  },
  {
    id: 'secondi',
    label: 'پاستا',
    color: '#1B6FBF',
    items: [
      {
        name: 'لیمو فلفلی',
        nameIt: 'Limone e Pepe',
        description: 'فتوچینی دست ساز , سس لیمو و فلفل سیاه , پیازچه',
        price: '۵۳۰ هزار تومان',
        image: '/pasta.png',
      },
      {
        name: 'گوجه پنیری',
        nameIt: 'pasta al pomodoro',
        description: 'فتوچینی دست ساز , سس پومودورو , گوجه چری , موزارلا تازه',
        price: '۴۵۰ هزار تومان',
        image: '/pasta.png',
      },
      
    ],
  }
];

function MenuCard({ item, delay, categoryColor }: { item: MenuItem; delay: number; categoryColor: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, type: 'spring', stiffness: 120 }}
      className="menu-card group"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <span className="font-display text-xl ml-4 whitespace-nowrap" dir='rtl' style={{ color: categoryColor }}>{item.price}</span>
          <h3 className="font-display text-xl text-right" style={{ color: categoryColor }}>{item.name}</h3>
        </div>
        <p className="text-xs text-[#2A1A0E50] text-right mb-2 font-body italic">{item.nameIt}</p>
        <p className="text-sm text-[#2A1A0E80] leading-relaxed text-right font-body">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [active, setActive] = useState('antipasti');
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative py-24 overflow-hidden bg-amber-50">
      {/* Decorative */}
      <motion.div
        className="absolute top-12 right-6 opacity-50"
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <PastaSwirl size={70} />
      </motion.div>
      <motion.div
        className="absolute bottom-16 left-8 opacity-50"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <TomatoSlice size={64} />
      </motion.div>
      <div className="absolute top-1/2 left-4 opacity-20">
        <StarDoodle size={50} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-hand text-xl text-[#D4622A] mb-2 font-semibold">چه می‌پزیم</p>
            <h2 className="section-title text-blue-500 font-semibold ">منوی ما</h2>
            <div className="flex justify-center mt-4 mb-8">
              <WavyLine width={160} color="#D4622A" />
            </div>
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-row-reverse justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={`font-display text-xl px-7 py-3 rounded-full border-2 cursor-pointer border-[#2A1A0E] transition-all duration-300 ${
                active === cat.id
                  ? 'text-white'
                  : 'bg-white text-[#2A1A0E]'
              }`}
              style={
                active === cat.id
                  ? { background: cat.color, boxShadow: '-4px 4px 0px #2A1A0E' }
                  : { boxShadow: 'none' }
              }
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {activeCategory.items.map((item, i) => (
                <MenuCard
                  key={item.name}
                  item={item}
                  delay={i * 0.1}
                  categoryColor={activeCategory.color}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
