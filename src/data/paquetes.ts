export interface Pack {
  nombre: string;
  precio: string;
  incluye: string[];
}

export interface GrupoPacks {
  id: "television" | "digital" | "mixtos";
  titulo: string;
  intro: string;
  nota?: string;
  packs: Pack[];
}

export const paquetesGrupos: GrupoPacks[] = [
  {
    id: "television",
    titulo: "Pautas en televisión",
    intro:
      "Cobertura desde Robledo en Medellín hasta San José de la Montaña, llegando a todo el norte de Antioquia con noticias y programas de la región. Creación completa de comerciales y programación organizada según los objetivos de tu marca.",
    packs: [
      {
        nombre: "Pack Basic",
        precio: "$300.000",
        incluye: [
          "Transmisión durante 7 días",
          "9 emisiones diarias",
          "Creación de 2 comerciales",
          "Logística audiovisual profesional",
        ],
      },
      {
        nombre: "Pack Supreme",
        precio: "$600.000",
        incluye: [
          "Transmisión durante 14 días",
          "10 emisiones diarias",
          "Creación de 3 comerciales",
          "Logística audiovisual profesional",
        ],
      },
      {
        nombre: "Pack Premier",
        precio: "$900.000",
        incluye: [
          "Transmisión durante 30 días",
          "12 emisiones diarias",
          "Creación de 5 comerciales",
          "Logística audiovisual profesional",
        ],
      },
    ],
  },
  {
    id: "digital",
    titulo: "Publicidad digital",
    intro:
      "Creamos y gestionamos contenido para redes sociales que mantiene activa tu marca, conecta con tu audiencia y convierte cada publicación en una oportunidad para crecer.", // TODO(cliente): confirmar contenido de paquetes fuera de San Pedro
    nota: "Red social adicional +$30.000",
    packs: [
      {
        nombre: "Pack Inicial",
        precio: "$290.000",
        incluye: [
          "3 videos inferiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
      {
        nombre: "Pack Digital",
        precio: "$390.000",
        incluye: [
          "4 videos inferiores a 60 s",
          "2 videos superiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
      {
        nombre: "Pack Aumento",
        precio: "$520.000",
        incluye: [
          "6 videos inferiores a 60 s",
          "3 videos superiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
    ],
  },
  {
    id: "mixtos",
    titulo: "Packs mixtos (TV + redes)",
    intro:
      "Llevamos tu marca a la televisión y las redes sociales con campañas integrales que combinan alcance, contenido y presencia para conectar con más personas.", // TODO(cliente): confirmar contenido de paquetes fuera de San Pedro
    nota: "Red social adicional +$30.000",
    packs: [
      {
        nombre: "Pack I Publicitario",
        precio: "$499.000",
        incluye: [
          "Transmisión durante 7 días",
          "9 emisiones diarias",
          "Creación de 2 comerciales",
          "Logística audiovisual profesional",
          "3 videos inferiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
      {
        nombre: "Pack II Publicitario",
        precio: "$899.000",
        incluye: [
          "Transmisión durante 14 días",
          "10 emisiones diarias",
          "Creación de 3 comerciales",
          "Logística audiovisual profesional",
          "4 videos inferiores a 60 s",
          "2 videos superiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
      {
        nombre: "Pack III Publicitario",
        precio: "$1.299.000",
        incluye: [
          "Transmisión durante 30 días",
          "12 emisiones diarias",
          "Creación de 5 comerciales",
          "Logística audiovisual profesional",
          "6 videos inferiores a 60 s",
          "3 videos superiores a 60 s",
          "Grabación de los videos",
          "2 afiches digitales",
          "Administración de una red social",
        ],
      },
    ],
  },
];

export const paquetesTelevision: Pack[] = paquetesGrupos[0].packs;
export const paquetesDigitales: Pack[] = paquetesGrupos[1].packs;
export const paquetesMixtos: Pack[] = paquetesGrupos[2].packs;
