# Portafolio web — Alejandro Medina Valdés

Portafolio profesional de un Licenciado en Comunicación (UAEMex) enfocado en edición de video,
diseño gráfico, contenido digital y marketing. Fuente de verdad del contenido: el CV en la raíz
(`CV-Alejandro-Medina-Valdes_*.pdf`). No inventar métricas ni proyectos: si falta un dato, dejar
un marcador `TODO` visible y preguntarlo.

## Stack y despliegue
- **Astro** (sitio estático) → repositorio en **GitHub** → **Vercel** (importar repo en vercel.com/new;
  Vercel detecta Astro, `astro build`, salida `dist`). Cada push a `main` despliega producción;
  otras ramas generan Preview Deployments. Sin adaptador salvo que se necesite SSR (`npx astro add vercel`).
- Imágenes en `src/assets/` (optimizadas con `astro:assets`). Videos: incrustados desde Vimeo/YouTube
  (sin anuncios, carga rápida); solo clips cortos y comprimidos en `public/media/` — Vercel y GitHub
  no son buen hosting para videos pesados (GitHub rechaza archivos >100 MB).

## Estado actual (2026-11-20)
Plantilla local, sin GitHub ni Vercel todavía (el usuario pidió no configurarlos aún).
- Contenido: `src/data/portafolio.ts` (único lugar a editar). Guía para Alejandro: `COMO-ACTUALIZAR.md`.
- Piezas previstas: 4 diseños, 3 fotos editadas, 1 audio, 1 YouTube Short (vertical).
  Sin archivo, cada componente muestra un marco de ejemplo con el formato recomendado.
- Concepto visual: línea de tiempo de edición en la portada (pistas V3 Short, V2 Diseño,
  V1 Foto, A1 Audio); el cabezal rojo y el timecode del encabezado siguen el scroll.
  Colores por tipo de pieza en `src/styles/global.css` (`--video`, `--diseno`, `--foto`, `--audio`).
- Comandos: `npm run dev` (localhost:4321), `npm run build`.

## Skills del proyecto (`.claude/skills/`)
Usar las tres al construir:
- `interactive-portfolio` — arquitectura y UX (test de 30 segundos, secciones, CTAs).
- `frontend-design` (Anthropic) — dirección visual distintiva, tipografía, evitar look de plantilla.
- `portfolio-case-study-writer` — redactar casos de estudio (contexto → proceso → resultado).

## Estructura acordada (investigación NotebookLM, ver `docs/investigacion-notebooklm.md`)
Arquitectura híbrida: home de una sola página + páginas individuales por caso de estudio.
1. Hero: nombre, qué hace en una línea, diferenciador (bilingüe C1, detalle visual), CTA ver trabajo / contacto.
2. Reel (30–60 s) en el tercio superior.
3. Proyectos seleccionados: 3–6 casos de estudio (BOCAR, IEEM, diseño gráfico/infografías…).
   Tarjeta: miniatura, título, una línea, herramientas, resultado.
4. Sobre mí: UAEMex, intercambio en Universidad de Lodz (Polonia), TTEC/Booking.com.
5. Habilidades agrupadas (video/audio, diseño, comunicación/redacción, idiomas). Sin barras de porcentaje.
6. Contacto: correo, teléfono/WhatsApp, Toluca, descarga de CV.

Calidad mínima: responsive (mobile-first), foco de teclado visible, `prefers-reduced-motion`,
texto alternativo en imágenes, contenido en español (considerar versión en inglés).
