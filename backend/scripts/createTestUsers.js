const bcrypt = require('bcrypt');
const { dbGet, dbRun, closeDatabase } = require('../config/database');
require('dotenv').config({ path: '../.env' });

async function createTestUsers() {
  try {
    const testUsers = [
      {
        email: 'cliente@test.com',
        password: 'Cliente123!',
        nombre_completo: 'Cliente de Prueba',
        telefono: '5551234567',
        rol: 'cliente'
      },
      {
        email: 'admin@test.com',
        password: 'Admin123!',
        nombre_completo: 'Administrador de Prueba',
        telefono: '5559876543',
        rol: 'admin'
      },
      {
        email: 'superadmin@test.com',
        password: 'SuperAdmin123!',
        nombre_completo: 'Super Administrador',
        telefono: '5551112233',
        rol: 'super_admin'
      }
    ];

    console.log('🔧 Creando usuarios de prueba...\n');

    for (const userData of testUsers) {
      // Verificar si el usuario ya existe
      const existingUser = await dbGet('SELECT id, email FROM users WHERE email = ?', [userData.email]);
      
      if (existingUser) {
        console.log(`⚠️  Usuario ${userData.email} ya existe, omitiendo...`);
        continue;
      }

      // Hashear contraseña
      const saltRounds = 12;
      const passwordHash = await bcrypt.hash(userData.password, saltRounds);

      // Crear usuario
      const result = await dbRun(
        `INSERT INTO users (email, password_hash, nombre_completo, telefono, rol, activo, email_verificado)
         VALUES (?, ?, ?, ?, ?, 1, 1)`,
        [userData.email, passwordHash, userData.nombre_completo, userData.telefono, userData.rol]
      );

      console.log(`✅ Usuario creado: ${userData.email}`);
      console.log(`   - Nombre: ${userData.nombre_completo}`);
      console.log(`   - Rol: ${userData.rol}`);
      console.log(`   - Contraseña: ${userData.password}\n`);
    }

    console.log('✨ Usuarios de prueba creados exitosamente!\n');
    console.log('📋 CREDENCIALES DE PRUEBA:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('👤 CLIENTE:');
    console.log('   Email: cliente@test.com');
    console.log('   Password: Cliente123!');
    console.log('');
    console.log('👨‍💼 ADMINISTRADOR:');
    console.log('   Email: admin@test.com');
    console.log('   Password: Admin123!');
    console.log('');
    console.log('👑 SUPER ADMINISTRADOR:');
    console.log('   Email: superadmin@test.com');
    console.log('   Password: SuperAdmin123!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    closeDatabase();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear usuarios de prueba:', error);
    closeDatabase();
    process.exit(1);
  }
}

createTestUsers();

