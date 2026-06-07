'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

const locationData = [
  {
    category: "Schools",
    items: [
      { name: "Vishwa Vidyapeeth Vikramashila", time: "1" },
      { name: "NPS Singanayakanahalli", time: "1" },
      { name: "VIBGYOR High School Yelahanka", time: "6" },
      { name: "NITTE International School", time: "7" },
      { name: "ORCHIDS The International School", time: "9" },
      { name: "Presidency School Bengaluru North", time: "9" },
      { name: "Aditi International School", time: "12" },
      { name: "Chrysalis High School", time: "15" },
      { name: "NPS Yelahanka", time: "17" },
      { name: "Delhi Public School Bangalore North", time: "37" }
    ]
  },
  {
    category: "Transport",
    items: [
      { name: "Yelahanka Metro Station", time: "17" },
      { name: "Yelahanka Railway Station", time: "23" },
      { name: "Kempegowda International Airport", time: "36" }
    ]
  },
  {
    category: "IT Hubs",
    items: [
      { name: "Bagmane Sierra Business District", time: "17" },
      { name: "CapitaLand IT Park", time: "25" },
      { name: "Purva Aerocity", time: "27" },
      { name: "North Gate Tech Park", time: "28" },
      { name: "Prestige Tech Cloud Park", time: "32" },
      { name: "Embassy Manyata Business Park", time: "47" }
    ]
  },
  {
    category: "Retail",
    items: [
      { name: "Garuda Mall, Yelahanka", time: "15" },
      { name: "The Galleria Mall", time: "16" },
      { name: "Mall of Asia", time: "19" }
    ]
  },
  {
    category: "Hospitals",
    items: [
      { name: "Sparsh Hospital, Yelahanka", time: "22" },
      { name: "Aveksha Hospital", time: "24" },
      { name: "Cloudnine Hospital", time: "25" },
      { name: "Manipal Hospital Hebbal", time: "28" },
      { name: "Narayana Super Specialty Hospital", time: "42" }
    ]
  }
];

export default function Location() {
  // State for the Mobile Tab View
  const [activeTab, setActiveTab] = useState(locationData[0].category);
  const activeData = locationData.find(data => data.category === activeTab);

  return (
    <section id="location" className="py-24 lg:py-40 bg-ckpc-greige text-[#141414] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16 relative">
          
          {/* Left Column: Shared Sticky Context & Headline */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-max z-10 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-4 h-4 text-[#E35205]" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-500">
                  Yelahanka, Bengaluru
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-medium font-lora leading-[0.9] tracking-tight mb-8 text-[#E35205]">
                Your world, <br />
                within reach.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] bg-zinc-300 overflow-hidden mb-8 shadow-xl"
            >
              <Image 
                src="/location.jpg" 
                alt="North Bengaluru Connectivity Map" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </motion.div>
            
            <p className="text-sm lg:text-base text-zinc-600 font-light leading-relaxed mb-8">
              Experience immediate access to global transit, elite education, and premium commercial hubs without sacrificing the tranquility of a low-density sanctuary.
            </p>

            <button className="group flex items-center gap-4 text-[#141414] font-medium tracking-widest uppercase text-xs w-max">
              <span className="pb-1 border-b border-[#141414] group-hover:border-[#E35205] transition-colors">
                Explore on Map
              </span>
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2 text-[#E35205]" />
            </button>
          </div>

          {/* Right Column: Dynamic Data Rendering */}
          <div className="lg:col-span-8 pt-8 lg:pt-0">
            
            {/* =========================================
                DESKTOP VIEW: High-Density Swiss Directory
                ========================================= */}
            <div className="hidden lg:block">
              <div className="columns-2 gap-x-16 space-y-16">
                {locationData.map((block, idx) => (
                  <motion.div
                    key={`desktop-${block.category}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="break-inside-avoid"
                  >
                    <h3 className="text-xl font-bold font-sans text-[#141414] mb-4 pb-2 border-b-2 border-[#141414]">
                      {block.category}
                    </h3>
                    <ul className="flex flex-col">
                      {block.items.map((item, i) => (
                        <li 
                          key={i} 
                          className="group flex justify-between items-baseline py-2.5 border-b border-[#141414]/10 hover:border-[#E35205]/50 transition-colors cursor-default"
                        >
                          <span className="text-sm text-[#141414]/80 font-medium group-hover:text-[#E35205] transition-colors pr-4">
                            {item.name}
                          </span>
                          <div className="flex items-baseline gap-1 text-[#141414] group-hover:text-[#E35205] transition-colors whitespace-nowrap">
                            <span className="text-sm font-semibold">{item.time}</span>
                            <span className="text-[10px] uppercase font-semibold">mins</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* =========================================
                MOBILE VIEW: Interactive Sliding Index
                ========================================= */}
            <div className="block lg:hidden">
              
              {/* Scrollable Tabs */}
              <div className="flex gap-8 overflow-x-auto pb-4 mb-8 border-b border-[#141414]/10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {locationData.map((tab) => (
                  <button
                    key={`mobile-tab-${tab.category}`}
                    onClick={() => setActiveTab(tab.category)}
                    className={`relative pb-4 whitespace-nowrap text-sm font-medium tracking-widest uppercase transition-colors ${
                      activeTab === tab.category ? 'text-[#141414]' : 'text-zinc-400 hover:text-[#141414]'
                    }`}
                  >
                    {tab.category}
                    {activeTab === tab.category && (
                      <motion.div
                        layoutId="active-mobile-tab"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E35205]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Animated List Content */}
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    {activeData?.items.map((item, i) => (
                      <motion.div 
                        key={`mobile-item-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        className="group flex justify-between items-baseline py-4 border-b border-[#141414]/5 transition-colors"
                      >
                        <span className="text-sm text-[#141414]/80 font-medium pr-4">
                          {item.name}
                        </span>
                        <div className="flex items-baseline gap-1 text-[#141414] whitespace-nowrap">
                          <span className="text-base font-semibold font-lora">{item.time}</span>
                          <span className="text-[10px] uppercase font-semibold text-zinc-500">mins</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

           

          </div>
        </div>
      </div>
    </section>
  );
}