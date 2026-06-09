import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**", // Yeh aapke Cloudinary account ke saare assets ko allow kar dega
      },
    ],
  },
};

export default nextConfig;