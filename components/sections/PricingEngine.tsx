'use client';

import Image from 'next/image';

export default function PricingEngine() {
  return (
    <section className="bg-[#2b2d30] w-full text-white py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text */}
        <div className="w-full md:w-1/3">
          <span className="font-roboto text-[#E35205] text-sm uppercase tracking-widest font-bold mb-4 block">Pricing Engine</span>
          <h2 className="font-nunito text-4xl md:text-5xl font-semibold leading-tight">
            Check live availability and get a detailed price instantly
          </h2>
        </div>

        {/* Center Mockup */}
        <div className="w-full md:w-1/3 h-[300px] relative">
          <Image 
            src="/pricingengine.png" // Drop a transparent PNG of the phone mockup here
            alt="Pricing Engine Mobile View" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Small Lead Form */}
        <div className="w-full md:w-1/3 max-w-sm ml-auto">
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="p-4 bg-transparent border border-zinc-500 outline-none placeholder:text-zinc-400 font-roboto text-white focus:border-[#E35205] transition-colors"
              required
            />
            <div className="flex border border-zinc-500 focus-within:border-[#E35205] transition-colors">
              <span className="p-4 text-zinc-400 border-r border-zinc-500 font-medium font-roboto flex items-center gap-2">
                🇮🇳 +91
              </span>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="p-4 w-full bg-transparent outline-none placeholder:text-zinc-400 font-roboto text-white"
                required
              />
            </div>
            <button 
              type="submit"
              className="bg-white text-black p-4 font-nunito font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors mt-2"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}