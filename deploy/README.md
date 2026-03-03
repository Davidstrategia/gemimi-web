# 🚀 Deploy

Configuración de despliegue e infraestructura.

---

## 🐳 Entorno Local (Siempre activo)

> Todo proyecto arranca con Docker local. Es el entorno base de desarrollo.

| Servicio | Imagen | Puerto | Estado |
|----------|--------|--------|--------|
| PostgreSQL | postgres:16 | 5432 | ⏳ |
| Backend / App | [imagen] | [puerto] | ⏳ |
| Frontend | [imagen] | 3000 | ⏳ |

### Docker Compose base

```yaml
# docker-compose.yml
version: '3.8'
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_DB: proyecto_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin123
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  # Añadir más servicios según el stack elegido

volumes:
  pgdata:
```

### Comandos

| Acción | Comando |
|--------|---------|
| Levantar | `docker compose up -d` |
| Ver estado | `docker compose ps` |
| Ver logs | `docker compose logs -f` |
| Parar | `docker compose down` |
| Resetear DB | `docker compose down -v && docker compose up -d` |

---

## ☁️ Producción

### ¿Qué ruta usas?

Elige una de las tres opciones y rellena la sección correspondiente:

---

### Opción A: Supabase + Vercel

**Para:** Web apps, SaaS, proyectos con frontend Next.js/React

| Servicio | Uso | Credencial necesaria |
|----------|-----|---------------------|
| **Supabase** | Base de datos + Auth + Storage | URL, Anon Key, Service Role Key |
| **Vercel** | Hosting frontend + Serverless | Token de Vercel |

#### Variables de Entorno

```bash
# .env.local (frontend)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

# Vercel
VERCEL_TOKEN=xxx
```

#### Checklist

- [ ] Proyecto creado en Supabase
- [ ] API keys obtenidas y guardadas en CONTEXT.md
- [ ] Proyecto conectado a Vercel
- [ ] Variables de entorno configuradas en Vercel
- [ ] Dominio configurado (si aplica)
- [ ] Deploy automático desde GitHub configurado

---

### Opción B: VPS Personal

**Para:** Proyectos con control total, APIs, backends pesados, Docker en producción

| Campo | Valor |
|-------|-------|
| Proveedor | [Contabo/Hetzner/otro] |
| IP | [xxx.xxx.xxx.xxx] |
| Usuario SSH | [usuario] |
| Dominio | [ejemplo.com] |
| Puerto SSH | 22 |

#### Estructura en el VPS

```
/home/usuario/
├── proyecto/
│   ├── docker-compose.yml
│   ├── .env
│   └── nginx/
│       └── default.conf
```

#### Checklist

- [ ] Acceso SSH configurado
- [ ] Docker instalado en VPS
- [ ] `docker-compose.yml` de producción creado
- [ ] Nginx / Caddy como reverse proxy
- [ ] SSL (Let's Encrypt) configurado
- [ ] CI/CD configurado (GitHub Actions)
- [ ] Dominio apuntando al VPS

---

### Opción C: Solo Docker local

**Para:** Proyectos internos, pruebas, desarrollo sin producción todavía

> Usa solo el entorno Docker local descrito arriba. Cuando estés listo para producción, elige Opción A o B.

---

## 📋 Checklist Pre-Deploy (cualquier ruta)

- [ ] Tests pasando
- [ ] Build sin errores
- [ ] Variables de entorno configuradas
- [ ] Backup de base de datos
- [ ] CONTEXT.md actualizado con fecha de deploy
