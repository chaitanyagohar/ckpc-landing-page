'use client';

import { ArrowRight } from 'lucide-react';

export default function SiteVisitForm() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16">
      <h2 className="text-3xl md:text-4xl font-nunito font-semibold tracking-tight mb-8 text-[#141414]">
        Schedule a Site Visit
      </h2>
      
      <form className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row border border-zinc-300 bg-white">
          
          {/* Name Input */}
          <input 
            type="text" 
            placeholder="Name" 
            className="p-4 flex-1 border-b md:border-b-0 md:border-r border-zinc-300 outline-none placeholder:text-zinc-400 font-roboto text-[#141414]"
            required
          />
          
          {/* Phone Input with Fixed +91 */}
          <div className="flex flex-1 border-b md:border-b-0 md:border-r border-zinc-300">
            <span className="p-4 text-zinc-500 bg-zinc-50 border-r border-zinc-300 font-medium font-roboto">+91</span>
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="p-4 w-full outline-none placeholder:text-zinc-400 font-roboto text-[#141414]"
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

      <div className="mt-10 text-lg md:text-xl font-nunito font-semibold text-[#141414]">
        Call us on <span className="text-[#E35205]">+91 76499 99586</span>
      </div>
    </div>
  );
}