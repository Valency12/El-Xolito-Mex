# 🧪 Guía de Pruebas - Sistema de Autenticación

## 📋 Pasos para Probar el Sistema

### Paso 1: Instalar Dependencias del Backend

Abre una terminal en la raíz del proyecto y ejecuta:

```bash
cd backend
npm install
```

Esto instalará todas las dependencias necesarias (Express, bcrypt, JWT, SQLite, etc.)

**Tiempo estimado**: 1-2 minutos

---

### Paso 2: Crear Archivo de Configuración (.env)

El archivo `.env` es necesario para la configuración. Si no existe, créalo:

```bash
cd backend
cat > .env << 'EOF'
# Puerto del servidor
PORT=3000

# JWT Secret Key (CAMBIAR EN PRODUCCIÓN)
JWT_SECRET=el_xolito_mex_secret_key_2024_cambiar_en_produccion_super_segura
JWT_EXPIRES_IN=30m
JWT_REFRESH_EXPIRES_IN=7d

# CORS Origins (separados por coma)
CORS_ORIGIN=http://localhost:5501,http://127.0.0.1:5501

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Database
DB_PATH=../database.sqlite
EOF
```

O simplemente copia el contenido y créalo manualmente en `backend/.env`

---

### Paso 3: Crear Usuarios de Prueba

Ejecuta el script para crear usuarios de prueba:

```bash
cd backend
node scripts/createTestUsers.js
```

Deberías ver algo como:

```
🔧 Creando usuarios de prueba...

✅ Usuario creado: cliente@test.com
   - Nombre: Cliente de Prueba
   - Rol: cliente
   - Contraseña: Cliente123!

✅ Usuario creado: admin@test.com
   - Nombre: Administrador de Prueba
   - Rol: admin
   - Contraseña: Admin123!

✅ Usuario creado: superadmin@test.com
   - Nombre: Super Administrador
   - Rol: super_admin
   - Contraseña: SuperAdmin123!

✨ Usuarios de prueba creados exitosamente!
```

---

### Paso 4: Iniciar el Servidor Backend

En la terminal, desde la carpeta `backend`, ejecuta:

```bash
npm run dev
```

O si prefieres sin auto-reload:

```bash
npm start
```

Deberías ver:

```
🚀 Servidor corriendo en http://localhost:3000
📡 API disponible en http://localhost:3000/api
🔒 Modo: desarrollo
✅ Conectado a la base de datos SQLite
```

**¡Mantén esta terminal abierta!** El servidor debe seguir corriendo.

---

### Paso 5: Abrir el Frontend

Abre el frontend en un servidor local. Tienes varias opciones:

#### Opción A: Live Server (VS Code)
1. Abre VS Code
2. Instala la extensión "Live Server" si no la tienes
3. Click derecho en `ElXolitoMex/index.html`
4. Selecciona "Open with Live Server"
5. Se abrirá en `http://127.0.0.1:5501` o `http://localhost:5501`

#### Opción B: Python Simple Server
```bash
cd ElXolitoMex
python3 -m http.server 5501
```

#### Opción C: Node.js http-server
```bash
npx http-server ElXolitoMex -p 5501
```

**IMPORTANTE**: El frontend debe estar en `http://localhost:5501` o `http://127.0.0.1:5501` para que CORS funcione.

---

### Paso 6: Probar el Sistema

#### 🧪 Prueba 1: Registro de Usuario

1. En el navegador, click en **"Registrarse"**
2. Completa el formulario:
   - **Nombre completo**: `Juan Pérez`
   - **Email**: `juan@test.com` (usa un email que no exista)
   - **Contraseña**: `Test1234!` (debe tener 8+ caracteres, mayúscula, minúscula y número)
   - **Teléfono**: (opcional) `5551234567`
3. Click en **"Crear Cuenta"**
4. **Resultado esperado**: 
   - ✅ Mensaje de éxito
   - ✅ Modal se cierra
   - ✅ Verás "Hola, Juan Pérez" en el header
   - ✅ Ya no verás los botones de login/registro

#### 🧪 Prueba 2: Iniciar Sesión con Usuario de Prueba

1. Si estás logueado, primero cierra sesión (click en tu nombre → "Cerrar sesión")
2. Click en **"Iniciar Sesión"**
3. Usa las credenciales de prueba:
   - **Email**: `cliente@test.com`
   - **Password**: `Cliente123!`
4. Click en **"Iniciar Sesión"**
5. **Resultado esperado**:
   - ✅ Mensaje "¡Bienvenido de vuelta, Cliente de Prueba!"
   - ✅ Verás el menú de usuario

#### 🧪 Prueba 3: Verificar Persistencia de Sesión

1. Con la sesión activa, **recarga la página** (F5)
2. **Resultado esperado**:
   - ✅ Deberías seguir autenticado
   - ✅ Tu nombre sigue apareciendo en el header
   - ✅ No necesitas volver a iniciar sesión

#### 🧪 Prueba 4: Cerrar Sesión

1. Click en tu nombre en el header
2. Click en **"Cerrar sesión"**
3. **Resultado esperado**:
   - ✅ Mensaje "Has cerrado sesión exitosamente"
   - ✅ Vuelves a ver los botones "Iniciar Sesión" y "Registrarse"
   - ✅ Los tokens se eliminan del localStorage

#### 🧪 Prueba 5: Validaciones de Contraseña

1. Click en **"Registrarse"**
2. Intenta usar contraseñas inválidas:
   - `1234567` (muy corta) → ❌ Error esperado
   - `password` (sin mayúscula ni número) → ❌ Error esperado
   - `PASSWORD123` (sin minúscula) → ❌ Error esperado
3. Usa una contraseña válida: `Test1234!` → ✅ Debería funcionar

#### 🧪 Prueba 6: Rate Limiting (Protección contra ataques)

1. Intenta iniciar sesión con credenciales incorrectas **6 veces seguidas**
2. **Resultado esperado**:
   - ✅ Las primeras 5 veces: Error "Email o contraseña incorrectos"
   - ✅ En el 6to intento: Error "Demasiados intentos de inicio de sesión. Intenta de nuevo en 15 minutos"
   - ✅ Debes esperar 15 minutos o reiniciar el servidor para poder intentar de nuevo

#### 🧪 Prueba 7: Login con Administrador

1. Cierra sesión si estás logueado
2. Inicia sesión con:
   - **Email**: `admin@test.com`
   - **Password**: `Admin123!`
3. **Resultado esperado**:
   - ✅ Login exitoso
   - ✅ En el menú desplegable deberías ver "Panel Admin" (aunque aún no existe la página)

---

## 🔍 Verificar que Todo Funciona

### En el Backend (Terminal del servidor)

Deberías ver logs cuando:
- Un usuario se registra: `POST /api/auth/register 201`
- Un usuario inicia sesión: `POST /api/auth/login 200`
- Se verifica un token: `GET /api/auth/me 200`

### En el Navegador (Consola del Desarrollador)

Abre las DevTools (F12) y ve a la pestaña "Console". Deberías ver:
- Mensajes de éxito cuando las peticiones funcionan
- Errores si algo falla (pero con mensajes descriptivos)

En la pestaña "Network":
- Verás las peticiones a `http://localhost:3000/api/auth/*`
- Status 200/201 = éxito
- Status 400/401 = error de validación/autenticación

En la pestaña "Application" → "Local Storage":
- Deberías ver:
  - `accessToken`: Token JWT
  - `refreshToken`: Token de renovación
  - `currentUser`: Datos del usuario en JSON

---

## ❌ Solución de Problemas

### Error: "Error al conectar con el servidor"

**Causa**: El backend no está corriendo o hay un problema de CORS

**Solución**:
1. Verifica que el backend esté corriendo en `http://localhost:3000`
2. Abre `http://localhost:3000/api/health` en el navegador
3. Deberías ver: `{"success":true,"message":"API funcionando correctamente"}`
4. Verifica que el frontend esté en `http://localhost:5501` o `http://127.0.0.1:5501`

### Error: "CORS policy"

**Causa**: El frontend no está en un origen permitido

**Solución**:
1. Asegúrate de que el frontend esté en `http://localhost:5501` o `http://127.0.0.1:5501`
2. Verifica el archivo `backend/.env` que tenga: `CORS_ORIGIN=http://localhost:5501,http://127.0.0.1:5501`
3. Reinicia el servidor backend después de cambiar `.env`

### Error: "Token inválido" o "Token expirado"

**Causa**: El token expiró o es inválido

**Solución**:
1. Cierra sesión y vuelve a iniciar sesión
2. Si persiste, verifica que el `JWT_SECRET` en `.env` no haya cambiado

### Error: "Este email ya está registrado"

**Causa**: Intentas registrar un email que ya existe

**Solución**:
1. Usa un email diferente
2. O inicia sesión con ese email si ya tienes cuenta

### El servidor no inicia

**Causa**: Faltan dependencias o hay un error

**Solución**:
1. Asegúrate de haber ejecutado `npm install` en la carpeta `backend`
2. Verifica que el archivo `database.sqlite` exista en la raíz del proyecto
3. Revisa los errores en la terminal

---

## ✅ Checklist de Verificación

Antes de probar, verifica:

- [ ] Dependencias instaladas (`npm install` en backend)
- [ ] Archivo `.env` creado en `backend/`
- [ ] Base de datos `database.sqlite` existe
- [ ] Usuarios de prueba creados (`createTestUsers.js`)
- [ ] Servidor backend corriendo en puerto 3000
- [ ] Frontend abierto en `http://localhost:5501` o `http://127.0.0.1:5501`
- [ ] Consola del navegador abierta (F12) para ver errores

---

## 🎯 Pruebas Adicionales (Opcional)

### Probar con diferentes roles:

1. **Cliente**: `cliente@test.com` / `Cliente123!`
2. **Admin**: `admin@test.com` / `Admin123!`
3. **Super Admin**: `superadmin@test.com` / `SuperAdmin123!`

Todos deberían poder iniciar sesión, pero solo admin y super_admin verán el enlace "Panel Admin" (cuando lo implementemos).

### Probar renovación de token:

1. Inicia sesión
2. Espera 30 minutos (o cambia `JWT_EXPIRES_IN=1m` en `.env` para probar más rápido)
3. Intenta hacer una acción que requiera autenticación
4. El token debería renovarse automáticamente

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:
1. Revisa la consola del navegador (F12)
2. Revisa los logs del servidor backend
3. Verifica que todos los pasos anteriores se hayan completado
4. Asegúrate de que no haya errores de sintaxis en los archivos

¡Listo para probar! 🚀

