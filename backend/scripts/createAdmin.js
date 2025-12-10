const bcrypt = require('bcrypt');
const { dbGet, dbRun, closeDatabase } = require('../config/database');
require('dotenv').config({ path: '../.env' });

async function createAdmin() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Uso: node createAdmin.js <email> <password> <nombre_completo>');
    console.log('Ejemplo: node createAdmin.js admin@elxolitomex.com Admin123! "Administrador Principal"');
    process.exit(1);
  }

  const [email, password, nombre_completo] = args;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await dbGet('SELECT id, email FROM users WHERE email = ?', [email]);
    
    if (existingUser) {
      console.log(`❌ El usuario con email ${email} ya existe.`);
      process.exit(1);
    }

    // Validar contraseña
    if (password.length < 8) {
      console.log('❌ La contraseña debe tener al menos 8 caracteres');
      process.exit(1);
    }

    // Hashear contraseña
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Crear usuario administrador
    const result = await dbRun(
      `INSERT INTO users (email, password_hash, nombre_completo, rol, activo, email_verificado)
       VALUES (?, ?, ?, 'super_admin', 1, 1)`,
      [email, passwordHash, nombre_completo]
    );

    console.log('✅ Usuario administrador creado exitosamente!');
    console.log(`   ID: ${result.lastID}`);
    console.log(`   Email: ${email}`);
    console.log(`   Nombre: ${nombre_completo}`);
    console.log(`   Rol: super_admin`);
    
    closeDatabase();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear administrador:', error);
    closeDatabase();
    process.exit(1);
  }
}

createAdmin();

