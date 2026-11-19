# Qué falta en el portafolio

Con `npm run dev` verás etiquetas naranjas **"REEMPLAZAR · …"** donde falte algo; en
producción no aparecen. Hoy no queda ninguna.

Cada texto existe en dos idiomas: español en `src/data/*` e inglés en `src/i18n/en.ts`.
Cuando cambies uno, actualiza el otro (si falta el inglés, se muestra el español).

---

## Pendiente (opcional)

### 1. Imagen para compartir en redes (Open Graph)

Hoy se usa `public/social-card.svg`, que LinkedIn, WhatsApp y otras redes no siempre
leen. Crea `public/images/og-cover.jpg` (1200×630) y cambia `ogImage` en
`src/layouts/MainLayout.astro`.

### 2. Capturas más nítidas

- **AULA UP**: las 4 capturas miden ~600px de ancho y en escritorio se muestran a ~680px.
  Tomarlas a 1200px de ancho o más las haría más nítidas.
- **Retrato** (`public/images/portrait.jpeg`, 694×694): 1000×1000 se vería mejor en
  pantallas de alta densidad.

### 3. Vercel

- Importa el repositorio en Vercel; detecta Astro y usa `npm run build` y la carpeta `dist`.
- En *Settings → Environment Variables* define `SITE_URL` con tu dominio
  (p. ej. `https://duranpx.vercel.app`). Sin ella no se generan canonical ni sitemap.
- La versión de Node la toma de `engines` en `package.json` (`>=22.23.4`).
- `wrangler.jsonc`, `src/worker/` y `public/_headers` eran del despliegue en Cloudflare;
  Vercel los ignora, puedes borrarlos cuando quieras.

---

## Cómo activar cosas más adelante

**CV.** Copia el PDF a `public/cv-juan-duran.pdf` y en `src/data/profile.ts` cambia
`cv: { available: false, … }` a `available: true`. Mientras sea `false`, el sitio muestra
"CV bajo solicitud", que abre un correo con el asunto "Solicitud de CV".

**Repositorios privados.** AULA UP y SBuses tienen `repositoryPrivate: true` en
`projects.ts`: se muestra "Código privado" y no se enlaza. Si publicas uno, cámbialo a
`false` y aparecerá el enlace. (SBuses apunta al frontend, `DuranPX/S.Buses_FrontEnd`;
el backend está en otro repositorio.)

**Certificados y cursos.** En `src/data/credentials.ts`. El enlace (`url`) solo se
muestra si lo llenas; úsalo para enlaces públicos como Credly o Platzi. Su versión en
inglés va en `credentialsEn` (por título) dentro de `en.ts`.

**Capturas.** Guárdalas en `public/images/projects/<proyecto>/` (mejor en `.webp`) y
añádelas a `gallery` en `projects.ts` con `width`, `height` y `alt`; el pie de foto en
inglés va en `captions` de `en.ts`, en el mismo orden. Si la captura no es 16:10, añade
`fit: "contain"` para que no se recorte.

**Experiencia laboral.** En `credentials.ts` → `experience`. Solo se publica lo que
marques con `verified: true`.

**Tecnologías.** `src/data/technologies.ts`; el campo `icon` es el id de
[skillicons.dev](https://skillicons.dev).

**Idioma.** El selector ES/EN recuerda la elección. La primera visita usa el idioma del
navegador (inglés solo si el navegador no está en español). La URL siempre es `/`.

---

## Node en tu equipo

Node 22.23.4 está instalado con nvm y activo. `nvm use` falla en tu equipo por el espacio
en la ruta de usuario ("Juan Duran"); si necesitas cambiar de versión, rehaz el enlace
manualmente en PowerShell:

```powershell
Remove-Item C:\nvm4w\nodejs; New-Item -ItemType Junction -Path C:\nvm4w\nodejs -Target "C:\Users\Juan Duran\AppData\Local\nvm\v22.23.4"
```
