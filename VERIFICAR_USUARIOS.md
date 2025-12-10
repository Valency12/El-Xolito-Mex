# 🔍 Cómo Verificar Usuarios en la Base de Datos

## Método 1: Desde la Terminal (SQLite)

### Ver todos los usuarios:

```bash
sqlite3 database.sqlite "SELECT id, email, nombre_completo, rol, DATE(fecha_registro) as fecha, activo FROM users ORDER BY id DESC;"
```

### Ver usuarios con formato bonito:

```bash
sqlite3 database.sqlite ".mode column" ".headers on" "SELECT id, email, nombre_completo, rol, DATE(fecha_registro) as fecha, activo FROM users ORDER BY id DESC;"
```

### Contar total de usuarios:

```bash
sqlite3 database.sqlite "SELECT COUNT(*) as total FROM users;"
```

### Ver un usuario específico por email:

```bash
sqlite3 database.sqlite "SELECT id, email, nombre_completo, rol, telefono, DATE(fecha_registro) as fecha FROM users WHERE email = 'tu_email@ejemplo.com';"
```

### Ver solo los últimos 5 usuarios registrados:

```bash
sqlite3 database.sqlite ".mode column" ".headers on" "SELECT id, email, nombre_completo, rol, DATE(fecha_registro) as fecha FROM users ORDER BY id DESC LIMIT 5;"
```

---

## Método 2: Abrir SQLite Interactivo

```bash
sqlite3 database.sqlite
```

Luego ejecuta:

```sql
.mode column
.headers on
SELECT id, email, nombre_completo, rol, DATE(fecha_registro) as fecha, activo 
FROM users 
ORDER BY id DESC;
```

Para salir: `.quit`

---

## Método 3: Desde el Backend (Logs)

Cuando te registras, el backend debería mostrar en la terminal:

```
POST /api/auth/register 201
```

Si ves un `201`, significa que el usuario se creó exitosamente.

---

## Método 4: Verificar en el Navegador (DevTools)

1. Abre las DevTools (F12)
2. Ve a la pestaña **Network**
3. Filtra por "register" o "auth"
4. Busca el request a `/api/auth/register`
5. Click en él y ve a la pestaña **Response**
6. Deberías ver algo como:

```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "data": {
    "user": {
      "id": 1,
      "email": "tu_email@ejemplo.com",
      "nombre_completo": "Tu Nombre",
      ...
    },
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

---

## ⚠️ Importante: Verificar que el Backend Esté Conectado

Si el registro fue "súper rápido" pero no hay datos en la BD, puede ser que:

1. **El backend no esté corriendo** - Verifica que veas `🚀 Servidor corriendo en http://localhost:3000` en la terminal
2. **El frontend no esté conectando al backend** - Abre DevTools (F12) → Console y busca errores
3. **La base de datos no tiene las tablas** - Ejecuta: `sqlite3 database.sqlite < create_database.sql`

---

## 🔧 Si No Ves los Datos

### Paso 1: Verificar que las tablas existen

```bash
sqlite3 database.sqlite ".tables"
```

Deberías ver: `users categories products ...`

### Paso 2: Si no hay tablas, crearlas

```bash
sqlite3 database.sqlite < create_database.sql
```

### Paso 3: Verificar que el backend esté usando la BD correcta

Abre `backend/.env` y verifica:

```
DB_PATH=../database.sqlite
```

### Paso 4: Reiniciar el backend

Detén el servidor (Ctrl+C) y vuelve a iniciarlo:

```bash
cd backend
npm run dev
```

---

## 📊 Consultas Útiles

### Ver usuarios activos:

```bash
sqlite3 database.sqlite "SELECT email, nombre_completo, rol FROM users WHERE activo = 1;"
```

### Ver usuarios por rol:

```bash
sqlite3 database.sqlite "SELECT email, nombre_completo FROM users WHERE rol = 'cliente';"
```

### Ver último usuario registrado:

```bash
sqlite3 database.sqlite "SELECT * FROM users ORDER BY id DESC LIMIT 1;"
```

---

## 🎯 Verificación Rápida

Ejecuta este comando para ver todo de forma clara:

```bash
sqlite3 database.sqlite <<EOF
.mode column
.headers on
.width 5 30 25 15 20 5
SELECT 
    id, 
    email, 
    nombre_completo, 
    rol, 
    DATE(fecha_registro) as fecha,
    activo
FROM users 
ORDER BY id DESC;
EOF
```

