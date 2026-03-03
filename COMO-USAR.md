# 🚀 Cómo usar esta plantilla

Esta guía explica paso a paso cómo usar la plantilla para crear un nuevo proyecto.

---

## Paso 1: Copiar la plantilla

### Desde Antigravity (recomendado)

```
Di: "Copia la carpeta _PLANTILLA-PROYECTO y renómbrala a Mi-Proyecto"
```

### Manualmente

**Mac (Finder):**

1. Click derecho en `_PLANTILLA-PROYECTO`
2. "Duplicar"
3. Renombrar a tu proyecto

**Windows (Explorador):**

1. Click derecho en `_PLANTILLA-PROYECTO`
2. "Copiar"
3. "Pegar" y renombrar

**Terminal/PowerShell:**

```bash
# Mac
cp -r _PLANTILLA-PROYECTO Mi-Proyecto

# Windows
Copy-Item -Recurse _PLANTILLA-PROYECTO Mi-Proyecto
```

---

## Paso 2: Configurar GitHub 🔗

> ⚡ **Este es el primer paso técnico.** Todo proyecto se sube a GitHub desde el inicio.

### Desde Antigravity (recomendado)

```
Di: /nuevo-proyecto
```

El workflow te pedirá:

1. Tu **usuario de GitHub**
2. El **nombre del repositorio**
3. Creará el repo y hará el primer push automáticamente

### Manualmente

1. **Inicializar Git:**

```bash
cd Mi-Proyecto
git init
git add .
git commit -m "Proyecto inicial desde plantilla"
```

1. **Crear repo en GitHub:**
   - Ve a [github.com/new](https://github.com/new)
   - Nombre: `mi-proyecto`
   - Privado o público según prefieras
   - **NO** inicializar con README

2. **Conectar y subir:**

```bash
git remote add origin https://github.com/TU-USUARIO/mi-proyecto.git
git push -u origin main
```

---

## Paso 3: Levantar Docker local 🐳

> ⚡ **Todo proyecto arranca con Docker.** Base de datos y app en contenedores locales.

### Desde Antigravity

```
Di: "Levanta el entorno Docker para este proyecto"
```

### Manualmente

1. **Verificar Docker Desktop:**

```bash
docker --version
docker compose version
```

1. **Levantar servicios:**

```bash
docker compose up -d
```

1. **Verificar:**

```bash
docker compose ps
```

> 💡 El workflow `/nuevo-proyecto` crea un `docker-compose.yml` base si no existe.

---

## Paso 4: Personalizar CONTEXT.md

Este es el archivo más importante. Con `/nuevo-proyecto` se rellena automáticamente, pero puedes editarlo manualmente:

```markdown
## 🎯 Objetivo del Proyecto
[Escribe aquí qué hace tu proyecto]

## 🔗 GitHub
| Campo | Valor |
|-------|-------|
| Usuario | mi-usuario |
| Repositorio | mi-proyecto |

## 🐳 Infraestructura Local (Docker)
- [x] Docker Desktop instalado
- [x] Contenedores levantados

## ☁️ Despliegue
### Ruta: [Supabase + Vercel / VPS / Solo Docker local]
```

---

## Paso 5: Eliminar carpetas innecesarias

La plantilla incluye MUCHAS carpetas. **Borra las que no uses**.

### Guía según tipo de proyecto

**Web app simple:**

```
Conservar: backend/, frontend/, docs/, deploy/
Borrar: marketing/, ventas/, legal/, finanzas/, ux-research/, branding/
```

**Proyecto de automatización (N8N):**

```
Conservar: n8n/, docs/, notificaciones/
Borrar: frontend/, backend/, branding/, ux-research/
```

**Proyecto empresarial completo:**

```
Conservar: todo (o casi todo)
```

**Proyecto personal/hobby:**

```
Conservar: backend/, frontend/, docs/
Borrar: todo lo de negocio (marketing, ventas, legal, finanzas)
```

> 💡 **Tip**: Es mejor empezar con menos y añadir después que tener carpetas vacías.

---

## Paso 6: ¡Empezar a trabajar

```
/inicio
```

Esto lee tu CONTEXT.md y te pregunta en qué quieres trabajar.

---

## Estructura completa de la plantilla

```
_PLANTILLA-PROYECTO/
│
├── 📋 GESTIÓN
├── .agent/workflows/     # 24 comandos disponibles
├── .gitignore
├── CONTEXT.md            # ⭐ Estado del proyecto
├── README.md
├── COMO-USAR.md          # Esta guía
│
├── 💻 DESARROLLO
├── backend/              # API y servidor
├── frontend/             # Interfaz de usuario
├── n8n/                  # Workflows de automatización
├── deploy/               # Configuración de servers
├── testing/              # Tests
│
├── 📚 DOCUMENTACIÓN
├── docs/
│   ├── apis/             # Documentación de APIs
│   ├── requisitos/       # Especificaciones
│   ├── diseño/           # Mockups
│   ├── referencias/      # Documentos externos
│   ├── teams/            # Integración Teams
│   └── MANUAL-WORKFLOWS.md
│
├── 📦 RECURSOS
├── resources/
│   ├── ejemplos/
│   └── exports/
│
├── 🎨 PRODUCTO & UX
├── branding/             # Logo, colores
├── ux-research/          # User research
│
├── 💼 NEGOCIO
├── marketing/            # Campañas
├── ventas/               # Propuestas
├── legal/                # Contratos, RGPD
├── finanzas/             # Presupuesto
│
├── 📊 OPERACIONES
├── analytics/            # Métricas
│
└── 💬 COMUNICACIÓN
├── emails/               # Templates email
└── notificaciones/       # WhatsApp, SMS
```

---

## Comandos disponibles (24 total)

### 🔄 Flujo de trabajo

| Comando | Descripción |
|---------|-------------|
| `/inicio` | Empezar sesión |
| `/fin` | Terminar + sync |
| `/git-sync` | Sincronizar Git |
| `/nuevo-proyecto` | ⭐ Arrancar proyecto nuevo |
| `/importar-github` | 📥 Importar proyecto de GitHub |

### 📋 Contexto

| Comando | Descripción |
|---------|-------------|
| `/contexto` | Menú de gestión |
| `/ver-contexto` | Ver todo |
| `/actualizar-contexto` | Actualización rápida |

### 💻 Desarrollo

| Comando | Descripción |
|---------|-------------|
| `/nuevo-componente` | Crear componente |
| `/test` | Ejecutar tests |
| `/debug` | Diagnosticar errores |
| `/deploy` | Guía de deploy |

### 📝 Documentación

| Comando | Descripción |
|---------|-------------|
| `/api` | Documentar API |
| `/decision` | Decisión técnica |
| `/requisito` | Nuevo requisito |
| `/recurso` | Añadir URL/doc |
| `/meeting` | Notas reunión |

### 📊 Proyecto

| Comando | Descripción |
|---------|-------------|
| `/mapa` | Ver estructura |
| `/tareas` | Ver pendientes |
| `/cliente` | Feedback cliente |
| `/presupuesto` | Finanzas |

### 🔧 Utilidades

| Comando | Descripción |
|---------|-------------|
| `/buscar` | Buscar en proyecto |
| `/limpiar` | Limpiar temporales |
| `/backup` | Crear backup |
| `/ayuda` | Ver comandos |

> 📖 **Manual detallado**: Ver `docs/MANUAL-WORKFLOWS.md`

---

## Flujo de trabajo recomendado

```
┌────────────────────────────────────┐
│  🆕 NUEVO PROYECTO                 │
│  /nuevo-proyecto                   │
│  (GitHub + Docker + Destino)       │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  🌅 INICIO DE SESIÓN              │
│  /inicio                           │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  💻 TRABAJO                        │
│  - Desarrollar                     │
│  - /contexto para añadir notas    │
│  - /decision si decides algo      │
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  🚀 DEPLOY                        │
│  /deploy                           │
│  (Elige ruta: Supabase+Vercel/VPS)│
└────────────────────────────────────┘
              ↓
┌────────────────────────────────────┐
│  🌙 FIN                            │
│  /fin                              │
└────────────────────────────────────┘
```

---

## Checklist de nuevo proyecto

- [ ] Copiar plantilla
- [ ] Renombrar carpeta
- [ ] Ejecutar `/nuevo-proyecto` (o manualmente):
  - [ ] Configurar GitHub (usuario + repo)
  - [ ] Levantar Docker local
  - [ ] Elegir destino de producción
  - [ ] Aportar API keys si aplica
- [ ] Editar README.md
- [ ] Borrar carpetas innecesarias
- [ ] ¡Empezar con `/inicio`!

---

## Tips

- **Ver carpetas ocultas**: `Cmd + Shift + .` (Mac) o `Ver → Elementos ocultos` (Windows)
- **Ver todos los comandos**: `/ayuda`
- **Cada carpeta tiene README**: Lee las guías específicas
- **No necesitas Terminal**: Todo se puede hacer desde Antigravity
- **Mantén CONTEXT.md actualizado**: Es clave para retomar trabajo
