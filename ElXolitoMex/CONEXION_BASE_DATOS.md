# Guía para Conectar con Base de Datos

## Resumen de la Arquitectura Actual

Actualmente, los productos están almacenados en un array JavaScript (`PRODUCTS`) en `main.js`. La página `producto.html` lee el parámetro `id` de la URL y busca el producto en ese array.

## Opciones para Migrar a Base de Datos

### Opción 1: Backend con API REST (Recomendado)

#### Estructura:
```
Frontend (HTML/CSS/JS) → API REST → Base de Datos
```

#### Tecnologías Sugeridas:
- **Backend**: Node.js + Express, PHP, Python (Flask/Django), o cualquier lenguaje que prefieras
- **Base de Datos**: MySQL, PostgreSQL, MongoDB, o Firebase
- **API**: RESTful API que devuelva JSON

#### Implementación Paso a Paso:

1. **Crear la Base de Datos:**
   ```sql
   CREATE TABLE products (
     id VARCHAR(10) PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     category VARCHAR(50),
     price DECIMAL(10, 2),
     material VARCHAR(100),
     color VARCHAR(50),
     featured BOOLEAN DEFAULT FALSE,
     image VARCHAR(255),
     description TEXT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

2. **Crear el Backend API:**
   ```javascript
   // Ejemplo con Node.js + Express
   app.get('/api/products', async (req, res) => {
     const products = await db.query('SELECT * FROM products');
     res.json(products);
   });
   
   app.get('/api/products/:id', async (req, res) => {
     const product = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
     res.json(product[0]);
   });
   ```

3. **Modificar el Frontend (`main.js`):**
   ```javascript
   // Reemplazar el array PRODUCTS con una función que obtenga datos de la API
   async function loadProducts() {
     try {
       const response = await fetch('/api/products');
       const products = await response.json();
       return products;
     } catch (error) {
       console.error('Error cargando productos:', error);
       return [];
     }
   }
   
   // En producto.html, cambiar renderProductPage():
   async function renderProductPage() {
     const urlParams = new URLSearchParams(window.location.search);
     const productId = urlParams.get('id');
     
     const products = await loadProducts();
     const product = products.find(p => p.id === productId);
     // ... resto del código
   }
   ```

### Opción 2: Firebase (Más Rápido, Sin Backend Propio)

#### Ventajas:
- No necesitas crear tu propio servidor
- Base de datos en tiempo real
- Autenticación incluida
- Hosting gratuito

#### Implementación:

1. **Configurar Firebase:**
   ```javascript
   // En main.js, agregar al inicio:
   import { initializeApp } from 'firebase/app';
   import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
   
   const firebaseConfig = {
     // Tu configuración de Firebase
   };
   
   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);
   ```

2. **Obtener Productos:**
   ```javascript
   async function loadProducts() {
     const productsCol = collection(db, 'products');
     const productSnapshot = await getDocs(productsCol);
     return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
   }
   
   async function getProductById(id) {
     const productDoc = doc(db, 'products', id);
     const productSnap = await getDoc(productDoc);
     return { id: productSnap.id, ...productSnap.data() };
   }
   ```

### Opción 3: CMS Headless (Strapi, Contentful, etc.)

#### Ventajas:
- Panel de administración incluido
- Fácil de usar para no programadores
- API automática
- Gestión de contenido visual

#### Ejemplo con Strapi:
1. Instalar Strapi
2. Crear modelo "Product" con los campos necesarios
3. Strapi genera automáticamente la API REST
4. Usar la API desde el frontend igual que en Opción 1

## Cambios Necesarios en el Código Actual

### 1. Modificar `main.js`:

**Antes:**
```javascript
const PRODUCTS = [
  { id: 'A1', name: 'Anillo Sello', ... },
  // ...
];
```

**Después (con API):**
```javascript
let PRODUCTS = [];

async function loadProducts() {
  const response = await fetch('/api/products');
  PRODUCTS = await response.json();
  return PRODUCTS;
}

// Llamar al cargar la página
loadProducts().then(() => {
  // Inicializar la página después de cargar productos
  if (document.getElementById('productContent')) {
    renderProductPage();
  }
});
```

### 2. Modificar `renderProductPage()`:

**Antes:**
```javascript
const product = PRODUCTS.find(p => p.id === productId);
```

**Después:**
```javascript
// Opción A: Cargar todos los productos primero
const products = await loadProducts();
const product = products.find(p => p.id === productId);

// Opción B: Cargar solo el producto específico (más eficiente)
const product = await fetch(`/api/products/${productId}`).then(r => r.json());
```

### 3. Modificar `renderProducts()` en tienda.html:

```javascript
async function renderProducts(products) {
  // Si products está vacío, cargar desde API
  if (!products || products.length === 0) {
    products = await loadProducts();
  }
  // ... resto del código igual
}
```

## Estructura de URL para SEO

Mantén URLs amigables:
- ✅ `producto.html?id=A1` (actual)
- ✅ `producto/A1` (con routing)
- ✅ `producto/anillo-sello` (slug amigable)

Para slugs amigables, necesitarías:
1. Campo `slug` en la base de datos
2. Backend que traduzca slug → id
3. URLs como: `producto.html?slug=anillo-sello`

## Recomendación Final

**Para empezar rápido**: Firebase
- Configuración rápida
- Sin servidor propio
- Escalable

**Para producción profesional**: Backend propio (Node.js/PHP) + MySQL/PostgreSQL
- Más control
- Mejor rendimiento
- Más flexible

**Para equipos no técnicos**: CMS Headless (Strapi)
- Panel de administración visual
- Fácil agregar productos
- API automática

## Ejemplo Completo: Node.js + Express + MySQL

### Backend (`server.js`):
```javascript
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_password',
  database: 'el_xolito_mex'
});

app.get('/api/products', async (req, res) => {
  const [products] = await db.query('SELECT * FROM products');
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  const [products] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
  if (products.length === 0) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(products[0]);
});

app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});
```

### Frontend (`main.js`):
```javascript
const API_URL = 'http://localhost:3000/api';

async function loadProducts() {
  const response = await fetch(`${API_URL}/products`);
  return await response.json();
}

async function getProductById(id) {
  const response = await fetch(`${API_URL}/products/${id}`);
  return await response.json();
}
```

## Notas Importantes

1. **CORS**: Si el frontend y backend están en diferentes dominios, configura CORS en el backend
2. **Caché**: Considera cachear los productos en localStorage para mejor rendimiento
3. **Loading States**: Muestra indicadores de carga mientras se obtienen los datos
4. **Error Handling**: Maneja errores de red y productos no encontrados
5. **SEO**: Para mejor SEO, considera Server-Side Rendering (SSR) con Next.js o similar

## Migración Gradual

Puedes migrar gradualmente:
1. Mantén el array `PRODUCTS` como fallback
2. Intenta cargar desde API primero
3. Si falla, usa el array estático
4. Una vez que la API esté estable, elimina el array

```javascript
async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    return await response.json();
  } catch (error) {
    console.warn('API no disponible, usando datos estáticos');
    return PRODUCTS_STATIC; // Array de respaldo
  }
}
```






