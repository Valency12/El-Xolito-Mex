// Servicio de autenticación - Conecta con la API del backend
const API_BASE_URL = 'http://localhost:3000/api';

// Función para hacer requests a la API
async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('accessToken');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
    ...options
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      // Si el token expiró, intentar renovarlo
      if (response.status === 401 && token) {
        const refreshed = await refreshToken();
        if (refreshed) {
          // Reintentar la petición con el nuevo token
          config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
          const retryResponse = await fetch(`${API_BASE_URL}${endpoint}`, config);
          const retryData = await retryResponse.json();
          return retryData;
        }
      }
      throw new Error(data.message || 'Error en la petición');
    }

    return data;
  } catch (error) {
    console.error('Error en API request:', error);
    throw error;
  }
}

// Registrar nuevo usuario
async function register(email, password, nombre_completo, telefono = null) {
  try {
    const response = await apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        nombre_completo,
        telefono
      })
    });

    if (response.success) {
      // Guardar tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));
      
      return {
        success: true,
        user: response.data.user
      };
    }

    throw new Error(response.message || 'Error al registrar');
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Error al registrar usuario'
    };
  }
}

// Iniciar sesión
async function login(email, password) {
  try {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (response.success) {
      // Guardar tokens
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));
      
      return {
        success: true,
        user: response.data.user
      };
    }

    throw new Error(response.message || 'Error al iniciar sesión');
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Error al iniciar sesión'
    };
  }
}

// Cerrar sesión
async function logout() {
  try {
    // Intentar cerrar sesión en el servidor
    await apiRequest('/auth/logout', {
      method: 'POST'
    });
  } catch (error) {
    console.error('Error al cerrar sesión en servidor:', error);
  } finally {
    // Siempre limpiar tokens locales
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUser');
  }
}

// Obtener información del usuario actual
async function getCurrentUser() {
  try {
    const response = await apiRequest('/auth/me');
    
    if (response.success) {
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));
      return response.data.user;
    }
    
    return null;
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    // Si hay error, limpiar tokens
    logout();
    return null;
  }
}

// Renovar token de acceso
async function refreshToken() {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      return false;
    }

    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refreshToken })
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('accessToken', data.data.accessToken);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error al renovar token:', error);
    return false;
  }
}

// Verificar si el usuario está autenticado
function isAuthenticated() {
  const token = localStorage.getItem('accessToken');
  const user = localStorage.getItem('currentUser');
  return !!(token && user);
}

// Obtener usuario del localStorage
function getStoredUser() {
  const userStr = localStorage.getItem('currentUser');
  if (userStr) {
    try {
      return JSON.parse(userStr);
    } catch (e) {
      return null;
    }
  }
  return null;
}

// Exportar funciones
window.authService = {
  register,
  login,
  logout,
  getCurrentUser,
  refreshToken,
  isAuthenticated,
  getStoredUser
};

