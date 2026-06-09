'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

// Links updated to perfectly match your site's architecture
const navLinks = [
  { title: "Lifestyle", href: "#lifestyle", number: "01" },
  { title: "Amenities", href: "#amenities", number: "02" },
  { title: "Floor Plans", href: "#floor-plans", number: "03" },
  { title: "Location", href: "#location", number: "04" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Smooth scroll handler to ensure perfect navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for menu exit animation before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); 
  };

  return (
    <>
      {/* 1. Tighter, lower-profile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
          isScrolled || isOpen ? 'bg-[#141414]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          
          <Link href="/" className="relative z-[110]" onClick={() => setIsOpen(false)}>
            <Image 
              src="/ckpc-logo.png" 
              alt="CKPC Logo" 
              width={60} 
              height={60} 
              className="object-contain"
              priority
            />
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] w-10 h-10 flex flex-col justify-center items-end gap-[5px] group focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={{ 
                rotate: isOpen ? 45 : 0, 
                y: isOpen ? 3.5 : 0,
                width: isOpen ? "20px" : "28px"
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-white block origin-center"
            />
            <motion.span 
              animate={{ 
                rotate: isOpen ? -45 : 0, 
                y: isOpen ? -3.5 : 0,
                width: isOpen ? "20px" : "16px"
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-[2px] bg-white block origin-center group-hover:w-[28px] transition-all"
            />
          </button>

        </div>
      </motion.header>

      {/* 2. The Cinematic Takeover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[#141414] flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row justify-between lg:items-center gap-16 relative z-10 pt-16">
              
              <nav className="flex flex-col gap-4 md:gap-8">
                {navLinks.map((link, i) => (
                  <div key={link.title} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a 
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="group flex items-baseline gap-6 w-max"
                      >
                        <span className="text-xs md:text-sm font-mono tracking-widest text-zinc-600 group-hover:text-[#E35205] transition-colors">
                          {link.number}
                        </span>
                        <span className="text-5xl sm:text-6xl md:text-8xl font-medium font-lora text-white group-hover:italic group-hover:text-[#FBB03B] transition-all duration-500">
                          {link.title}
                        </span>
                      </a>
                    </motion.div>
                  </div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-12 border-l border-white/10 pl-6 lg:pl-12"
              >
                <div>
                  <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-6">
                    Priority Access
                  </p>
                  <button className="group relative px-8 py-6 bg-white text-[#141414] hover:bg-[#E35205] hover:text-white transition-colors duration-500 overflow-hidden flex items-center gap-4 w-full md:w-auto justify-between">
                    <span className="relative z-10 text-sm font-bold tracking-[0.2em] uppercase">
                      Unlock Brochure
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-2">
                    Direct Advisory
                  </span>
                  <a href="tel:+917649999586" className="text-xl md:text-2xl font-light text-white hover:text-[#FBB03B] transition-colors">
                    +91 764 9999 586
                  </a>
                  <a href="mailto:info@ckpc.com" className="text-base text-zinc-400 hover:text-white transition-colors">
                    info@ckpc.com
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}