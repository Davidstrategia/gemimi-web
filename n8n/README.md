# 🔄 Flujos de N8N

Carpeta para guardar los workflows de N8N del proyecto.

---

## 📂 Estructura recomendada

```
n8n/
├── README.md              # Este archivo
├── [nombre-workflow].json # Workflows exportados
└── docs/                  # Documentación de cada flujo
```

---

## 📤 Cómo exportar un workflow de N8N

1. En N8N, abre el workflow
2. Click en `⋯` (menú) → `Download`
3. Guarda el archivo `.json` en esta carpeta
4. Renombra con nombre descriptivo (ej: `notificacion-nueva-propiedad.json`)

---

## 📥 Cómo importar un workflow

1. En N8N, click en `Import from file`
2. Selecciona el archivo `.json`
3. Actualiza las credenciales necesarias

---

## 📋 Inventario de Workflows

| Archivo | Descripción | Trigger |
|---------|-------------|---------|
| `ejemplo.json` | [Descripción] | [Manual/Webhook/Schedule] |

---

## 💡 Buenas Prácticas

- **Nombra los archivos claramente** (ej: `lead-a-whatsapp.json`)
- **Documenta las credenciales necesarias** (sin secretos)
- **Versiona los cambios** con Git
- **Añade notas en N8N** para explicar pasos complejos
