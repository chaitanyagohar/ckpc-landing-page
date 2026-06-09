'use client';

import Image from 'next/image';

const clubhouseFeatures = [
  {
    title: "Socialise and relax",
    desc: "Designed for unwinding and spending quality time—together or solo. Features include an indoor games room, reading lounge, billiards lounge, AV room, activity room, and an outdoor theatre.",
    img: "/sports.jpeg" 
  },
  {
    title: "Fitness for body and mind",
    desc: "Stay active and energized with world-class facilities, including a badminton court, fully-equipped gym, aerobics room, yoga deck, TT room, and a stunning terrace pool with a deck.",
    img: "/lifestyle-3.jpg" 
  },
  {
    title: "Convenient essentials",
    desc: "Everyday conveniences right at your doorstep. Enjoy a vibrant cafeteria, spa & salon, resident hospitality suites, creche, and a flexible workspace with a meeting room.",
    img: "/lifestyle-2.jpg" 
  }
];

export default function Lifestyle2() {
  return (
    <section id="clubhouse" className="bg-[#141414] w-full text-white py-24 md:py-40 border-t border-zinc-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Clubhouse Intro */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24 md:mb-40">
          <div className="w-full md:w-[45%]">
            <h2 className="font-nunito text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-tight mb-8">
              Find your <br />
              <span className="text-[#E35205]">happy place.</span>
            </h2>
            <p className="font-roboto text-zinc-400 text-lg md:text-xl leading-relaxed">
              Close your eyes and imagine your happy place—the one where you can leave all your worries behind and completely live in the moment. Now, open your eyes, and you're at the clubhouse at Winds of Change by CKPC, designed to be a sanctuary for unwinding, recharging and spending quality time.
            </p>
          </div>
          
          {/* Stats / Highlights */}
          <div className="w-full md:w-[40%] grid grid-cols-2 gap-8 pt-4 md:pt-12">
            <div className="border-t border-zinc-700 pt-4">
              <h4 className="font-nunito text-3xl font-bold text-white mb-1">33,000</h4>
              <p className="font-roboto text-zinc-500 text-sm uppercase tracking-widest">Sq. Ft. Clubhouse</p>
            </div>
            <div className="border-t border-zinc-700 pt-4">
              <h4 className="font-nunito text-3xl font-bold text-white mb-1">G+2</h4>
              <p className="font-roboto text-zinc-500 text-sm uppercase tracking-widest">Premium Levels</p>
            </div>
            <div className="border-t border-zinc-700 pt-4">
              <h4 className="font-nunito text-3xl font-bold text-white mb-1">67%</h4>
              <p className="font-roboto text-zinc-500 text-sm uppercase tracking-widest">Open Greenscapes</p>
            </div>
            <div className="border-t border-zinc-700 pt-4">
              <h4 className="font-nunito text-3xl font-bold text-white mb-1">438</h4>
              <p className="font-roboto text-zinc-500 text-sm uppercase tracking-widest">Exclusive Families</p>
            </div>
          </div>
        </div>

        {/* Immersive Feature List (Staggered Layout) */}
        <div className="flex flex-col gap-24 md:gap-40">
          {clubhouseFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Side */}
              <div className="w-full md:w-[40%]">
                <span className="font-roboto text-[#E35205] text-sm uppercase tracking-widest font-bold mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="font-nunito text-3xl md:text-5xl font-semibold mb-6 text-white leading-tight">
                  {feature.title}
                </h3>
                <p className="font-roboto text-zinc-400 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-[50%] h-[400px] md:h-[600px] relative bg-zinc-900 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
                <Image 
                  src={feature.img} 
                  alt={feature.title} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}