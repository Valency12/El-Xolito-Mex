# Instrucciones de Uso - Sistema de Autenticación

## 🚀 Inicio Rápido

### 1. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 2. Crear usuarios de prueba

```bash
# Crear usuarios de prueba (cliente, admin, super admin)
node scripts/createTestUsers.js
```

### 3. Iniciar el servidor backend

```bash
# En desarrollo (con auto-reload)
npm run dev

# O en producción
npm start
```

El servidor estará corriendo en `http://localhost:3000`

### 4. Abrir el frontend

Abre `ElXolitoMex/index.html` en tu navegador (puedes usar Live Server de VS Code o similar).

**IMPORTANTE**: El frontend debe estar en `http://localhost:5501` o `http://127.0.0.1:5501` para que CORS funcione correctamente.

## 🔑 Credenciales de Prueba

Después de ejecutar `createTestUsers.js`, puedes usar estas credenciales:

### 👤 Cliente
- **Email**: `cliente@test.com`
- **Password**: `Cliente123!`

### 👨‍💼 Administrador
- **Email**: `admin@test.com`
- **Password**: `Admin123!`

### 👑 Super Administrador
- **Email**: `superadmin@test.com`
- **Password**: `SuperAdmin123!`

## 📋 Funcionalidades Implementadas

### ✅ Registro de Usuario
- Validación de email único
- Validación de contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número)
- Hasheo seguro de contraseñas con bcrypt
- Generación de tokens JWT

### ✅ Inicio de Sesión
- Autenticación con email y contraseña
- Rate limiting (5 intentos por 15 minutos)
- Generación de access token y refresh token
- Actualización de última sesión

### ✅ Gestión de Sesión
- Verificación automática de token al cargar la página
- Renovación automática de token cuando expira
- Cierre de sesión seguro

### ✅ Seguridad
- ✅ Contraseñas hasheadas con bcrypt (12 salt rounds)
- ✅ JWT tokens con expiración
- ✅ Rate limiting en endpoints de autenticación
- ✅ Validación y sanitización de inputs
- ✅ CORS configurado
- ✅ Helmet para headers de seguridad
- ✅ Protección contra SQL Injection (prepared statements)
- ✅ Protección contra XSS (sanitización)

## 🧪 Probar el Sistema

1. **Registro**:
   - Click en "Registrarse"
   - Completa el formulario con un email nuevo
   - Usa una contraseña que cumpla los requisitos
   - Deberías ver un mensaje de éxito y quedar autenticado

2. **Login**:
   - Click en "Iniciar Sesión"
   - Usa las credenciales de prueba
   - Deberías ver tu nombre en el menú

3. **Verificar Sesión**:
   - Recarga la página
   - Deberías seguir autenticado

4. **Logout**:
   - Click en tu nombre → "Cerrar sesión"
   - Deberías volver a ver los botones de login/registro

## 🔧 Solución de Problemas

### Error: "Error al conectar con el servidor"
- Verifica que el backend esté corriendo en el puerto 3000
- Verifica que el frontend esté en `http://localhost:5501` o `http://127.0.0.1:5501`
- Revisa la consola del navegador para más detalles

### Error: "CORS"
- Asegúrate de que el frontend esté en uno de los orígenes permitidos
- Verifica el archivo `.env` en `backend/`

### Error: "Token inválido"
- Cierra sesión y vuelve a iniciar sesión
- Verifica que el `JWT_SECRET` en `.env` no haya cambiado

## 📁 Archivos Importantes

- `backend/server.js` - Servidor principal
- `backend/routes/auth.js` - Rutas de autenticación
- `backend/middleware/auth.js` - Middleware de autenticación
- `backend/middleware/security.js` - Middleware de seguridad
- `ElXolitoMex/services/authService.js` - Servicio de autenticación en frontend
- `ElXolitoMex/main.js` - Lógica de autenticación en frontend

## 🎯 Próximos Pasos

- [ ] Panel de administración
- [ ] Gestión de productos desde el admin
- [ ] Sistema de pedidos
- [ ] Recuperación de contraseña
- [ ] Verificación de email

