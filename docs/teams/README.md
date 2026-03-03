# 📱 Integración con Microsoft Teams

Guía para conectar el proyecto con Microsoft Teams.

---

## 🔗 Opciones de Integración

### 1. GitHub → Teams (Notificaciones)
1. En Teams: canal → `+` → `GitHub`
2. Conecta tu cuenta y selecciona el repo

### 2. Webhook para N8N
1. En Teams: canal → `⋯` → `Conectores` → `Incoming Webhook`
2. Copia la URL

**URL del Webhook:**
```
TEAMS_WEBHOOK_URL=
```

### 3. SharePoint (Documentación)
Sincroniza `docs/` con SharePoint para compartir con el equipo.

---

## 📋 Próximos pasos

- [ ] Crear canal en Teams
- [ ] Configurar GitHub connector
- [ ] Crear webhook para alertas
