'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'منو', href: '#menu' },
  { label: 'داستان ما', href: '#about' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b-2 border-[#2A1A0E10]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-row-reverse items-center justify-between">
          {/* Logo — right side in RTL */}
          <a href="#hero" className="flex items-center gap-3 group order-last sm:order-none">
            <motion.img
              src="/logo.png"
              alt="لالازان"
              className="w-14 h-14 object-contain"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <span className="font-display text-2xl hidden sm:block text-[#1B6FBF]">
             لالازان
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-xl text-[#2A1A0E] hover:text-[#1B6FBF] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#F0C93A] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>


          {/* Mobile burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-[#1B6FBF] order-first"
            aria-label="باز کردن منو"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
            className="fixed inset-0 z-[60] bg-[#FDF6E8] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b-2 border-[#2A1A0E15]">
              <button onClick={() => setOpen(false)} className="p-2 text-[#1B6FBF]">
                <X size={30} />
              </button>
              <img src="/logo.png" alt="لا لازانی" className="w-14 h-14 object-contain" />
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-3xl text-[#1B6FBF]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
