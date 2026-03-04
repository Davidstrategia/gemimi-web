# 📋 Contexto del Proyecto - Gemimi Vibes Website

> **Última actualización**: 2026-03-04  
> **Estado**: 🚧 En desarrollo

---

## 🎯 Objetivo del Proyecto

Landing page premium para **Gemimi Vibes**, la app definitiva para la vida nocturna. La web presenta la app tanto a usuarios (clientes) como a discotecas (negocios), con un diseño visualmente espectacular y animaciones interactivas.

---

## 🔗 GitHub

| Campo | Valor |
|-------|-------|
| Usuario | Davidstrategia |
| Repositorio | gemimi-web |
| URL | <https://github.com/Davidstrategia/gemimi-web> |
| Rama principal | main |

- [x] Repo creado
- [x] Primer push realizado

---

## 🔧 Decisiones Técnicas

### Stack

| Componente | Tecnología | Notas |
|------------|------------|-------|
| Frontend | HTML5 + CSS3 + JavaScript vanilla | Sin frameworks, una sola página |
| Estilos | CSS puro (custom properties, animaciones) | ~45KB de estilos |
| Interactividad | JavaScript vanilla (Canvas, IntersectionObserver) | ~17KB de scripts |
| Assets | PNG, SVG, MP4 | Logo + mockup + vídeo intro |
| Servidor | Docker + Nginx Alpine en VPS OVH | Puerto 4322 |
| CI/CD | GitHub Actions | Deploy automático en push a main |
| Dominio | gemimi.app | DNS en Cloudflare (Full Strict SSL) |

### Características implementadas

- **Intro cinematográfico**: Vídeo con efecto logo neón (autoplay con audio inteligente), icono mute en esquina, botón "Ir a página principal" que aparece al terminar el vídeo
- **Cursor magnético**: Efecto glow que sigue al ratón con atracción en elementos interactivos
- **Partículas constelación**: Canvas con partículas animadas (púrpura, rosa, dorado) con líneas de conexión
- **Tarjetas 3D tilt**: Efecto perspectiva al pasar el ratón sobre feature cards y dashboard
- **Typewriter hero**: Texto con efecto máquina de escribir rotando frases
- **Contadores animados**: Números que se animan con spring easing al hacer scroll
- **Scroll reveal**: Animaciones de entrada word-by-word y stagger para secciones
- **Barra de progreso scroll**: Indicador visual del progreso de scroll
- **Efecto ripple**: En botones al hacer clic
- **Parallax sutil**: En la sección hero

### Secciones de la página

1. **Intro** — Vídeo fullscreen de neones
2. **Hero** — Título con typewriter, stats, mockup del móvil
3. **Para Clientes** — 6 feature cards (Radar, Chats, Entradas, Perfil, Favoritos, Historial)
4. **Para Discotecas** — 5 módulos del panel (Analytics IA, Events, Access Control, Team, Venue) + dashboard visual
5. **Slogan Divider** — Frase "Tú tienes las ganas. Nosotros tenemos el lugar."
6. **Martini Divider** — Copa martini SVG animada como separador
7. **CTA** — Botones App Store y Google Play
8. **Footer** — Links producto, empresa, legal + redes sociales

---

## 📁 Archivos del Proyecto

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Estructura HTML de la landing page |
| `styles.css` | Todos los estilos (45KB) |
| `script.js` | Toda la interactividad (17KB) |
| `logo-icon.png` | Icono del logo Gemimi |
| `logo-full.png` | Logo completo Gemimi |
| `logo.svg` | Logo en formato vectorial |
| `gemimi_app_mockup.png` | Mockup de la app para el hero |
| `Logo_turns_on_effect_delpmaspu_.mp4` | Vídeo de intro — logo neón encendiéndose |
| `portada hero.jpeg` | Foto de discoteca para fondo del hero |

---

## 📊 Estado Actual

### Fase: Desarrollo

- [x] Requisitos definidos
- [x] Stack elegido (HTML/CSS/JS vanilla)
- [x] GitHub configurado
- [x] Docker configurado (Dockerfile + docker-compose.yml)
- [x] CI/CD configurado (GitHub Actions)
- [x] Desarrollo iniciado
- [x] Estructura HTML completa
- [x] Estilos CSS completos
- [x] Interactividad JavaScript completa
- [x] Intro con vídeo fullscreen implementado
- [ ] Testing completado
- [ ] GitHub Secrets configurados
- [x] Primer despliegue en VPS
- [/] Proxy Host en Nginx Proxy Manager
- [ ] DNS en Cloudflare (gemimi.app → VPS)

---

## 📝 Notas y Decisiones

### 2026-03-04

- Creada infraestructura de despliegue para VPS OVH (`51.83.192.79`)
- `Dockerfile`: Nginx Alpine sirviendo archivos estáticos
- `nginx.conf`: gzip, cache headers, security headers
- `docker-compose.yml`: puerto 4322 (externo), red `web` compartida con NPM
- `.github/workflows/deploy.yml`: CI/CD automático con `appleboy/ssh-action`
- `.gitattributes`: forzar LF en archivos Docker (evitar errores CRLF Windows→Linux)
- Dominio: `gemimi.app` (NS migrando a Cloudflare)
- Generada clave SSH `ed25519` en PC local y copiada al VPS
- Repo clonado en VPS en `~/sites/gemimi-web`
- Container arrancado y verificado: `http://51.83.192.79:4322` → HTTP 200 ✅
- Fix: COPY en Dockerfile usa JSON array form para ficheros con espacios (`portada hero.jpeg`)
- NPM: Forward Port debe ser `80` (puerto interno Nginx), no `4322` (externo)
- Pendiente: configurar GitHub Secrets, terminar NPM Proxy Host, DNS Cloudflare

### 2026-03-03 (sesión 2)

- Cambiado slogan principal: "Tú tienes el deseo" → "Tú tienes las ganas"
- Nuevo vídeo de intro: `Logo_turns_on_effect_delpmaspu_.mp4` (logo neón encendiéndose)
- Vídeo intro: autoplay con audio inteligente (intenta con sonido, fallback a mudo)
- Vídeo intro: `object-fit: contain` en vez de cover (no se corta), tamaño 95%/90%
- Botón "Ir a página principal" aparece solo cuando termina el vídeo
- Icono de mute/unmute como botón circular en esquina superior derecha
- Foto de fondo en hero: `portada hero.jpeg` (discoteca con logo Gemimi proyectado)
- Fix `line-height` de headings: 1.08 → 1.15 (arreglado texto cortado en "lugar.")
- Reducido tamaño h1: `clamp(2.5rem, 5.5vw, 4.5rem)` para mejor distribución de líneas
- Añadida copa martini SVG del logo como divisor animado entre Hero y Para Clientes

### 2026-03-03 (sesión 1)

- Actualizado CONTEXT.md con el estado actual del proyecto
- El proyecto tiene todas las secciones de la landing implementadas
- Intro cinematográfico cambiado de logo+texto a vídeo fullscreen con neones
- Botón "Saltar intro" renombrado a "Ir a página principal"
- Se eliminó el auto-dismiss timer del intro y la función de remoción de fondo del logo
- Importado desde GitHub y fusionado con la plantilla de workflows

### 2026-03-01

- Reemplazada la intro original por un vídeo fullscreen (`Darkness_with_neon_lights_delpmaspu_.mp4`)
- Limpieza de código JS: eliminadas funciones obsoletas del intro anterior

### 2026-02-28

- Incorporado el logo oficial y colores de marca (púrpura, rosa, dorado)
- Mejoradas animaciones y sensación premium del diseño
- Versión inicial del sitio con todas las secciones

---

## 🚀 Próximos Pasos

### Despliegue (en progreso)

1. Configurar GitHub Secrets (VPS_HOST, VPS_USER, VPS_SSH_KEY)
2. Clonar repo en VPS: `git clone` en `~/gemimi-web`
3. Primer `docker compose up -d` manual en VPS
4. Configurar Proxy Host en NPM (gemimi.app → container:80)
5. Registro A en Cloudflare: gemimi.app → 51.83.192.79

### Mejoras pendientes

1. Optimizar rendimiento (lazy loading vídeo, compresión de imágenes)
2. Añadir meta tags Open Graph y Twitter Cards para compartir en redes
3. Testing responsive en múltiples dispositivos
4. Añadir página de política de privacidad y términos
5. Conectar botones de descarga a las tiendas reales cuando la app esté disponible
