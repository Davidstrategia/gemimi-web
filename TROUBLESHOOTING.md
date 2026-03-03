# 🔧 Solución de Problemas (Troubleshooting)

Soluciones a problemas comunes.

---

## 📁 Carpetas y Archivos

### No veo la carpeta .agent/workflows/

**Problema**: La carpeta `.agent` no aparece en Finder/Explorador.

**Solución**: Es una carpeta oculta. Para verla:
- **Mac**: Presiona `Cmd + Shift + .`
- **Windows**: `Ver → Mostrar → Elementos ocultos`

---

### El archivo CONTEXT.md no existe

**Problema**: El proyecto no tiene CONTEXT.md.

**Solución**: 
```
Di: "Crea un archivo CONTEXT.md basado en la plantilla"
```

O copia el de `_PLANTILLA-PROYECTO/CONTEXT.md`.

---

## 🔄 Git y Sincronización

### "fatal: not a git repository"

**Problema**: El proyecto no tiene Git inicializado.

**Solución**:
```
Di: "Inicializa Git en este proyecto"
```

O en terminal: `git init`

---

### "git push" falla

**Problema**: No puedes subir cambios.

**Posibles causas y soluciones**:

1. **No hay remote configurado**:
   ```
   Di: "Conecta con mi repositorio de GitHub [URL]"
   ```

2. **Credenciales incorrectas**:
   - Mac: Revisa Keychain Access
   - Windows: Revisa Credential Manager

3. **Rama no existe en remoto**:
   ```
   Di: "Haz git push -u origin main"
   ```

---

### Conflictos de merge

**Problema**: Git dice que hay conflictos.

**Solución**:
```
Di: "Ayúdame a resolver los conflictos de Git"
```

Te mostraré los archivos en conflicto y te ayudaré a resolverlos.

---

### "Your branch is behind"

**Problema**: Hay cambios en GitHub que no tienes localmente.

**Solución**:
```
Di: "Trae los últimos cambios de GitHub"
```

O: `/git-sync` (primero hace pull)

---

## 🤖 Workflows / Comandos

### El comando /xxx no funciona

**Problema**: Un comando no hace nada o da error.

**Soluciones**:

1. **Verifica que existe**:
   ```
   Di: "Lista los workflows disponibles"
   ```

2. **Revisa el archivo**:
   - Abre `.agent/workflows/xxx.md`
   - Verifica que tiene el formato correcto

3. **El workflow necesita algo que no existe**:
   - Ej: `/inicio` necesita CONTEXT.md
   - Crea el archivo que falta

---

### Quiero crear un comando personalizado

**Solución**:
```
Di: "Crea un workflow llamado /mi-comando que haga [descripción]"
```

---

## 📊 CONTEXT.md

### CONTEXT.md está desactualizado

**Problema**: El archivo no refleja el estado real.

**Solución**:
```
/contexto
```

Y selecciona qué actualizar. O:
```
/actualizar-contexto
```

---

### No sé qué poner en CONTEXT.md

**Problema**: No sabes cómo rellenarlo.

**Solución**: Dime:
```
"Actualiza el CONTEXT.md con esta información: [describe el proyecto y estado]"
```

Yo lo formateo correctamente.

---

## 💻 Desarrollo

### Los tests no funcionan

**Problema**: `/test` no encuentra tests.

**Solución**:
1. Verifica que tienes tests configurados
2. Revisa `package.json` o configuración de tests
3. Ejecuta manualmente primero para ver el error real:
   ```
   Di: "Ejecuta npm test y muéstrame el resultado"
   ```

---

### Error al crear componente

**Problema**: `/nuevo-componente` falla.

**Posibles causas**:
1. La carpeta destino no existe
2. Ya existe un componente con ese nombre

**Solución**: Especifica la ruta completa:
```
"Crea un componente llamado Button en frontend/components/"
```

---

## 🔗 Integraciones

### No puedo conectar con Teams

**Problema**: El webhook de Teams no funciona.

**Solución**:
1. Verifica que la URL del webhook es correcta
2. Prueba con:
   ```
   Di: "Envía un mensaje de prueba al webhook de Teams [URL]"
   ```

---

### N8N no exporta/importa bien

**Problema**: Los workflows de N8N no se guardan correctamente.

**Solución**:
1. Exporta desde N8N: `Download` (no copiar JSON)
2. Guarda en `n8n/` con nombre descriptivo
3. Para importar: `Import from file`

---

## 🖥️ Problemas de Sistema

### Antigravity muy lento

**Posibles causas**:
1. Proyecto muy grande
2. Muchos archivos en node_modules

**Solución**:
```
/limpiar
```

Esto elimina archivos temporales y cachés.

---

### No reconoce mi ordenador/perfil

**Problema**: Parece que no tiene contexto de sesiones anteriores.

**Solución**:
1. Verifica que estás en la carpeta correcta del proyecto
2. Usa `/inicio` para cargar el contexto
3. Si cambiaste de ordenador, haz `git pull` primero

---

## ❓ Otros problemas

### No sé qué comando usar

```
/ayuda
```

O pregúntame directamente: "¿Cómo hago [lo que quieres hacer]?"

---

### Algo no está documentado

```
Di: "Añade [problema y solución] al troubleshooting"
```

Actualizaré este documento.

---

## 📞 Necesito más ayuda

Si ninguna de estas soluciones funciona:

1. **Describe el problema** con detalle
2. **Muéstrame el error** (copia y pega el mensaje)
3. **Dime qué intentaste** hacer

Te ayudaré a resolverlo paso a paso.
