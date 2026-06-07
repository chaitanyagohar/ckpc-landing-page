'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#E5E4DE] text-[#141414] pt-20 lg:pt-32 pb-8 border-t border-[#141414]/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Main Footer Layout: 1 Column Mobile, 2 Columns Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24">
          
          {/* Left Column: Image, Links, and Info */}
          <div className="flex flex-col">
            
            {/* Architectural Image */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-sm aspect-[2/1] bg-zinc-300 mb-12 overflow-hidden"
            >
              <Image 
                src="/hero-bg.jpg" // Add a concrete texture or architectural detail image here
                alt="Winds of Change Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </motion.div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 text-sm font-medium tracking-[0.15em] uppercase mb-12">
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">The Estate</a>
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">Amenities</a>
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">Floor Plans</a>
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">Connectivity</a>
            </nav>

            {/* Address */}
            <div className="flex flex-col text-sm font-medium tracking-[0.15em] uppercase leading-relaxed mb-8">
              <span>Winds of Change</span>
              <span>Yelahanka, North Bengaluru</span>
              <span>Karnataka 560064</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col text-sm font-medium tracking-[0.15em] uppercase leading-relaxed mb-12">
              <a href="mailto:info@ckpcwindsofchange.com" className="hover:text-[#E35205] transition-colors">
                info@ckpcwindsofchange.com
              </a>
              <a href="tel:+917649999586" className="hover:text-[#E35205] transition-colors">
                +91 764 9999 586
              </a>
            </div>

            {/* Socials & Legal */}
            <div className="flex flex-col gap-4 text-sm font-medium tracking-[0.15em] uppercase mb-12">
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#E35205] w-max transition-colors">Instagram</a>
            </div>
            
            <a href="#" className="text-sm font-medium tracking-[0.15em] uppercase hover:text-[#E35205] transition-colors">
              Privacy Policy
            </a>
          </div>


          {/* Right Column: Editorial Contact Form */}
          <div className="flex flex-col lg:pl-12">
            <h3 className="text-base font-medium tracking-[0.15em] uppercase mb-6">
              Get in touch
            </h3>
            <p className="text-sm font-light text-zinc-600 leading-relaxed mb-12 max-w-md">
              Please submit your contact information and one of our sales associates will be in touch with you shortly.
            </p>

            <form className="flex flex-col gap-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
              
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-[#141414]">First name *</label>
                <input 
                  type="text" 
                  required
                  className="border-b border-[#141414] bg-transparent pb-2 focus:outline-none focus:border-[#E35205] transition-colors rounded-none w-full"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-[#141414]">Last name *</label>
                <input 
                  type="text" 
                  required
                  className="border-b border-[#141414] bg-transparent pb-2 focus:outline-none focus:border-[#E35205] transition-colors rounded-none w-full"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-light text-[#141414]">Email *</label>
                <input 
                  type="email" 
                  required
                  className="border-b border-[#141414] bg-transparent pb-2 focus:outline-none focus:border-[#E35205] transition-colors rounded-none w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-light text-[#141414]">Message</label>
                <input 
                  type="text" 
                  className="border-b border-[#141414] bg-transparent pb-2 focus:outline-none focus:border-[#E35205] transition-colors rounded-none w-full"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full border border-[#141414] py-4 text-sm font-medium tracking-[0.15em] uppercase hover:bg-[#141414] hover:text-[#E5E4DE] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[#141414]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-zinc-500">
          <p>© 2026 by CKPC Winds of Change.</p>
          <p>Designed & Developed by Oddlambda.</p>
        </div>

      </div>
    </footer>
  );
}