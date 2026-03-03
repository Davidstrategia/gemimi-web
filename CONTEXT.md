# 📋 Contexto del Proyecto - [NOMBRE]

> **Última actualización**: [FECHA]  
> **Estado**: 🚧 En planificación

---

## 🎯 Objetivo del Proyecto

[Describe brevemente qué hace este proyecto]

---

## 🔗 GitHub

| Campo | Valor |
|-------|-------|
| Usuario | [usuario-github] |
| Repositorio | [nombre-repo] |
| URL | <https://github.com/[usuario]/[repo>] |
| Rama principal | main |

- [ ] Repo creado
- [ ] Primer push realizado

---

## 🐳 Infraestructura Local (Docker)

> Todo proyecto arranca con Docker local. La base de datos y la app se ejecutan en contenedores.

### Docker Compose

| Servicio | Imagen | Puerto |
|----------|--------|--------|
| Base de datos | postgres:16 | 5432 |
| App / Backend | [imagen] | [puerto] |
| Frontend | [imagen] | 3000 |

### Estado

- [ ] Docker Desktop instalado
- [ ] `docker-compose.yml` configurado
- [ ] Contenedores levantados (`docker compose up`)
- [ ] Base de datos accesible

---

## ☁️ Despliegue (Producción)

### Ruta: [Supabase + Vercel / VPS personal / Solo Docker local]

#### Opción A: Supabase + Vercel

| Servicio | API Key / Token | Estado |
|----------|-----------------|--------|
| Supabase | `[SUPABASE_URL]` | ⏳ |
| Supabase | `[SUPABASE_ANON_KEY]` | ⏳ |
| Supabase | `[SUPABASE_SERVICE_ROLE_KEY]` | ⏳ |
| Vercel | `[VERCEL_TOKEN]` | ⏳ |

#### Opción B: VPS Personal

| Campo | Valor |
|-------|-------|
| Proveedor | [Contabo/Hetzner/otro] |
| IP | [xxx.xxx.xxx.xxx] |
| Acceso SSH | [usuario@ip] |
| Dominio | [ejemplo.com] |

> 💡 Rellena solo la opción que vayas a usar y borra la otra.

---

## 📊 Estado Actual

### Fase: [Planificación/Desarrollo/Testing/Producción]

- [ ] Requisitos definidos
- [ ] Stack elegido
- [ ] GitHub configurado
- [ ] Docker local funcionando
- [ ] Desarrollo iniciado
- [ ] Testing completado
- [ ] Desplegado

---

## 🔧 Decisiones Técnicas

### Stack

| Componente | Tecnología | Notas |
|------------|------------|-------|
| Frontend | | |
| Backend | | |
| Base de datos | | |
| Autenticación | | |

### Integraciones

- [ ] [Integración 1]
- [ ] [Integración 2]

---

## 📚 Recursos Importantes

### Documentación

- APIs: `docs/apis/`
- Requisitos: `docs/requisitos/`
- Diseños: `docs/diseño/`

### URLs de Referencia

- [ ] [Enlace 1]
- [ ] [Enlace 2]

---

## 📝 Notas y Decisiones

### 2026-02-08

- Plantilla mejorada con nuevas secciones en CONTEXT.md (GitHub, Docker, Despliegue)
- Creado workflow `/nuevo-proyecto` (setup completo: GitHub + Docker + destino)
- Creado workflow `/importar-github` (clonar repos existentes)
- Actualizado `COMO-USAR.md` con nuevo flujo de pasos
- Reescrito `deploy/README.md` con filosofía Docker-first y 3 rutas
- Actualizado workflow `/deploy` para preguntar qué ruta usar

### [FECHA]

- Proyecto iniciado
- [Decisiones tomadas]

---

## 🚀 Próximos Pasos

1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

---

## 💡 Cómo usar este archivo

**Al iniciar un nuevo chat:**
> "Lee el archivo CONTEXT.md para ver el estado del proyecto"

**Al terminar cada sesión:**
> Actualiza las secciones: Estado, Notas, Próximos Pasos
