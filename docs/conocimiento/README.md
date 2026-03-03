# 📚 Base de Conocimiento

Carpeta para documentos externos que forman parte del conocimiento del proyecto.

---

## 📂 Estructura

```
conocimiento/
├── REGISTRO.md      ← Índice y resúmenes de todos los documentos
├── originales/      ← Archivos originales (PDF, DOCX, etc.)
└── resumenes/       ← Resúmenes en Markdown de cada documento
```

---

## 🔧 Cómo añadir documentos

### Opción 1: Usar el workflow (recomendado)
```
/documento
```

El workflow:
1. Te pregunta qué archivo añadir
2. Lo copia a `originales/`
3. Lee y extrae el contenido
4. Crea un resumen en `resumenes/`
5. Actualiza `REGISTRO.md`
6. Añade referencia a CONTEXT.md

### Opción 2: Manual
1. Copia el archivo a `originales/`
2. Dime: "Lee y registra docs/conocimiento/originales/archivo.pdf"

---

## 📋 Tipos de documentos soportados

| Tipo | Extensión | Soporte |
|------|-----------|---------|
| PDF | .pdf | ✅ Texto extraíble |
| Word | .docx | ✅ Texto completo |
| Texto | .txt | ✅ Completo |
| Markdown | .md | ✅ Completo |
| Excel | .xlsx | ⚠️ Mejor convertir a CSV |
| Imágenes | .png/.jpg | ⚠️ Solo si hay texto visible |

---

## 🔍 Buscar en documentos

Para buscar información en los documentos registrados:
```
"Busca en los documentos del proyecto información sobre [tema]"
```

O consulta directamente:
```
"¿Qué dice el documento [nombre] sobre [tema]?"
```

---

## 🔄 Sincronización

Esta carpeta se sincroniza con Git, así que:
- Los documentos están disponibles en todos los ordenadores
- El registro se mantiene actualizado
- Los resúmenes permiten acceso rápido sin leer originales
