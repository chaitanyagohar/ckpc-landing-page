'use client';

import Image from 'next/image';

// Data strictly extracted from the uploaded CKPC brochure images
const amenities = {
  social: [
    { name: "Indoor games room", desc: "Fun and friendly competition anytime" },
    { name: "Reading lounge", desc: "A quiet nook for your next great escape" },
    { name: "Billiards lounge", desc: "Challenging shots, easy company" },
    { name: "AV room", desc: "Movie nights made memorable" },
    { name: "Activity room", desc: "Space for hobbies and lively gatherings" },
    { name: "Outdoor theatre", desc: "Fresh air meets big-screen magic" },
  ],
  fitness: [
    { name: "Badminton court", desc: "Game on, anytime you want" },
    { name: "Gym", desc: "Your daily energy boost" },
    { name: "Aerobics room", desc: "Move, sweat, and feel alive" },
    { name: "Yoga deck", desc: "Find your balance in fresh air" },
    { name: "TT room", desc: "Quick rallies, endless fun" },
    { name: "Terrace pool with deck", desc: "Your grand oasis above the city" },
  ],
  essentials: [
    { name: "Cafeteria", desc: "Fresh flavors, friendly faces" },
    { name: "Multi-purpose hall with pre-function area", desc: "Space that adapts to every celebration" },
    { name: "Party lawn", desc: "Open-air fun for every occasion" },
    { name: "Spa & salon", desc: "Your everyday retreat for self-care" },
    { name: "Provision for essentials store", desc: "All you need, just steps away" },
    { name: "Resident hospitality suites", desc: "Comfort for your guests, close to home" },
    { name: "Creche", desc: "Safe, joyful care while you work or unwind" },
    { name: "Flexible workspace with meeting room", desc: "Your productivity zone, right at home" },
  ]
};

export default function AmenitiesFooter() {
  return (
    <>
      {/* Amenities Section */}
      <section id="amenities" className="bg-[#f9f9f9] w-full text-[#141414] py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="mb-16 border-b border-zinc-200 pb-6 flex items-center justify-between">
            <h2 className="font-nunito text-4xl md:text-5xl font-semibold text-[#E35205]">
              Amenities and Facilities
            </h2>
          </div>
          
          {/* 3-Column Layout perfectly matching Brochure Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            {/* Column 1: Social */}
            <div>
              <h3 className="font-nunito text-3xl font-semibold mb-8 text-[#E35205] leading-tight">
                Socialise and relax<br/>like there's no tomorrow
              </h3>
              <ul className="space-y-6">
                {amenities.social.map((item, i) => (
                  <li key={i} className="font-roboto">
                    <span className="block font-bold text-[#141414]">{item.name}</span>
                    <span className="block text-sm text-zinc-500 mt-1">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Fitness */}
            <div>
              <h3 className="font-nunito text-3xl font-semibold mb-8 text-[#E35205] leading-tight">
                Fitness for the<br/>body and mind
              </h3>
              <ul className="space-y-6">
                {amenities.fitness.map((item, i) => (
                  <li key={i} className="font-roboto">
                    <span className="block font-bold text-[#141414]">{item.name}</span>
                    <span className="block text-sm text-zinc-500 mt-1">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Essentials */}
            <div>
              <h3 className="font-nunito text-3xl font-semibold mb-8 text-[#E35205] leading-tight">
                Convenient<br/>essentials
              </h3>
              <ul className="space-y-6">
                {amenities.essentials.map((item, i) => (
                  <li key={i} className="font-roboto">
                    <span className="block font-bold text-[#141414]">{item.name}</span>
                    <span className="block text-sm text-zinc-500 mt-1">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}