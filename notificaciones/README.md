# 💬 Notificaciones

Templates de WhatsApp, SMS, Push y otras notificaciones.

## Canales

| Canal | Proveedor | Estado |
|-------|-----------|--------|
| WhatsApp | [Evolution/Twilio] | ⏳ |
| SMS | [Twilio/AWS SNS] | ⏳ |
| Push | [Firebase/OneSignal] | ⏳ |
| In-app | - | ⏳ |

## Templates WhatsApp

| Template | Trigger | Aprobado |
|----------|---------|----------|
| Bienvenida | Registro | ⏳ |
| Recordatorio | Cita | ⏳ |
| Actualización | Estado | ⏳ |

## Estructura

```
notificaciones/
├── whatsapp/        # Templates de WhatsApp
├── sms/             # Templates de SMS
├── push/            # Configs de push
└── n8n/             # Workflows de notificación
```

## Variables Comunes

```
{{nombre}} - Nombre del usuario
{{telefono}} - Teléfono
{{mensaje}} - Contenido dinámico
{{enlace}} - URL de acción
```

## Consideraciones

- [ ] Opt-in de usuarios
- [ ] Límites de envío
- [ ] Horarios de envío
- [ ] Fallback entre canales
