'use client';

export default function Location() {
  return (
    <section id="location" className="bg-white w-full text-[#141414]">
      
      {/* Top Info Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">

        {/* Timeline Stats (UPDATED FOR YELAHANKA / CKPC) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-20 md:mb-32">
          
          {/* Stat 1 */}
          <div className="flex-1 border-t border-zinc-300 pt-6 relative">
            <div className="absolute top-0 left-0 w-px h-3 bg-zinc-300" />
            <h4 className="font-nunito text-xl md:text-2xl font-bold text-[#E35205] mb-2 pr-4">
              20min from<br/>Kempegowda Airport
            </h4>
            <p className="font-roboto text-zinc-600 text-base">
              A seamless, signal-free drive for your frequent travels.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 border-t border-zinc-300 pt-6 relative">
            <div className="absolute top-0 left-0 w-px h-3 bg-zinc-300" />
            <h4 className="font-nunito text-xl md:text-2xl font-bold text-[#E35205] mb-2 pr-4">
              5min from Top<br/>International Schools
            </h4>
            <p className="font-roboto text-zinc-600 text-base">
              Vidyashilp, DPS, and more—world-class education right around the corner.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 border-t border-zinc-300 pt-6 relative">
            <div className="absolute top-0 left-0 w-px h-3 bg-zinc-300" />
            <div className="absolute -top-3 right-0 w-3 h-3 border-r border-t border-zinc-300 hidden md:block" />
            <h4 className="font-nunito text-xl md:text-2xl font-bold text-[#E35205] mb-2 pr-4">
              10min from RMZ<br/>Galleria Mall
            </h4>
            <p className="font-roboto text-zinc-600 text-base">
              Premium shopping, dining, and entertainment, all just a quick drive away.
            </p>
          </div>
        </div>

        {/* Content Split (UPDATED FOR CKPC) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 relative">
          
          {/* The red crosshair accent */}
          <div className="absolute -top-12 md:-top-16 left-0 md:left-[45%] text-[#E35205] text-4xl md:text-5xl font-light leading-none">
            +
          </div>

          <div className="w-full md:w-[45%]">
            <h2 className="font-nunito text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#E35205] leading-[1.05]">
              Live where<br/>North Bengaluru<br/>stays within reach
            </h2>
          </div>

          <div className="w-full md:w-[50%] md:pt-4">
            <p className="font-roboto text-[#141414] text-base md:text-lg leading-relaxed">
              Positioned perfectly in the serene yet connected neighborhood of Yelahanka, Winds of Change ensures that convenience is not just a perk—it's a way of life. Imagine a world where your morning coffee run, school drop-offs, and weekend shopping are all friction-free. With major tech parks, elite schools, and the airport just minutes away, you'll spend less time in traffic and more time focusing on the things that matter.
            </p>
          </div>
        </div>

      </div>

      {/* Full Width Video Section */}
      {/* Note: overflow-hidden added back here to crop the oversized iframe */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        
        {/* YouTube Background Implementation */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/WEx6taVGQO4?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&loop=1&playlist=WEx6taVGQO4"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title="Background Video"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      
    </section>
  );
}