import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Whitelist the quality levels you are using
    qualities: [75, 85], 
  },
};

export default nextConfig;