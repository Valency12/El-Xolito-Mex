
// Authentication functionality
function showAuthMessage(message, type = 'success') {
  // Create or get existing message container
  let messageContainer = document.getElementById('authMessage');
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'authMessage';
    messageContainer.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 12px 20px;
      border-radius: 8px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      z-index: 10000;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(messageContainer);
  }
  
  // Set message and styling based on type
  messageContainer.textContent = message;
  if (type === 'success') {
    messageContainer.style.backgroundColor = '#d4edda';
    messageContainer.style.color = '#155724';
    messageContainer.style.border = '1px solid #c3e6cb';
  } else {
    messageContainer.style.backgroundColor = '#f8d7da';
    messageContainer.style.color = '#721c24';
    messageContainer.style.border = '1px solid #f5c6cb';
  }
  
  // Show and auto-hide after 3 seconds
  messageContainer.style.display = 'block';
  setTimeout(() => {
    if (messageContainer.parentNode) {
      messageContainer.style.display = 'none';
    }
  }, 3000);
}

function handleLogin(event) {
  event.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  // Basic validation
  if (!email || !password) {
    showAuthMessage('Por favor, completa todos los campos', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showAuthMessage('Por favor, ingresa un email válido', 'error');
    return;
  }
  
  // Simulate login process (since no API connection is required)
  const loginButton = event.target.querySelector('button[type="submit"]');
  loginButton.disabled = true;
  loginButton.textContent = 'Iniciando sesión...';
  
  setTimeout(() => {
    // Simulate successful login
    const userData = {
      email: email,
      name: email.split('@')[0], // Use email prefix as name
      loginTime: new Date().toISOString()
    };
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // Update UI
    updateAuthUI(true, userData);
    
    // Close modal
    closeAuthModal();
    
    // Reset form
    event.target.reset();
    
    // Show success message
    showAuthMessage(`¡Bienvenido de vuelta, ${userData.name}!`);
    
    // Reset button
    loginButton.disabled = false;
    loginButton.textContent = 'Iniciar Sesión';
  }, 1500);
}

function handleRegister(event) {
  event.preventDefault();
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  
  // Basic validation
  if (!name || !email || !password) {
    showAuthMessage('Por favor, completa todos los campos', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showAuthMessage('Por favor, ingresa un email válido', 'error');
    return;
  }
  
  if (password.length < 6) {
    showAuthMessage('La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }
  
  // Simulate registration process
  const registerButton = event.target.querySelector('button[type="submit"]');
  registerButton.disabled = true;
  registerButton.textContent = 'Creando cuenta...';
  
  setTimeout(() => {
    // Simulate successful registration
    const userData = {
      name: name,
      email: email,
      registerTime: new Date().toISOString()
    };
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    // Update UI
    updateAuthUI(true, userData);
    
    // Close modal
    closeAuthModal();
    
    // Reset form
    event.target.reset();
    
    // Show success message
    showAuthMessage(`¡Cuenta creada exitosamente! Bienvenido, ${userData.name}!`);
    
    // Reset button
    registerButton.disabled = false;
    registerButton.textContent = 'Crear Cuenta';
  }, 1500);
}

function handleLogout() {
  // Remove user data from localStorage
  localStorage.removeItem('currentUser');
  
  // Update UI
  updateAuthUI(false);
  
  // Show message
  showAuthMessage('Has cerrado sesión exitosamente');
}

function updateAuthUI(isLoggedIn, userData = null) {
  const authButtons = document.querySelector('.auth-buttons');
  if (!authButtons) return;
  
  if (isLoggedIn && userData) {
    // Show user menu
    authButtons.innerHTML = `
      <div class="user-menu">
        <button class="btn btn-outline btn-sm user-dropdown-toggle">
          <span>Hola, ${userData.name}</span>
          <span style="margin-left: 5px;">▼</span>
        </button>
        <div class="user-dropdown" style="display: none;">
          <a href="#" onclick="showUserProfile()">Mi perfil</a>
          <a href="#" onclick="showUserOrders()">Mis pedidos</a>
          <a href="#" onclick="handleLogout()">Cerrar sesión</a>
        </div>
      </div>
    `;
    
    // Add dropdown functionality
    const dropdown = authButtons.querySelector('.user-dropdown-toggle');
    const menu = authButtons.querySelector('.user-dropdown');
    
    if (dropdown && menu) {
      dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = menu.style.display === 'block';
        menu.style.display = isOpen ? 'none' : 'block';
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!authButtons.contains(e.target)) {
          menu.style.display = 'none';
        }
      });
    }
  } else {
    // Show login/register buttons
    authButtons.innerHTML = `
      <button class="btn btn-outline btn-sm" onclick="openLoginModal()">Iniciar Sesión</button>
      <button class="btn btn-primary btn-sm" onclick="openRegisterModal()">Registrarse</button>
    `;
  }
}

function showUserProfile() {
  showAuthMessage('Funcionalidad de perfil próximamente disponible');
}

function showUserOrders() {
  showAuthMessage('Funcionalidad de pedidos próximamente disponible');
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkAuthStatus() {
  const userData = localStorage.getItem('currentUser');
  if (userData) {
    try {
      const user = JSON.parse(userData);
      updateAuthUI(true, user);
    } catch (error) {
      localStorage.removeItem('currentUser');
    }
  }
}

