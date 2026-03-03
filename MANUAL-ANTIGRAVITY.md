# 📚 Manual de Organización de Proyectos en Antigravity

> **Autor**: Gabriel  
> **Versión**: 3.0  
> **Última actualización**: 2026-01-21

Este manual explica paso a paso cómo organizar tus proyectos en Antigravity para trabajar de forma eficiente.

---

## 📖 Índice

0. [Configurar Perfiles](#0-configurar-perfiles)
1. [Primeros Pasos](#1-primeros-pasos)
2. [Crear un Nuevo Proyecto](#2-crear-un-nuevo-proyecto)
3. [El Sistema de Contexto](#3-el-sistema-de-contexto)
4. [Organización de Chats](#4-organización-de-chats)
5. [Sincronización entre Ordenadores](#5-sincronización-entre-ordenadores)
6. [Usar los Workflows (Comandos)](#6-usar-los-workflows-comandos)
7. [Estructura de Carpetas](#7-estructura-de-carpetas)
8. [Rutina de Trabajo Diaria](#8-rutina-de-trabajo-diaria)

---

## 0. Configurar Perfiles

### ¿Por qué usar perfiles?

Los perfiles te permiten **separar proyectos personales de proyectos de empresa**. Cada perfil tiene:
- Su propio espacio de trabajo (carpeta)
- Sus propios chats e historial
- Su propia configuración

### Ejemplo de organización

| Perfil | Para qué | Carpeta |
|--------|----------|---------|
| **Gabriel** | Proyectos personales | `Antigravity Gabriel/` |
| **StrategiaLabs** | Proyectos de empresa | `Antigravity StrategiaLabs/` |

### Cómo crear un perfil nuevo

1. Abre Antigravity
2. Ve a **Configuración** (icono de engranaje)
3. Busca **Perfiles** o **Workspaces**
4. Click en **Nuevo perfil**
5. Nombre: `StrategiaLabs` (o el que quieras)
6. Carpeta: Elige o crea una carpeta dedicada

### Estructura recomendada

```
Desktop/
├── Antigravity Gabriel/           ← Perfil personal
│   ├── _PLANTILLA-PROYECTO/
│   ├── MANUAL-ANTIGRAVITY.md
│   └── [Proyectos personales...]
│
└── Antigravity StrategiaLabs/     ← Perfil empresa
    ├── _PLANTILLA-PROYECTO/       ← Copia la plantilla aquí también
    └── [Proyectos de empresa...]
```

### Cambiar entre perfiles

- En Antigravity, selecciona el perfil desde el menú
- Cada perfil abre en su carpeta correspondiente
- Los chats de un perfil NO se mezclan con otro

### Configuración de Git por perfil

Puedes usar diferentes cuentas de GitHub para cada perfil:

**Perfil personal (Gabriel):**
```bash
git config user.name "Gabriel"
git config user.email "gabriel@personal.com"
```

**Perfil empresa (StrategiaLabs):**
```bash
git config user.name "Gabriel - StrategiaLabs"
git config user.email "gabriel@strategialabs.com"
```

> 💡 **Tip**: Configura Git dentro de cada carpeta de proyecto para que use las credenciales correctas automáticamente.

---

## 1. Primeros Pasos

### ¿Qué necesitas?

1. **Antigravity** instalado
2. **Git** instalado:
   - **Mac**: `brew install git`
   - **Windows**: Descargar de [git-scm.com](https://git-scm.com)
3. **Cuenta de GitHub** (para sincronizar)

### Tu espacio de trabajo

Todos tus proyectos estarán en:

**Mac:**
```
~/Desktop/Antigravity Gabriel/
```

**Windows:**
```
C:\Users\TuUsuario\Desktop\Antigravity Gabriel\
```

Estructura:
```
Antigravity Gabriel/
├── _PLANTILLA-PROYECTO/    ← Plantilla para nuevos proyectos
├── MANUAL-ANTIGRAVITY.md   ← Este manual
├── CRM-Inmobiliaria/       ← Ejemplo de proyecto
└── [Más proyectos...]
```

### Ver carpetas ocultas (importante)

Algunas carpetas empiezan con punto (`.`) y son ocultas.

**Mac (Finder):**
```
Cmd + Shift + .
```

**Windows (Explorador de archivos):**
```
Ver → Mostrar → Elementos ocultos
```
O: `Ctrl + H` en algunas versiones

Las verás aparecer en gris/transparente.

---

## 2. Crear un Nuevo Proyecto

### Paso 1: Copiar la plantilla

**Mac (Terminal):**
```bash
cd ~/Desktop/Antigravity\ Gabriel/
cp -r _PLANTILLA-PROYECTO Mi-Nuevo-Proyecto
```

**Windows (PowerShell):**
```powershell
cd "C:\Users\TuUsuario\Desktop\Antigravity Gabriel"
Copy-Item -Recurse _PLANTILLA-PROYECTO Mi-Nuevo-Proyecto
```

**O visualmente:** En Finder/Explorador, copia la carpeta `_PLANTILLA-PROYECTO` y renómbrala.

### Paso 2: Personalizar

Abre estos archivos y edítalos:

**README.md** - Cambia:
```markdown
# Mi Nuevo Proyecto

Descripción de lo que hace el proyecto...
```

**CONTEXT.md** - Cambia:
```markdown
# 📋 Contexto del Proyecto - Mi Nuevo Proyecto

## 🎯 Objetivo del Proyecto
[Escribe el objetivo aquí]
```

### Paso 3: Eliminar carpetas innecesarias

La plantilla tiene MUCHAS carpetas. Borra las que no uses:
- ¿No tienes marketing? Borra `marketing/`
- ¿No hay legal? Borra `legal/`
- etc.

### Paso 4: Inicializar Git

```bash
cd Mi-Nuevo-Proyecto
git init
git add .
git commit -m "Proyecto inicial"
```

### Paso 5: Subir a GitHub

1. Crea un repo en GitHub (público o privado)
2. Conecta:
```bash
git remote add origin https://github.com/TU-USUARIO/mi-nuevo-proyecto.git
git push -u origin main
```

**¡Listo!** Ya tienes tu proyecto configurado.

---

## 3. El Sistema de Contexto

### ¿Qué es CONTEXT.md?

Es el **archivo más importante** del proyecto. Contiene:
- Qué hace el proyecto
- En qué estado está
- Qué decisiones se han tomado
- Qué falta por hacer

### ¿Por qué es importante?

Cuando vuelvas a trabajar (mañana, la semana que viene, en otro ordenador), lees CONTEXT.md y sabes exactamente dónde lo dejaste.

### Cómo usarlo

**Al EMPEZAR a trabajar:**
```
Tú: /inicio
Yo: [Leo CONTEXT.md y te muestro resumen]
    ¿En qué quieres trabajar hoy?
```

O manualmente:
```
Tú: Lee el archivo CONTEXT.md
```

**DURANTE el trabajo:**
```
Tú: /contexto
Yo: ¿Qué quieres hacer?
    1. Añadir nota
    2. Cambiar estado
    3. ...
Tú: 1
Yo: ¿Qué nota?
Tú: Integré la API de Idealista
Yo: ✅ Añadido
```

**Al TERMINAR:**
```
Tú: /fin
Yo: ¿Qué hiciste hoy?
Tú: Creé el módulo de login y conecté la base de datos
Yo: ✅ Actualizado CONTEXT.md
    ✅ Subido a GitHub
```

### Ver todo el contexto

```
Tú: /ver-contexto
Yo: [Muestra todo el CONTEXT.md formateado]
```

---

## 4. Organización de Chats

### El problema

Si usas un solo chat para todo, se mezclan temas y pierdes contexto.

### La solución

Usa **chats separados por área**:

| Chat | Para qué |
|------|----------|
| "CRM - Planificación" | Decidir arquitectura, requisitos |
| "CRM - Backend" | Desarrollar la API |
| "CRM - Frontend" | Desarrollar la UI |
| "CRM - N8N" | Automatizaciones |

### ¿Cómo funciona?

**Todos los chats trabajan sobre LA MISMA carpeta del proyecto.**

La diferencia es que cada chat tiene su propio historial de conversación.

### Cómo crear un chat nuevo

1. Cierra el chat actual (o abre nueva ventana)
2. Navega a la carpeta del proyecto
3. Inicia nuevo chat
4. Di: "Vamos a trabajar en el Backend. Lee CONTEXT.md primero."

### Cuándo crear un chat nuevo

- Cuando cambias de área (frontend → backend)
- Cuando empiezas una funcionalidad muy diferente
- Cuando quieres empezar "limpio" sin contexto viejo

---

## 5. Sincronización entre Ordenadores

### El problema

Tienes código en el ordenador de casa, pero estás en la oficina.

### La solución: Git + GitHub

Todo el código y documentación se sube a GitHub. Luego lo bajas en el otro ordenador.

### Setup inicial (una vez por ordenador)

**Opción 1: Desde Antigravity** (recomendado)
```
Di: "Clona el repositorio https://github.com/TU-USUARIO/crm-inmobiliaria.git"
```

**Opción 2: Desde Terminal/PowerShell**

Mac:
```bash
cd ~/Desktop/Antigravity\ Gabriel/
git clone https://github.com/TU-USUARIO/crm-inmobiliaria.git
```

Windows:
```bash
cd "C:\Users\TuUsuario\Desktop\Antigravity Gabriel"
git clone https://github.com/TU-USUARIO/crm-inmobiliaria.git
```

### Uso diario (sin salir de Antigravity)

**Al EMPEZAR a trabajar:**
```
/inicio
```
Este comando ya incluye verificar si hay cambios nuevos.

O dime directamente:
```
"Haz git pull para traer los últimos cambios"
```

**Al TERMINAR de trabajar:**
```
/fin
```
Este comando:
1. Te pregunta qué hiciste
2. Actualiza CONTEXT.md
3. Hace commit y push automáticamente

**Para sincronizar en cualquier momento:**
```
/git-sync
```
O dime: "Sube los cambios a GitHub"

> 💡 **No necesitas abrir Terminal**. Todo se puede hacer desde Antigravity con los comandos o pidiéndomelo directamente.

### ¿Qué se sincroniza?

| ✅ SÍ se sincroniza | ❌ NO se sincroniza |
|---------------------|---------------------|
| Todo el código | `node_modules/` |
| Documentación | Archivos `.env` |
| Workflows | Carpeta `.gemini/` |
| CONTEXT.md | Archivos temporales |

### Si hay conflictos

Si modificaste el mismo archivo en dos ordenadores:
```bash
git pull
# Git te avisará del conflicto
# Edita el archivo para resolver
git add .
git commit -m "Resuelto conflicto"
git push
```

---

## 6. Usar los Workflows (Comandos)

### ¿Qué son?

Comandos que escribes para que yo haga tareas automáticamente.

### Los más importantes

| Comando | Qué hace | Cuándo usarlo |
|---------|----------|---------------|
| `/inicio` | Lee contexto, te prepara | Al empezar a trabajar |
| `/fin` | Guarda todo, sube a GitHub | Al terminar |
| `/ayuda` | Muestra todos los comandos | Cuando no recuerdes |

### Lista completa (23 comandos)

**🔄 Flujo de trabajo**
```
/inicio     → Empezar sesión
/fin        → Terminar + sync
/git-sync   → Solo sincronizar
```

**📋 Contexto**
```
/contexto          → Menú para gestionar
/ver-contexto      → Ver todo el contexto
/actualizar-contexto → Actualización rápida
```

**💻 Desarrollo**
```
/nuevo-componente → Crear componente
/test            → Ejecutar tests
/debug           → Ayuda con errores
/deploy          → Guía para desplegar
```

**📝 Documentación**
```
/api       → Documentar API
/decision  → Registrar decisión técnica
/requisito → Nuevo requisito
/recurso   → Añadir URL o documento
/meeting   → Notas de reunión
```

**📊 Proyecto**
```
/mapa        → Ver estructura del proyecto
/tareas      → Ver tareas pendientes
/cliente     → Registrar feedback de cliente
/presupuesto → Gestionar finanzas
```

**🔧 Utilidades**
```
/buscar  → Buscar en todo el proyecto
/limpiar → Limpiar archivos temporales
/backup  → Crear copia de seguridad
/ayuda   → Ver todos los comandos
```

### Ejemplo de uso

```
Tú: /decision
Yo: ¿Qué decisión tomaste?
Tú: Usar PostgreSQL en vez de MongoDB
Yo: ¿Por qué?
Tú: Mejor para queries relacionales
Yo: ¿Alternativas consideradas?
Tú: MongoDB, pero no soporta bien las relaciones
Yo: ✅ Añadido a CONTEXT.md con fecha de hoy
```

### Manual detallado de workflows

Para ejemplos y detalles de cada comando, ver:
```
docs/MANUAL-WORKFLOWS.md
```

---

## 7. Estructura de Carpetas

### Estructura completa

```
PROYECTO/
│
├── 📋 GESTIÓN
├── .agent/workflows/     ← Comandos (oculto)
├── .gitignore
├── CONTEXT.md            ← ⭐ El más importante
├── README.md
│
├── 💻 DESARROLLO
├── backend/
├── frontend/
├── n8n/                  ← Workflows de N8N
├── deploy/               ← Configuración de servers
├── testing/
│
├── 📚 DOCUMENTACIÓN
├── docs/
│   ├── apis/             ← Documentación de APIs
│   ├── requisitos/
│   ├── diseño/           ← Mockups
│   ├── referencias/
│   ├── teams/            ← Integración Teams
│   └── MANUAL-WORKFLOWS.md
│
├── 📦 RECURSOS
├── resources/
│
├── 🎨 PRODUCTO
├── branding/             ← Logo, colores
├── ux-research/          ← Investigación de usuarios
│
├── 💼 NEGOCIO
├── marketing/
├── ventas/
├── legal/
├── finanzas/
│
├── 📊 OPERACIONES
├── analytics/
│
└── 💬 COMUNICACIÓN
├── emails/               ← Templates de email
└── notificaciones/       ← WhatsApp, SMS
```

### Cada carpeta tiene un README

Cuando entres en una carpeta, lee su README.md para ver qué poner ahí.

### No necesitas todas

Borra las carpetas que no uses. Es mejor tener menos y ordenado.

---

## 8. Rutina de Trabajo Diaria

### Resumen visual

```
┌─────────────────────────────────────────┐
│  🌅 INICIO (5 min)                      │
│                                         │
│  1. git pull                            │
│  2. /inicio                             │
│  3. Elegir en qué trabajar              │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  💻 TRABAJO (tu sesión)                 │
│                                         │
│  - Desarrollar                          │
│  - /contexto si decides algo importante │
│  - /decision si tomas decisión técnica  │
│  - /git-sync si quieres guardar parcial │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│  🌙 FIN (5 min)                         │
│                                         │
│  1. /fin                                │
│  2. Resumir qué hiciste                 │
│  3. ¡Listo! Todo guardado y subido      │
└─────────────────────────────────────────┘
```

### Checklist rápido

**Al empezar:**
- [ ] `git pull`
- [ ] `/inicio`
- [ ] Elegir tarea

**Al terminar:**
- [ ] `/fin`
- [ ] Describir trabajo
- [ ] Verificar que se subió

---

## 📋 Checklist de Nuevo Proyecto

- [ ] Copiar `_PLANTILLA-PROYECTO/`
- [ ] Renombrar carpeta
- [ ] Editar `README.md`
- [ ] Editar `CONTEXT.md`
- [ ] Borrar carpetas innecesarias
- [ ] `git init`
- [ ] Crear repo en GitHub
- [ ] `git remote add origin URL`
- [ ] `git add . && git commit -m "Initial"`
- [ ] `git push -u origin main`

---

## ❓ Preguntas Frecuentes

### ¿Dónde están los comandos/workflows?
En `.agent/workflows/` (carpeta oculta). Para verla:
- **Mac**: `Cmd + Shift + .`
- **Windows**: `Ver → Mostrar → Elementos ocultos`

### ¿Cómo veo todos los comandos disponibles?
Escribe `/ayuda`

### ¿Los chats se sincronizan entre ordenadores?
Sí, automáticamente con tu cuenta de Antigravity.

### ¿Y los workflows?
Los workflows están en el proyecto, así que se sincronizan con Git.

### ¿Puedo crear mis propios comandos?
Sí. Crea un archivo `.agent/workflows/mi-comando.md` con el formato:
```yaml
---
description: Lo que hace mi comando
---
# Pasos
1. ...
2. ...
```
