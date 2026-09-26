// ─────────────────────────────────────────────────────────────────────────────
// Clientes reales de Rohlfing Concept — ÚNICA fuente de clientes.
// Usado por home (hero/marquee), /proyectos y /videos. No duplicar listas
// en otros archivos: importar desde aquí.
// ─────────────────────────────────────────────────────────────────────────────

export type Cliente = {
  name: string;
  logo: string;
  poster?: string;
  tag: string;
  desc: string;
  desde?: string;
  video?: string;
};

export const clientes: Cliente[] = [
  {
    name: "Villa Grande",
    logo: "/img/clients/client-villa-grande.png",
    poster: "/img/posters/villa-grande-mundial.jpg",
    tag: "Branding · Contenido",
    desc: "Identidad visual y contenido para restaurante de cocina paisa.",
    desde: "Desde septiembre 2025",
    video: "/videos/villa-grande-mundial.mp4",
  },
  {
    name: "Plomería Norte",
    logo: "/img/clients/client-plomeria-norte.png",
    poster: "/img/posters/plomeria-norte.jpg",
    tag: "Diseño · Redes",
    desc: "Identidad visual y contenido para empresa de plomería local.",
    desde: "Desde noviembre 2025",
    video: "/videos/plomeria-norte.mp4",
  },
  {
    name: "El Tizón Dorado",
    logo: "/img/clients/client-tizon-dorado.png",
    poster: "/img/posters/tizon-dorado-dia-del-padre.jpg",
    tag: "Branding · Contenido",
    desc: "Identidad visual y contenido para restaurante parrilla.",
    desde: "Desde marzo de 2026",
    video: "/videos/tizon-dorado-dia-del-padre.mp4",
  },
  {
    name: "Ricos Pandeyucas",
    logo: "/img/clients/client-pandeyucas.png",
    poster: "/img/posters/ricos-pandeyucas.jpg",
    tag: "Diseño · Redes",
    desc: "Identidad visual y contenido para marca de alimentos artesanales.",
    desde: "Desde febrero 2026",
    video: "/videos/ricos-pandeyucas.mp4",
  },
  {
    name: "Asanarte Droguería",
    logo: "/img/clients/client-asanarte.png",
    poster: "/img/posters/asanarte-reel.jpg",
    tag: "Identidad visual",
    desc: "Identidad visual y contenido para droguería y punto de salud.",
    desde: "Desde marzo 2025",
    video: "/videos/asanarte-reel.mp4",
  },
  {
    name: "El Jerez del Caballero",
    logo: "/img/clients/client-jerez.png",
    poster: "/img/posters/jerez-del-caballero.jpg",
    tag: "Audiovisual · Redes",
    desc: "Identidad visual y contenido para restaurante tradicional.",
    desde: "Desde abril 2026",
    video: "/videos/jerez-del-caballero.mp4",
  },
  {
    name: "Kantel",
    logo: "/img/clients/client-kantel.png",
    poster: "/img/posters/kantel-reel.jpg",
    tag: "Branding · Contenido",
    desc: "Identidad visual y contenido para restaurante de cocina tradicional.",
    video: "/videos/kantel-reel.mp4",
  },
];

// Marquee del home: todos menos Asanarte (pedido vigente).
export const marqueeClients: Cliente[] = clientes.filter((c) => c.name !== "Asanarte Droguería");
