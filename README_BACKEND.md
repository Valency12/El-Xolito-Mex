# Backend - El Xolito Mex

## Instalación

1. Instalar dependencias:
```bash
cd backend
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env
# Editar .env con tus configuraciones
```

3. Crear usuarios de prueba:
```bash
npm run create-admin -- admin@elxolitomex.com Admin123! "Administrador Principal"
node scripts/createTestUsers.js
```

## Ejecutar

### Desarrollo (con auto-reload):
```bash
npm run dev
```

### Producción:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Endpoints de API

### Autenticación

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener información del usuario actual
- `POST /api/auth/refresh` - Renovar token de acceso
- `POST /api/auth/logout` - Cerrar sesión

## Credenciales de Prueba

Después de ejecutar `createTestUsers.js`, tendrás estas credenciales:

### Cliente:
- Email: `cliente@test.com`
- Password: `Cliente123!`

### Administrador:
- Email: `admin@test.com`
- Password: `Admin123!`

### Super Administrador:
- Email: `superadmin@test.com`
- Password: `SuperAdmin123!`

## Seguridad Implementada

✅ **Hasheo de contraseñas**: bcrypt con 12 salt rounds
✅ **JWT Tokens**: Access tokens (30 min) y refresh tokens (7 días)
✅ **Rate Limiting**: 5 intentos de login por 15 minutos
✅ **Helmet**: Headers de seguridad HTTP
✅ **CORS**: Configurado para orígenes permitidos
✅ **Validación**: express-validator para inputs
✅ **Sanitización**: Limpieza de inputs para prevenir XSS
✅ **SQL Injection**: Prepared statements en todas las queries

## Estructura

```
backend/
├── config/
│   └── database.js       # Conexión a SQLite
├── middleware/
│   ├── auth.js          # Autenticación JWT
│   └── security.js       # Rate limiting, Helmet, etc.
├── routes/
│   └── auth.js          # Rutas de autenticación
├── scripts/
│   ├── createAdmin.js   # Crear usuario admin
│   └── createTestUsers.js # Crear usuarios de prueba
├── server.js            # Servidor principal
└── package.json
```

