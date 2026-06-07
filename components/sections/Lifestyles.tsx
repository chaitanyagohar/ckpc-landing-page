'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-20 lg:py-40 bg-[#E5E4DE] text-[#141414] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-12">
          
          {/* 1. Top Left: Intro Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-1"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-[0.1em] uppercase mb-6 leading-tight">
              THE WINDS OF CHANGE <br /> RESIDENCE
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed">
              The sophisticated interiors of Winds of Change have been meticulously crafted by acclaimed architects. Embracing a master plan that dedicates 67% of the estate to open greenscapes, these residences present a contemporary interpretation of the splendid urban lifestyle for which North Bengaluru is known.
            </p>
          </motion.div>

          {/* 2. Top Right: Massive Staggered Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:pt-32"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.05em] uppercase leading-[1.1] text-balance">
              A SUPREME LIVING EXPERIENCE IN THE HEART OF YELAHANKA
            </h2>
          </motion.div>

          {/* 3. Middle Left: Portrait Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:row-span-2 lg:mt-16"
          >
            <div className="relative w-full aspect-[4/5] bg-zinc-300 overflow-hidden">
              <Image
                src="/kitchen.jpg" // Replace with your high-res kitchen/interior shot
                alt="Contemporary Kitchens at Winds of Change"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase mt-4 block text-[#141414]">
              HIGH-END CONTEMPORARY KITCHENS
            </span>
          </motion.div>

          {/* 4. Bottom Right: Large Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-6 lg:row-start-3 lg:row-span-2 lg:pt-24"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/9] bg-zinc-300 overflow-hidden">
              <Image
                src="/club-house-hires-gallery.jpg" // Replace with your high-res living room shot
                alt="Smart Home Integration"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase mt-4 block text-[#141414]">
              SMART HOME INTEGRATION & CLIMATE CONTROL
            </span>
          </motion.div>

          {/* 5. Bottom Left: Square Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:col-start-1 lg:row-start-4"
          >
            <div className="relative w-full aspect-square bg-zinc-300 overflow-hidden">
              <Image
                src="/sports.jpeg" // Replace with your high-res exterior/balcony shot
                alt="Sunrise and Lake Views"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            <span className="text-xs font-medium tracking-[0.15em] uppercase mt-4 block text-[#141414]">
              Live Amidst Nature with Dedicated Sports and Wellness Spaces
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}