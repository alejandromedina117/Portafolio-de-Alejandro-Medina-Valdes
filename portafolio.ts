import type { ImageMetadata } from 'astro';

/*
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO DEL PORTAFOLIO
 *  Todo lo que se ve en la página sale de este archivo.
 *  Para agregar una imagen:
 *    1. Copia el archivo a src/assets/disenos/ o src/assets/fotos/
 *    2. Descomenta (o escribe) su import aquí abajo
 *    3. Ponlo en el campo `imagen` de la pieza correspondiente
 * ─────────────────────────────────────────────────────────────
 */

// import diseno1 from '../assets/disenos/diseno-1.jpg';
// import diseno2 from '../assets/disenos/diseno-2.jpg';
// import diseno3 from '../assets/disenos/diseno-3.jpg';
// import diseno4 from '../assets/disenos/diseno-4.jpg';
// import foto1 from '../assets/fotos/foto-1.jpg';
// import foto2 from '../assets/fotos/foto-2.jpg';
// import foto3 from '../assets/fotos/foto-3.jpg';

export type Pieza = {
  titulo: string;
  descripcion: string;
  /** Cliente, empresa o "Proyecto personal" */
  contexto?: string;
  herramientas: string[];
  /** Proporción del marco mientras no haya imagen, p. ej. '4/5', '1/1', '3/2' */
  proporcion: string;
  /** Texto que se muestra en el marco vacío, con el formato recomendado */
  formatoSugerido: string;
  imagen?: ImageMetadata;
  /** Texto alternativo: describe lo que se ve en la imagen */
  alt?: string;
};

export const perfil = {
  nombre: 'Alejandro Medina Valdés',
  titulo: 'Licenciado en Comunicación',
  resumen:
    'Edito video y audio, diseño piezas gráficas y produzco contenido digital, en español y en inglés.',
  correo: 'alejandromedina117@gmail.com',
  telefono: '+52 729 182 5482',
  whatsapp: '527291825482',
  ubicacion: 'Toluca, Estado de México',
  cv: '/cv-alejandro-medina-valdes.pdf',
  // Agrega o quita redes. Deja la url vacía para ocultarla.
  redes: [
    { nombre: 'LinkedIn', url: '' },
    { nombre: 'Instagram', url: '' },
    { nombre: 'Behance', url: '' },
  ],
};

export const short = {
  titulo: 'Título del short',
  descripcion:
    'Cuenta en dos o tres frases de qué trata el video, para quién lo hiciste y qué buscabas comunicar.',
  contexto: 'Proyecto personal',
  herramientas: ['Premiere Pro', 'Audition'],
  /**
   * ID del video de YouTube. En https://youtube.com/shorts/AbC123xyz el ID es "AbC123xyz".
   * Déjalo vacío para mostrar el marco de ejemplo.
   */
  youtubeId: '',
};

export const disenos: Pieza[] = [
  {
    titulo: 'Diseño 1',
    descripcion: 'Qué es la pieza (infografía, banner, post…), para quién fue y qué problema resolvía.',
    contexto: 'BOCAR',
    herramientas: ['Illustrator'],
    proporcion: '4/5',
    formatoSugerido: 'Vertical 4:5, 1080 × 1350 px',
  },
  {
    titulo: 'Diseño 2',
    descripcion: 'Qué es la pieza, para quién fue y qué problema resolvía.',
    contexto: 'Instituto Electoral del Estado de México',
    herramientas: ['Photoshop'],
    proporcion: '1/1',
    formatoSugerido: 'Cuadrado 1:1, 1080 × 1080 px',
  },
  {
    titulo: 'Diseño 3',
    descripcion: 'Qué es la pieza, para quién fue y qué problema resolvía.',
    contexto: 'Proyecto personal',
    herramientas: ['Canva'],
    proporcion: '1/1',
    formatoSugerido: 'Cuadrado 1:1, 1080 × 1080 px',
  },
  {
    titulo: 'Diseño 4',
    descripcion: 'Qué es la pieza, para quién fue y qué problema resolvía.',
    contexto: 'Proyecto personal',
    herramientas: ['Illustrator', 'Photoshop'],
    proporcion: '16/9',
    formatoSugerido: 'Horizontal 16:9, 1920 × 1080 px',
  },
];

export const fotos: Pieza[] = [
  {
    titulo: 'Fotografía 1',
    descripcion: 'Dónde se tomó, qué querías mostrar y qué ajustaste en la edición.',
    herramientas: ['Photoshop'],
    proporcion: '2/3',
    formatoSugerido: 'Vertical 2:3, mínimo 1600 px de alto',
  },
  {
    titulo: 'Fotografía 2',
    descripcion: 'Dónde se tomó, qué querías mostrar y qué ajustaste en la edición.',
    herramientas: ['Photoshop'],
    proporcion: '3/2',
    formatoSugerido: 'Horizontal 3:2, mínimo 2000 px de ancho',
  },
  {
    titulo: 'Fotografía 3',
    descripcion: 'Dónde se tomó, qué querías mostrar y qué ajustaste en la edición.',
    herramientas: ['Photoshop'],
    proporcion: '2/3',
    formatoSugerido: 'Vertical 2:3, mínimo 1600 px de alto',
  },
];

export const audio = {
  titulo: 'Título de la pieza de audio',
  descripcion:
    'Qué es (podcast, spot, jingle, mezcla…), para qué se usó y qué hiciste tú: grabación, edición, mezcla o música.',
  herramientas: ['Audition', 'FL Studio'],
  /** Archivo dentro de public/. Ejemplo: public/media/audio/pieza.mp3 → '/media/audio/pieza.mp3' */
  archivo: '/media/audio/pieza.mp3',
};

export const experiencia = [
  {
    puesto: 'Representante bilingüe de servicio al cliente',
    lugar: 'TTEC (Booking.com)',
    fechas: 'Abr 2025 – Sep 2026',
    detalle:
      'Atención en español e inglés a clientes internacionales, solución de problemas técnicos y manejo de situaciones de estrés.',
  },
  {
    puesto: 'Editor de imagen y video (practicante)',
    lugar: 'BOCAR',
    fechas: 'Jul 2024 – Feb 2025',
    detalle:
      'Contenido interactivo para capacitación, edición de videos y cursos virtuales, banners, infografías y comunicados.',
  },
  {
    puesto: 'Editor de video y contenido (practicante)',
    lugar: 'Instituto Electoral del Estado de México',
    fechas: 'Ago 2023 – Dic 2023',
    detalle:
      'Videos informativos, infografías y banners; análisis de contenido y creación y análisis de discursos.',
  },
];

export const formacion = [
  {
    titulo: 'Intercambio estudiantil',
    lugar: 'Universidad de Lodz, Polonia',
    fechas: 'Feb 2024 – Jul 2024',
  },
  {
    titulo: 'Licenciatura en Comunicación',
    lugar: 'Universidad Autónoma del Estado de México',
    fechas: 'Ago 2020 – Dic 2023',
  },
];

export const sobreMi =
  'Soy comunicólogo y trabajo entre el video, el diseño y la escritura. He hecho cursos virtuales, videos informativos, infografías y banners para empresas e instituciones, cuidando el detalle visual y los tiempos de entrega. Me adapto rápido a nuevos equipos y herramientas, y trabajo con la misma soltura en español que en inglés.';

export const habilidades = [
  { grupo: 'Video y audio', items: ['Premiere Pro', 'Audition', 'CapCut', 'FL Studio', 'Corrección de color'] },
  { grupo: 'Diseño gráfico', items: ['Photoshop', 'Illustrator', 'Canva', 'Infografías', 'Banners y plantillas'] },
  { grupo: 'Comunicación', items: ['Redacción digital y corporativa', 'Contenido de capacitación', 'Análisis de discurso'] },
];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Avanzado, C1 IELTS' },
  { idioma: 'Alemán', nivel: 'Básico-intermedio, A2' },
  { idioma: 'Francés', nivel: 'Básico' },
];
