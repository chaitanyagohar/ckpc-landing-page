'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="bg-white p-5 w-full text-[#141414]">
      
      {/* 1. EXACT CTA FORM - Placed at the very first */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-nunito font-semibold tracking-tight mb-8">
          Schedule a Site Visit
        </h2>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row border border-zinc-300 bg-white">
            
            {/* Name Input */}
            <input 
              type="text" 
              placeholder="Name" 
              className="p-4 flex-1 border-b md:border-b-0 md:border-r border-zinc-300 outline-none placeholder:text-zinc-400 font-roboto"
              required
            />
            
            {/* Phone Input with Fixed +91 */}
            <div className="flex flex-1 border-b md:border-b-0 md:border-r border-zinc-300">
              <span className="p-4 text-zinc-500 bg-zinc-50 border-r border-zinc-300 font-medium font-roboto">+91</span>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="p-4 w-full outline-none placeholder:text-zinc-400 font-roboto"
                required
              />
            </div>
            
            {/* Budget Dropdown */}
            <select 
              className="p-4 flex-1 border-b md:border-b-0 md:border-r border-zinc-300 outline-none bg-white text-[#141414] cursor-pointer appearance-none font-roboto"
              defaultValue=""
              required
            >
              <option value="" disabled>Budget</option>
              <option value="2cr">2BHK ₹2.0Cr</option>
              <option value="2.4cr">3BHK ₹2.4Cr</option>
              <option value="2.7cr">3BHK ₹2.7Cr</option>
              <option value="3.3cr">3BHK ₹3.3Cr</option>
              <option value="4.2cr">4BHK ₹4.2Cr</option>
            </select>
            
            {/* Submit Button */}
            <button 
              type="submit"
              className="bg-black text-white p-4 flex-1 font-nunito font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors group text-base"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              Submit
            </button>

          </div>

          {/* Authorization Checkbox */}
          <div className="flex items-start gap-3 mt-2 md:w-1/2 mx-auto md:mx-0 md:ml-auto">
            <input type="checkbox" id="auth" className="mt-1 cursor-pointer" defaultChecked required />
            <label htmlFor="auth" className="text-xs text-zinc-500 leading-tight font-roboto">
              I authorize CKPC and its representatives to contact me via email, SMS, WhatsApp, and phone call. This will override my DND/NDNC registration.
            </label>
          </div>
        </form>

        <div className="mt-10 text-lg md:text-xl font-nunito font-semibold">
          Call us on <span className="text-[#E35205]">+91 76499 99586</span>
        </div>
      </div>

      {/* 2. THE INTRO BANNER */}
      <div className="relative w-full h-[60vh] md:h-[110vh] ">
        <Image 
          src="/hero.jpg" 
          alt="Winds of Change Estate" 
          fill 
          className="object-cover"
          priority
        />
 <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute inset-0 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex items-center">
          <h2 className="font-nunito font-semibold text-[60px] leading-[60px] tracking-[0.5px] text-white max-w-2xl ">
            The address of beautiful change in North Bengaluru
          </h2>
        </div>
      </div>

      {/* 3. THE ASYMMETRICAL TIMELINE LAYOUT */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-40">
        
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2" />

        {/* Feature 1 */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-32 md:mb-48">
          <div className="w-full md:w-[40%] text-left md:pr-16 mb-8 md:mb-0">
            <h3 className="font-nunito text-3xl md:text-4xl font-semibold mb-6 text-[#141414] leading-tight tracking-tight">
              67% open spaces built purely for breathability
            </h3>
            <p className="font-roboto text-zinc-600 leading-relaxed text-base">
              Set across 7.5 sprawling acres, the estate reserves over two-thirds of its footprint for nature. Landscaped greens and open corridors ensure a life unrestricted by urban density.
            </p>
          </div>
          
          <div className="w-full md:w-[50%] h-[350px] md:h-[450px] relative bg-zinc-100 overflow-hidden group">
            <Image src="/forest.jpeg" alt="Open Spaces" fill className="object-cover sizes=(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw " />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-32 md:mb-48">
          <div className="w-full md:w-[35%] text-left md:pl-16 mb-8 md:mb-0">
            <h3 className="font-nunito text-3xl md:text-4xl font-semibold mb-6 text-[#141414] leading-tight tracking-tight">
              Unusually flexible, low-density bespoke residences
            </h3>
            <p className="font-roboto text-zinc-600 leading-relaxed text-base">
              With an exclusive collection of just 438 residences, privacy is paramount. Each home features adaptable layouts designed to effortlessly evolve with your lifestyle and family needs.
            </p>
          </div>
          
          <div className="w-full md:w-[55%] h-[400px] md:h-[650px] relative bg-zinc-100 overflow-hidden group">
            <Image src="/g2.jpg" alt="Flexible Residences" fill className="object-cover " />
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-[45%] text-left md:pr-16 mb-8 md:mb-0">
            <h3 className="font-nunito text-3xl md:text-4xl font-semibold mb-6 text-[#141414] leading-tight tracking-tight">
              A serene sanctuary connected to the pulse of Yelahanka
            </h3>
            <p className="font-roboto text-zinc-600 leading-relaxed text-base">
              Positioned perfectly in North Bengaluru, the estate offers a quiet, pedestrian-friendly retreat from the city's chaos without sacrificing immediate connectivity to major hubs and urban conveniences.
            </p>
          </div>
          
          <div className="w-full md:w-[45%] h-[350px] md:h-[500px] relative bg-zinc-100 overflow-hidden group">
            <Image src="/club-house-hires-gallery.jpg" alt="Yelahanka Location" fill className="object-cover priority" />
          </div>
        </div>

      </div>
    </section>
  );
}