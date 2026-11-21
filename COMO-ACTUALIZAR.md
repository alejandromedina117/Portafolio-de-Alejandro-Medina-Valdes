# Cómo agregar tu trabajo al portafolio

Todo el texto y las piezas se editan en un solo archivo: **`src/data/portafolio.ts`**.
Mientras falte algo, la página muestra un marco de ejemplo con el formato recomendado.

## Ver la página en tu computadora
```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321
```

## Diseños (4)
1. Copia las imágenes a `src/assets/disenos/` (JPG o PNG, ej. `diseno-1.jpg`).
2. En `portafolio.ts`, descomenta la línea `import diseno1 from '../assets/disenos/diseno-1.jpg';`
3. En la pieza, agrega `imagen: diseno1,` y un `alt` que describa lo que se ve.
4. Cambia título, contexto (cliente o empresa), descripción y herramientas.

## Fotografías (3)
Igual que los diseños, pero en `src/assets/fotos/`. Sube las fotos a buen tamaño
(mínimo 1600 px por el lado largo); el sitio las optimiza solo.

## Short de YouTube
Sube el short y copia su ID: en `https://youtube.com/shorts/AbC123xyz` el ID es `AbC123xyz`.
Pégalo en `short.youtubeId`.

## Audio
Copia el archivo (MP3 de preferencia) a `public/media/audio/` y pon la ruta en `audio.archivo`
(ej. `public/media/audio/spot.mp3` → `'/media/audio/spot.mp3'`).

## Redes y CV
- Redes: llena las `url` en `perfil.redes` (las vacías no se muestran).
- CV: reemplaza `public/cv-alejandro-medina-valdes.pdf` con la versión más reciente.

## Consejos para las descripciones
Una o dos frases por pieza: qué es, para quién fue y qué problema resolvía.
Si tienes un dato real (alcance, vistas, uso en una capacitación), inclúyelo; no inventes cifras.
