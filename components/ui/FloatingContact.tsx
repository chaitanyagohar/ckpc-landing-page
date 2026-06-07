'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowRight, Phone } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API CRM push
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      
      // Inject GTM / Meta Pixel lead generation events here
      // e.g., window.dataLayer.push({ event: 'generate_lead' });
      
      alert("Request received. Our luxury property advisor will contact you shortly.");
    }, 1200);
  };

  return (
    <>
      {/* The Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-16 h-16 bg-[#E35205] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#FBB03B] transition-colors group"
      >
        <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
        
        {/* Radar Ping Effect */}
        <span className="absolute inset-0 rounded-full border-2 border-[#E35205] animate-ping opacity-20 pointer-events-none"></span>
      </motion.button>

      {/* The Full-Screen Glassmorphism Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop Blur */}
            <div 
              className="absolute inset-0 bg-[#141414]/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-none shadow-2xl overflow-hidden border-t-4 border-[#E35205]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-[#E35205] transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Left Sidebar (Dark Mode) */}
                <div className="md:w-5/12 bg-[#141414] p-8 md:p-10 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-[#FBB03B] text-xs font-mono tracking-widest uppercase mb-4 block">
                      Priority Access
                    </span>
                    <h3 className="text-3xl font-lora font-medium leading-tight mb-4">
                      REGISTER <br/>
                      <span className="italic text-zinc-400">INTEREST.</span>
                    </h3>
                    <p className="text-sm font-light text-zinc-300 leading-relaxed">
                      Connect directly with our advisory team to secure your preferred unit and receive the official project dossier.
                    </p>
                  </div>

                  <div className="mt-12 space-y-6">
                    <a href="tel:+917649999586" className="flex items-center gap-4 text-sm font-light hover:text-[#FBB03B] transition-colors group">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FBB03B] transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      +91 764 9999 586
                    </a>
                  </div>
                </div>

                {/* Right Form Area (Light Mode) */}
                <div className="md:w-7/12 p-8 md:p-10 bg-white">
                  <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center space-y-6">
                    
                    <div className="space-y-1">
                      <label className="text-xs font-semibold tracking-widest uppercase text-[#141414]">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full border-b border-zinc-300 py-3 bg-transparent focus:border-[#E35205] focus:outline-none transition-colors text-zinc-900 rounded-none"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold tracking-widest uppercase text-[#141414]">Phone Number</label>
                      <div className="relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">+91</span>
                        <input 
                          type="tel" 
                          maxLength={10}
                          required
                          className="w-full border-b border-zinc-300 py-3 pl-10 bg-transparent focus:border-[#E35205] focus:outline-none transition-colors text-zinc-900 rounded-none"
                          placeholder="00000 00000"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold tracking-widest uppercase text-[#141414]">Configuration</label>
                      <select className="w-full border-b border-zinc-300 py-3 bg-transparent focus:border-[#E35205] focus:outline-none transition-colors text-zinc-900 appearance-none rounded-none cursor-pointer">
                        <option value="" disabled selected>Select interest...</option>
                        <option value="1bhk">1 Bed Residence</option>
                        <option value="2bhk">2 Bed Residence</option>
                        <option value="3bhk">3 Bed Residence</option>
                        <option value="4bhk">4 Bed Residence</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="mt-4 w-full py-4 bg-[#141414] text-white text-xs font-semibold tracking-widest uppercase hover:bg-[#E35205] transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Request Callback'}
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </button>

                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}