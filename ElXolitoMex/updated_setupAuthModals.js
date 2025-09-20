function setupAuthModals() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  
  if (loginModal) {
    const closeBtn = loginModal.querySelector('.auth-close');
    const overlay = loginModal.querySelector('.auth-overlay');
    const form = loginModal.querySelector('.auth-form');
    
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
    if (overlay) overlay.addEventListener('click', closeAuthModal);
    if (form) form.addEventListener('submit', handleLogin);
  }
  
  if (registerModal) {
    const closeBtn = registerModal.querySelector('.auth-close');
    const overlay = registerModal.querySelector('.auth-overlay');
    const form = registerModal.querySelector('.auth-form');
    
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
    if (overlay) overlay.addEventListener('click', closeAuthModal);
    if (form) form.addEventListener('submit', handleRegister);
  }

  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuthModal();
    }
  });
  
  // Check if user is already logged in
  checkAuthStatus();
}
