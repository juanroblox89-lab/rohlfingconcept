import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/sitios-web",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/registro-de-marca",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
