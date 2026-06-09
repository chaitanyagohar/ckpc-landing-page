'use client';

import Image from 'next/image';

const plans = [
  { size: 'XXXL', name: 'Villa In The Sky 4BHK + Flexi-Pod', vars: '2 Variations', area: 'Between 3100sft to 3200sft', img: '/plans/1bhk.jpg' },
  { size: 'XXL', name: 'Villa In The Sky 3BHK + Flexi-Pod', vars: '2 Variations', area: 'Between 2400sft to 2550sft', img: '/plans/1bhk.jpg' },
  { size: 'XL', name: 'Terrace Garden 3BHK', vars: '4 Variations', area: 'Between 1900sft to 2100sft', img: '/plans/1bhk.jpg' },
  { size: 'L', name: 'The Perfect 3BHK', vars: '1 Variation', area: '1833sft', img: '/plans/1bhk.jpg' },
  { size: 'M', name: 'The Perfect 2BHK', vars: '1 Variation', area: '1471sft', img: '/plans/1bhk.jpg' },
];

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="bg-white w-full text-[#141414] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20 border-b border-zinc-200 pb-12">
          <h2 className="font-nunito text-3xl md:text-4xl font-semibold w-full md:w-1/3">
            XXXL your flat expectations
          </h2>
          <p className="font-roboto text-lg md:text-xl text-[#E35205] w-full md:w-1/2 leading-relaxed">
            Ten generous floor plans across five sizes — from the grand [XXXL] villa-in-the-sky to the perfectly planned [L] 3BHK and [M] 2BHK homes. Find the one that fits who you are.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
          {plans.map((plan, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-center gap-8 border-b border-zinc-200 pb-12">
              <div className="w-full sm:w-1/2 relative h-[250px] bg-zinc-50 p-4">
                <Image src={plan.img} alt={plan.name} fill className="object-contain mix-blend-multiply" />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col items-start text-left">
                <span className="font-roboto tracking-widest font-bold text-zinc-500 mb-2">[ {plan.size} ]</span>
                <h3 className="font-nunito text-2xl font-semibold mb-4 leading-tight">{plan.name}</h3>
                <p className="font-roboto text-sm text-[#E35205] font-medium">{plan.vars}</p>
                <p className="font-roboto text-sm text-zinc-500 mb-6">{plan.area}</p>
                <button className="bg-black text-white px-6 py-3 font-nunito font-semibold hover:bg-zinc-800 transition-colors">
                  Download Pricing
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}