-- ============================================================================
-- SCRIPT DE CREACIÓN DE BASE DE DATOS - EL XOLITO MEX
-- SQLite Database Schema
-- ============================================================================

-- Habilitar foreign keys
PRAGMA foreign_keys = ON;

-- ============================================================================
-- TABLA 1: USUARIOS
-- ============================================================================
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre_completo VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    fecha_nacimiento DATE,
    rol VARCHAR(20) DEFAULT 'cliente' CHECK(rol IN ('cliente', 'admin', 'super_admin')),
    activo BOOLEAN DEFAULT 1,
    email_verificado BOOLEAN DEFAULT 0,
    token_verificacion VARCHAR(255),
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_sesion TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_rol ON users(rol);

-- ============================================================================
-- TABLA 2: CATEGORÍAS
-- ============================================================================
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT,
    imagen_icono VARCHAR(255),
    orden INTEGER DEFAULT 0,
    activa BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);

-- ============================================================================
-- TABLA 3: PRODUCTOS
-- ============================================================================
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR(10) PRIMARY KEY,
    categoria_id INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    descripcion_corta TEXT,
    descripcion_larga TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    precio_anterior DECIMAL(10, 2),
    material VARCHAR(100),
    color VARCHAR(50),
    stock INTEGER DEFAULT 0,
    stock_minimo INTEGER DEFAULT 5,
    destacado BOOLEAN DEFAULT 0,
    activo BOOLEAN DEFAULT 1,
    peso_gramos DECIMAL(8, 2),
    dimensiones VARCHAR(100),
    sku VARCHAR(50) UNIQUE,
    tags VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categories(id)
);

CREATE INDEX IF NOT EXISTS idx_products_categoria_id ON products(categoria_id);
CREATE INDEX IF NOT EXISTS idx_products_destacado ON products(destacado);
CREATE INDEX IF NOT EXISTS idx_products_activo ON products(activo);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);

-- ============================================================================
-- TABLA 4: IMÁGENES_PRODUCTOS
-- ============================================================================
CREATE TABLE IF NOT EXISTS product_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    producto_id VARCHAR(10) NOT NULL,
    ruta_imagen VARCHAR(255) NOT NULL,
    es_principal BOOLEAN DEFAULT 0,
    orden INTEGER DEFAULT 0,
    alt_text VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_product_images_producto_id ON product_images(producto_id);
CREATE INDEX IF NOT EXISTS idx_product_images_es_principal ON product_images(es_principal);

-- ============================================================================
-- TABLA 5: OFERTAS
-- ============================================================================
CREATE TABLE IF NOT EXISTS offers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    tipo_descuento VARCHAR(20) NOT NULL CHECK(tipo_descuento IN ('porcentaje', 'fijo', 'categoria')),
    valor_descuento DECIMAL(10, 2) NOT NULL,
    categoria_id INTEGER,
    producto_id VARCHAR(10),
    imagen_oferta VARCHAR(255),
    precio_anterior DECIMAL(10, 2),
    precio_nuevo DECIMAL(10, 2),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE,
    activa BOOLEAN DEFAULT 1,
    orden INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categories(id),
    FOREIGN KEY (producto_id) REFERENCES products(id)
);

CREATE INDEX IF NOT EXISTS idx_offers_activa ON offers(activa);
CREATE INDEX IF NOT EXISTS idx_offers_fechas ON offers(fecha_inicio, fecha_fin);

-- ============================================================================
-- TABLA 6: REELS_INSTAGRAM
-- ============================================================================
CREATE TABLE IF NOT EXISTS instagram_reels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(255),
    url_instagram VARCHAR(500) NOT NULL,
    url_video VARCHAR(500),
    miniatura VARCHAR(500),
    orden INTEGER DEFAULT 0,
    activo BOOLEAN DEFAULT 1,
    fecha_publicacion DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_instagram_reels_activo ON instagram_reels(activo);
CREATE INDEX IF NOT EXISTS idx_instagram_reels_orden ON instagram_reels(orden);

-- ============================================================================
-- TABLA 7: TESTIMONIOS
-- ============================================================================
CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_cliente VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100),
    testimonio TEXT NOT NULL,
    calificacion INTEGER CHECK(calificacion >= 1 AND calificacion <= 5),
    foto_cliente VARCHAR(255),
    inicial_nombre VARCHAR(1),
    producto_id VARCHAR(10),
    aprobado BOOLEAN DEFAULT 0,
    orden INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES products(id)
);

CREATE INDEX IF NOT EXISTS idx_testimonials_aprobado ON testimonials(aprobado);
CREATE INDEX IF NOT EXISTS idx_testimonials_producto_id ON testimonials(producto_id);

-- ============================================================================
-- TABLA 8: DIRECCIONES
-- ============================================================================
CREATE TABLE IF NOT EXISTS addresses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL,
    tipo VARCHAR(20) DEFAULT 'envio' CHECK(tipo IN ('envio', 'facturacion')),
    nombre_completo VARCHAR(255) NOT NULL,
    calle VARCHAR(255) NOT NULL,
    numero_exterior VARCHAR(20) NOT NULL,
    numero_interior VARCHAR(20),
    colonia VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    codigo_postal VARCHAR(10) NOT NULL,
    pais VARCHAR(100) DEFAULT 'México',
    telefono VARCHAR(20),
    referencias TEXT,
    es_principal BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_addresses_usuario_id ON addresses(usuario_id);

-- ============================================================================
-- TABLA 9: PEDIDOS
-- ============================================================================
CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numero_pedido VARCHAR(20) UNIQUE NOT NULL,
    usuario_id INTEGER,
    email_cliente VARCHAR(255) NOT NULL,
    nombre_cliente VARCHAR(255) NOT NULL,
    telefono_cliente VARCHAR(20),
    direccion_envio_id INTEGER,
    direccion_facturacion_id INTEGER,
    subtotal DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) DEFAULT 0,
    envio DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    metodo_pago VARCHAR(50),
    estado VARCHAR(50) DEFAULT 'pendiente' CHECK(estado IN ('pendiente', 'confirmado', 'en_preparacion', 'enviado', 'entregado', 'cancelado')),
    fecha_envio DATE,
    numero_seguimiento VARCHAR(100),
    notas TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES users(id),
    FOREIGN KEY (direccion_envio_id) REFERENCES addresses(id),
    FOREIGN KEY (direccion_facturacion_id) REFERENCES addresses(id)
);

CREATE INDEX IF NOT EXISTS idx_orders_numero_pedido ON orders(numero_pedido);
CREATE INDEX IF NOT EXISTS idx_orders_usuario_id ON orders(usuario_id);
CREATE INDEX IF NOT EXISTS idx_orders_estado ON orders(estado);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);

-- ============================================================================
-- TABLA 10: DETALLES_PEDIDO
-- ============================================================================
CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    pedido_id INTEGER NOT NULL,
    producto_id VARCHAR(10) NOT NULL,
    nombre_producto VARCHAR(255) NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    cantidad INTEGER NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES products(id)
);

CREATE INDEX IF NOT EXISTS idx_order_items_pedido_id ON order_items(pedido_id);
CREATE INDEX IF NOT EXISTS idx_order_items_producto_id ON order_items(producto_id);

-- ============================================================================
-- TABLA 11: CARRITOS (OPCIONAL)
-- ============================================================================
CREATE TABLE IF NOT EXISTS carts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario_id INTEGER NOT NULL UNIQUE,
    datos_carrito TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================================================
-- DATOS INICIALES: CATEGORÍAS
-- ============================================================================
INSERT OR IGNORE INTO categories (id, nombre, slug, descripcion, orden, activa) VALUES
(1, 'Anillos', 'anillos', 'Anillos de plata y oro laminado', 1, 1),
(2, 'Aretes', 'aretes', 'Aretes y pendientes', 2, 1),
(3, 'Collares', 'collares', 'Collares y gargantillas', 3, 1),
(4, 'Pulseras', 'pulseras', 'Pulseras y brazaletes', 4, 1),
(5, 'Conjuntos', 'conjuntos', 'Conjuntos completos de joyería', 5, 1),
(6, 'Piedras', 'piedras', 'Piedras naturales', 6, 1);

-- ============================================================================
-- DATOS INICIALES: USUARIO ADMINISTRADOR
-- ============================================================================
-- NOTA: La contraseña debe ser hasheada antes de insertar
-- Ejemplo: password_hash sería el hash de 'admin123' (usar bcrypt o similar)
-- Por ahora se deja como placeholder, debe ser reemplazado con hash real
INSERT OR IGNORE INTO users (id, email, password_hash, nombre_completo, rol, activo, email_verificado) VALUES
(1, 'admin@elxolitomex.com', 'PLACEHOLDER_HASH_AQUI', 'Administrador', 'super_admin', 1, 1);

-- ============================================================================
-- FIN DEL SCRIPT
-- ============================================================================

