'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Amenities() {
  return (
    <section className="py-24 lg:py-40 bg-[#141414] text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <span className="text-xs tracking-[0.35em] uppercase text-[#D4A574] block mb-6">
              Lifestyle Amenities
            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-light tracking-tight">
              THE ART OF
              <br />
              OPEN LIVING
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-8 flex items-end"
          >
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              A masterfully designed community where expansive greens,
              world-class recreation, and wellness-driven spaces shape
              everyday life.
            </p>
          </motion.div>

        </div>

        {/* Hero Stat + Image */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-40">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <h3 className="text-[120px] md:text-[180px] lg:text-[220px] leading-none font-extralight">
              67%
            </h3>

            <p className="uppercase tracking-[0.35em] text-sm text-zinc-400">
              Dedicated Open Greens
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/sports.jpeg"
                alt="Open Greens and Sports Facilities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </motion.div>

        </div>

        {/* Clubhouse */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-40">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/g6.jpg"
                alt="Clubhouse"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 lg:col-start-7"
          >
            <span className="text-xs tracking-[0.35em] uppercase text-[#D4A574]">
              01
            </span>

            <h3 className="text-5xl md:text-7xl font-light leading-[0.9] mt-6 mb-8">
              33,000 SQ.FT
              <br />
              CLUBHOUSE
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              A G+2 lifestyle destination featuring a rooftop pool,
              sports lounges, wellness studios, entertainment zones,
              and curated social spaces crafted for modern living.
            </p>
          </motion.div>

        </div>

        {/* Vehicle Free */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-40">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <span className="text-xs tracking-[0.35em] uppercase text-[#D4A574]">
              02
            </span>

            <h3 className="text-5xl md:text-7xl font-light leading-[0.9] mt-6 mb-8">
              VEHICLE-FREE
              <br />
              PODIUM
            </h3>

            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              With vehicle movement shifted underground, residents enjoy
              uninterrupted green walkways, safer outdoor experiences,
              and a peaceful environment dedicated entirely to people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/forest.jpeg"
                alt="Vehicle Free Community"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </motion.div>

        </div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="border-t border-white/10 pt-20"
        >
          <div className="max-w-5xl">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1]">
              A community designed around wellness,
              recreation, and the luxury of open space.
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}