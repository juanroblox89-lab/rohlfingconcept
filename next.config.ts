import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/grabacion-de-video",
        destination: "/servicios/creacion-audiovisual",
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
