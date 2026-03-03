# 🤖 Manual de Workflows

Guía completa de los **24 comandos** disponibles para acelerar tu flujo de trabajo.

---

## 📋 Índice Rápido

| Comando | Descripción |
|---------|-------------|
| `/ayuda` | Ver lista de todos los comandos |
| `/inicio` | Empezar sesión de trabajo |
| `/fin` | Terminar sesión + sync |
| `/documento` | Añadir PDF, DOCX, imagen al proyecto |

---

## 🔄 Flujo de Trabajo

### /inicio
**Empezar sesión de trabajo**

Lee el CONTEXT.md y te prepara para trabajar.
```
Tú: /inicio
Yo: 📊 Proyecto: CRM Inmobiliaria
    Estado: En desarrollo
    Próximos pasos: [lista]
    ¿En qué quieres trabajar hoy?
```

---

### /fin
**Terminar sesión + sincronizar**

Guarda tu progreso y lo sube a GitHub.
```
Tú: /fin
Yo: ¿Qué has hecho hoy?
Tú: Creé el módulo de login
Yo: ✅ CONTEXT.md actualizado
    ✅ Commit + Push completado
```

---

### /git-sync
**Sincronizar con GitHub**

Pull + Add + Commit + Push rápido.
```
Tú: /git-sync
Yo: ¿Mensaje del commit?
Tú: Añadido sistema de filtros
Yo: ✅ Sincronizado
```

---

## 📋 Gestión de Contexto

### /contexto
**Menú interactivo de contexto**

Opciones: ver, añadir notas, cambiar estado, etc.
```
Tú: /contexto
Yo: 1. Ver resumen
    2. Añadir nota
    3. Cambiar estado
    4. Marcar tarea completada
    ...
```

---

### /ver-contexto
**Ver todo el contexto**

Muestra el CONTEXT.md completo formateado.

---

### /actualizar-contexto
**Actualización rápida**

Versión simplificada para actualizar CONTEXT.md.

---

## 💻 Desarrollo

### /nuevo-componente
**Crear estructura de componente**

Crea carpeta, archivo, tests y estilos.
```
Tú: /nuevo-componente
Yo: ¿Nombre? → LoginForm
Yo: ✅ Creado components/LoginForm/
```

---

### /test
**Ejecutar tests**

Ejecuta tests y muestra resumen de resultados.
```
Tú: /test
Yo: 🧪 RESULTADOS
    ✅ Pasados: 23
    ❌ Fallidos: 2
    📊 Cobertura: 78%
```

---

### /debug
**Diagnosticar errores**

Te ayuda a encontrar y resolver bugs.
```
Tú: /debug
Yo: ¿Cuál es el error?
Tú: [pego mensaje de error]
Yo: [Análisis + soluciones]
```

---

### /deploy
**Guía de despliegue**

Checklist y pasos para desplegar a staging/producción.

---

## 📝 Documentación

### /documento
**Añadir documento externo (PDF, DOCX, imagen)**

Añade documentos externos al proyecto, los registra y extrae su contenido.
```
Tú: /documento
Yo: ¿Qué archivo añadir?
Tú: /ruta/al/contrato.pdf

[Leo el contenido...]

📄 Tipo: PDF
📊 Contenido: Contrato con especificaciones

💡 Categoría sugerida: Contratos
¿Confirmas? (Enter o elige otra)

Tú: Enter
Yo: ✅ Copiado a docs/conocimiento/originales/
    ✅ Resumen creado en resumenes/contrato.md
    ✅ REGISTRO.md actualizado
    ✅ CONTEXT.md actualizado
```

**Tipos soportados**: PDF, DOCX, TXT, PNG, JPG, GIF

**Categorías automáticas**: Requisitos, Especificaciones, Contratos, Diseño, Diagramas, Referencias, Capturas, Otros

---

### /api
**Documentar API externa**

Crea documentación estructurada en docs/apis/.
```
Tú: /api
Yo: ¿Nombre de la API?
Tú: Idealista
Yo: ✅ Creado docs/apis/idealista.md
```

---

### /decision
**Registrar decisión técnica**

Documenta qué decidiste y por qué.
```
Tú: /decision
Yo: ¿Qué decisión?
Tú: Usar PostgreSQL en vez de MongoDB
Yo: ¿Por qué?
Tú: Mejor para queries relacionales
Yo: ✅ Añadido a CONTEXT.md
```

---

### /requisito
**Documentar requisito**

Crea documento en docs/requisitos/ con formato estructurado.

---

### /recurso
**Añadir URL o documento**

Añade recursos al proyecto con descripción y categoría.

---

### /meeting
**Notas de reunión**

Documenta reuniones con puntos, decisiones y action items.
```
Tú: /meeting
Yo: ¿Tema?
Tú: Revisión con cliente
Yo: ¿Qué se discutió? ¿Qué se decidió? ¿Action items?
Yo: ✅ Creado docs/referencias/meetings/[fecha].md
```

---

## � Gestión de Proyecto

### /mapa
**Ver estructura del proyecto**

Muestra todas las carpetas y su estado.
```
Tú: /mapa
Yo: 📂 PROYECTO
    💻 backend/     [12 archivos] ✅
    💻 frontend/    [8 archivos] ✅
    📚 docs/apis/   [3 APIs]
    💼 marketing/   ⏳ Vacío
```

---

### /tareas
**Ver tareas pendientes**

Muestra próximos pasos + TODOs en código.
```
Tú: /tareas
Yo: 📋 PENDIENTES
    📌 Próximos pasos:
    1. Crear dashboard
    2. Integrar API Fotocasa
    
    💻 TODOs en código:
    - api/users.js:45 - validación
```

---

### /cliente
**Registrar feedback de cliente**

Documenta feedback, bugs o peticiones de clientes.

---

### /presupuesto
**Gestionar finanzas**

Añadir gastos, ver balance, actualizar presupuesto.

---

## 🔧 Utilidades

### /buscar
**Buscar en el proyecto**

Busca texto en código y documentación.
```
Tú: /buscar
Yo: ¿Qué buscar?
Tú: validateEmail
Yo: 🔍 3 coincidencias en 2 archivos
```

---

### /limpiar
**Limpiar archivos temporales**

Elimina node_modules, .next, __pycache__, etc.

---

### /backup
**Crear copia de seguridad**

Crea un .zip del proyecto excluyendo archivos innecesarios.

---

### /ayuda
**Ver todos los comandos**

Muestra esta lista organizada por categorías.

---

## 💡 Flujo Recomendado

```
┌──────────────────────────────────────────────────────┐
│  🌅 INICIO                                           │
│  /inicio → Lee contexto → Elige tarea                │
└──────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────┐
│  💻 TRABAJO                                          │
│  /contexto → Añadir notas                           │
│  /decision → Documentar decisiones                  │
│  /debug → Resolver errores                          │
│  /test → Verificar cambios                          │
└──────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────┐
│  🌙 FIN                                              │
│  /fin → Resumen + Commit + Push                      │
└──────────────────────────────────────────────────────┘
```

---

## ⚙️ Ubicación

Los workflows están en `.agent/workflows/` (carpeta oculta).

**Ver en Mac**: `Cmd + Shift + .`

---

## 🔧 Crear tu propio workflow

1. Crea archivo `.agent/workflows/nombre.md`
2. Añade:
```yaml
---
description: Descripción corta
---
```
3. Documenta los pasos

**Anotaciones**:
- `// turbo` → Auto-ejecuta ese paso
- `// turbo-all` → Auto-ejecuta todos
