# 📧 Emails

Templates y configuración de emails.

## Templates

| Template | Trigger | Estado |
|----------|---------|--------|
| Bienvenida | Registro | ⏳ |
| Recuperar contraseña | Solicitud | ⏳ |
| Confirmación | Acción | ⏳ |
| Newsletter | Manual | ⏳ |

## Estructura

```
emails/
├── templates/       # HTML de emails
├── assets/          # Imágenes para emails
└── tests/           # Previews y tests
```

## Proveedor

- **Servicio**: [SendGrid/Resend/AWS SES]
- **Dominio verificado**: [dominio]
- **Límite mensual**: [límite]

## Variables Disponibles

```
{{nombre}} - Nombre del usuario
{{email}} - Email del usuario
{{enlace}} - Enlace de acción
{{fecha}} - Fecha actual
```

## Buenas Prácticas

- [ ] Diseño responsive
- [ ] Preview en múltiples clientes
- [ ] Opción de desuscribirse
- [ ] Versión texto plano
