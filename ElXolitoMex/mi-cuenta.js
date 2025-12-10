// Script para la página de perfil de usuario
document.addEventListener('DOMContentLoaded', async () => {
  // Verificar autenticación
  const isAuth = window.authService?.isAuthenticated();
  const user = window.authService?.getStoredUser();

  if (!isAuth || !user) {
    // Si no está autenticado, redirigir a index
    window.location.href = 'index.html';
    return;
  }

  // Mostrar información del usuario
  displayUserInfo(user);

  // Configurar botón de logout
  const btnLogout = document.getElementById('btnLogoutAccount');
  if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
      await handleLogout();
      window.location.href = 'index.html';
    });
  }

  // Configurar header (similar a main.js)
  setupAccountHeader();
});

function displayUserInfo(user) {
  // Mostrar nombre en el mensaje de bienvenida
  const userNameDisplay = document.getElementById('userNameDisplay');
  if (userNameDisplay) {
    userNameDisplay.textContent = user.nombre_completo || user.name || user.email.split('@')[0];
  }

  // Mostrar nombre en la dirección
  const addressName = document.getElementById('addressName');
  if (addressName) {
    addressName.textContent = user.nombre_completo || user.name || 'Usuario';
  }

  // Si hay teléfono, mostrarlo
  if (user.telefono) {
    const addressInfo = document.getElementById('addressInfo');
    if (addressInfo && !addressInfo.querySelector('#addressPhone')) {
      const phoneP = document.createElement('p');
      phoneP.id = 'addressPhone';
      phoneP.textContent = user.telefono;
      addressInfo.appendChild(phoneP);
    }
  }
}

function setupAccountHeader() {
  // Ocultar botones de auth y mostrar icono de perfil
  const authButtons = document.getElementById('authButtonsContainer');
  const profileToggle = document.getElementById('profileToggle');

  if (authButtons) {
    authButtons.style.display = 'none';
  }

  if (profileToggle) {
    profileToggle.style.display = 'flex';
    // El icono de perfil ya está en la página de perfil, no necesita hacer nada
  }
}

// Función para manejar logout (compartida con main.js)
async function handleLogout() {
  try {
    await window.authService?.logout();
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
}

