'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const floorPlans = [
  {
    id: '1bhk',
    title: '1 Bedroom',
    saleableArea: '689',
    carpetArea: '427',
    image: '/plans/1bhk.jpg',
  },
  {
    id: '2bhk',
    title: '2 Bedroom',
    saleableArea: '1206–1219',
    carpetArea: '777–783',
    image: '/plans/1bhk.jpg',
  },
  {
    id: '2bhk-study',
    title: '2 Bedroom + Study',
    saleableArea: '1457–1486',
    carpetArea: '907–926',
    image: '/plans/1bhk.jpg',
  },
  {
    id: '3bhk',
    title: '3 Bedroom',
    saleableArea: '1630–1767',
    carpetArea: '1038–1085',
    image: '/plans/1bhk.jpg',
  },
  {
    id: '4bhk',
    title: '4 Bedroom',
    saleableArea: '2353',
    carpetArea: '1498',
    image: '/plans/1bhk.jpg',
  },
];

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState('2bhk');

  const activePlan =
    floorPlans.find((plan) => plan.id === activeTab) || floorPlans[1];

  return (
    <section id="floor-plans" className="py-24 lg:py-40 bg-[#E5E4DE] text-[#141414] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="text-xs tracking-[0.35em] uppercase block mb-6 text-[#E35205]">
              Residences
            </span>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
              FLOOR PLAN
              <br />
              COLLECTION
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-4 lg:col-start-8 flex items-end"
          >
            <p className="text-lg font-light leading-relaxed text-zinc-700">
              Thoughtfully planned residences designed to maximize natural
              light, ventilation and spatial efficiency.
            </p>
          </motion.div>

        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-8 lg:gap-16 mb-20 border-b border-black/10 pb-4">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(plan.id)}
              className={`relative pb-4 uppercase tracking-[0.2em] text-sm transition-colors ${
                activeTab === plan.id
                  ? 'text-black'
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              {plan.title}

              {activeTab === plan.id && (
                <motion.div
                  layoutId="activePlanTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E35205]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Side */}
          <AnimatePresence mode="wait">

            <motion.div
              key={activePlan.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-4"
            >
              <p className="uppercase tracking-[0.35em] text-xs text-zinc-500 mb-5">
                Residence Type
              </p>

              <h3 className="text-5xl md:text-6xl font-light leading-none mb-16">
                {activePlan.title}
              </h3>

              <div className="space-y-12">

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-3">
                    Saleable Area
                  </p>

                  <p className="text-5xl font-extralight">
                    {activePlan.saleableArea}
                  </p>

                  <p className="mt-2 text-sm text-zinc-600">
                    Sq. Ft.
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-3">
                    Carpet Area
                  </p>

                  <p className="text-5xl font-extralight">
                    {activePlan.carpetArea}
                  </p>

                  <p className="mt-2 text-sm text-zinc-600">
                    Sq. Ft.
                  </p>
                </div>

              </div>

              <button className="mt-16 border border-black px-10 py-5 uppercase tracking-[0.2em] text-xs transition-all duration-300 hover:bg-black hover:text-white">
                Request Floor Plan
              </button>
            </motion.div>

          </AnimatePresence>

          {/* Right Side */}
          <div className="lg:col-span-8">

            <AnimatePresence mode="wait">

              <motion.div
                key={activePlan.image}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="relative aspect-[16/10] bg-white border border-black/5 shadow-sm"
              >
                <Image
                  src={activePlan.image}
                  alt={activePlan.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                  className="object-contain p-8 lg:p-12"
                />
              </motion.div>

            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}