'use client';

export default function VirtualTour() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
            Explore the Master Plan
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Take a 360° interactive aerial tour of the CKPC Winds of Change project.
          </p>
        </div>

        {/* 3D Map Embed Container */}
        <div className="relative w-full h-[70vh] min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-100 flex items-center justify-center">
          
          {/* This iframe loads the Archvi tour directly as requested */}
          <iframe
            src="https://www.archvi.com/ckpc_winds_of_change/#media-name=Black&yaw=0.00&pitch=0.00&fov=16.88"
            title="CKPC 360 Virtual Tour"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            loading="lazy" // Ensures it doesn't block the main thread on load
          ></iframe>
          
        </div>
      </div>
    </section>
  );
}