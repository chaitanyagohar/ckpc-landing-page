'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] bg-[#141414] overflow-hidden">
      
      {/* 1. Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CKPC-Properties_Residential_Winds-of-Change_01.png" // Place your high-res exterior render here
          alt="Winds of Change Exterior"
          fill
          priority
          className="object-cover object-center animate-[kenburns_20s_ease-out_forwards]"
          sizes="100vw"
          quality={100}
        />
        {/* Left-biased gradient to ensure text readability while letting the right side of the image shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-[#141414]/40 to-transparent z-10" />
        {/* Subtle bottom gradient for the RERA text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent z-10" />
      </div>

      {/* 2. Left-Aligned Content Container */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-center">
        
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 }
            }
          }}
          className="max-w-2xl"
        >
          {/* Logo */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
        
          >
            {/* Make sure ckpc-logo.png is in your /public folder */}
            <Image 
              src="/ckpc-logo2.png" 
              alt="CKPC Logo" 
              width={100} 
              height={50} 
              className="object-contain"
            />
          </motion.div>

          {/* Project Name (Using Lora for that high-end editorial feel) */}
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-medium font-lora text-white tracking-tight leading-[1.05] mb-6 drop-shadow-2xl"
          >
            Winds of Change.
          </motion.h1>

          {/* Elevated Subtext */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 1 } }
            }}
            className="text-base md:text-xl text-zinc-300 font-light tracking-wide max-w-lg leading-relaxed drop-shadow-md"
          >
            A sanctuary of space<br className="hidden sm:block"/> in the heart of Yelahanka.
          </motion.p>
        </motion.div>

      </div>

      {/* 3. Bottom Legal / RERA (Mimicking the reference image's fine print) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-4 sm:left-6 md:left-12 z-20"
      >
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">
          RERA PRM/KA/RERA/1251/472/PR/210525/007765
        </p>
      </motion.div>

    </section>
  );
}