const PRODUCTS = [
	{ id: 'A1', name: 'Anillo Sello', category: 'anillos', price: 890, material: 'Plata .925', color: 'Plata', featured: true, image: '/assets/Anillos/anillo sello.png' },
	{ id: 'A2', name: 'Anillo Labradorita', category: 'anillos', price: 950, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Anillos/anillo_piedra.png' },
	//{ id: 'A3', name: 'Anillo Cactus', category: 'anillos', price: 820, material: 'Plata .925', color: 'Plata', featured: true },
	//{ id: 'A4', name: 'Anillo Volcán', category: 'anillos', price: 1100, material: 'Oro laminado', color: 'Dorado', featured: false },
	//{ id: 'A5', name: 'Anillo Agave', category: 'anillos', price: 780, material: 'Plata .925', color: 'Plata', featured: false },
	//{ id: 'B1', name: 'Aretes Cascabel', category: 'aretes', price: 720, material: 'Plata .925', color: 'Plata', featured: false },
	//{ id: 'B2', name: 'Aretes Milpa', category: 'aretes', price: 780, material: 'Oro laminado', color: 'Dorado', featured: true },
	//{ id: 'B3', name: 'Aretes Frida', category: 'aretes', price: 850, material: 'Plata .925', color: 'Plata', featured: false },
	//{ id: 'B4', name: 'Aretes Mariposa', category: 'aretes', price: 920, material: 'Oro laminado', color: 'Dorado', featured: false },
	//{ id: 'B5', name: 'Aretes Nopal', category: 'aretes', price: 680, material: 'Plata .925', color: 'Plata', featured: false },
	//{ id: 'C1', name: 'Collar Nopal', category: 'collares', price: 1250, material: 'Plata .925', color: 'Plata', featured: true },
	//{ id: 'C2', name: 'Collar Xolo', category: 'collares', price: 1420, material: 'Oro laminado', color: 'Dorado', featured: false },
	//{ id: 'C3', name: 'Collar Agave', category: 'collares', price: 1180, material: 'Plata .925', color: 'Plata', featured: false },
	//{ id: 'C4', name: 'Collar Luna', category: 'collares', price: 1350, material: 'Oro laminado', color: 'Dorado', featured: false },
	//{ id: 'C5', name: 'Collar Volcán', category: 'collares', price: 1100, material: 'Plata .925', color: 'Plata', featured: false },
	{ id: 'D1', name: 'Argolla con grabado', category: 'pulseras', price: 640, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Pulseras/argolla_con_grabado.png' },
	{ id: 'D2', name: 'Brazalete de Canasta', category: 'pulseras', price: 690, material: 'Oro laminado', color: 'Dorado', featured: true, image: '/assets/Pulseras/brazalete_canasta.png' },
	{ id: 'D3', name: 'Brazalete con Turquesa', category: 'pulseras', price: 720, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Pulseras/brazalete_con_turquesa.png' },
	{ id: 'D4', name: 'Pulsera Box', category: 'pulseras', price: 580, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Pulseras/pulsera box.png' },
	{ id: 'D5', name: 'Pulsera Cordon', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Pulseras/pulsera cordon.png' },
	{ id: 'D6', name: 'Pulsera Cubana', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Pulseras/pulsera cubana.png' },
	{ id: 'D5', name: 'Pulsera Cuerda', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Pulseras/Pulsera cuerda.png' },
	{ id: 'D5', name: 'Pulsera Gucci', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Pulseras/pulsera gucci.png' },
	{ id: 'E1', name: 'Set Amatista', category: 'conjuntos', price: 450, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Conjuntos/conjunto_amatista.png' },
	{ id: 'E2', name: 'Set Conchas', category: 'conjuntos', price: 520, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Conjuntos/conjunto_conchas.png' },
	{ id: 'E3', name: 'Set Ojo de Tigre', category: 'conjuntos', price: 380, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Conjuntos/conjunto_ojo_de_tigre.png' },
	{ id: 'E4', name: 'Set Labradorita', category: 'conjuntos', price: 480, material: 'Oro laminado', color: 'Dorado', featured: false, image: '/assets/Conjuntos/conjunto_ labradorita.png' },
	{ id: 'E5', name: 'Set Turquesa', category: 'conjuntos', price: 480, material: 'Plata .925', color: 'Plata', featured: false, image: '/assets/Conjuntos/conjunto_turquesa.png' },
	//{ id: 'F1', name: 'Piedra Obsidiana', category: 'piedras', price: 320, material: 'Obsidiana natural', color: 'Negro', featured: false },
	//{ id: 'F2', name: 'Piedra Cuarzo', category: 'piedras', price: 280, material: 'Cuarzo rosa', color: 'Rosa', featured: false },
	//{ id: 'F3', name: 'Piedra Ágata', category: 'piedras', price: 350, material: 'Ágata mexicana', color: 'Multicolor', featured: false },
	//{ id: 'F4', name: 'Piedra Turquesa', category: 'piedras', price: 420, material: 'Turquesa natural', color: 'Azul', featured: false },
];

// Cart functionality
class Cart {
	constructor() {
		this.items = this.loadFromStorage();
		this.updateCartUI();
	}

	loadFromStorage() {
		try {
			return JSON.parse(localStorage.getItem('cart') || '[]');
		} catch {
			return [];
		}
	}

	saveToStorage() {
		localStorage.setItem('cart', JSON.stringify(this.items));
	}

	addItem(productId, quantity = 1) {
		const product = PRODUCTS.find(p => p.id === productId);
		if (!product) return;

		const existingItem = this.items.find(item => item.id === productId);
		if (existingItem) {
			existingItem.quantity += quantity;
		} else {
			this.items.push({ ...product, quantity });
		}
		this.saveToStorage();
		this.updateCartUI();
	}

	removeItem(productId) {
		this.items = this.items.filter(item => item.id !== productId);
		this.saveToStorage();
		this.updateCartUI();
	}

	updateQuantity(productId, quantity) {
		const item = this.items.find(item => item.id === productId);
		if (item) {
			if (quantity <= 0) {
				this.removeItem(productId);
			} else {
				item.quantity = quantity;
				this.saveToStorage();
				this.updateCartUI();
			}
		}
	}

	getTotal() {
		return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
	}

	getItemCount() {
		return this.items.reduce((total, item) => total + item.quantity, 0);
	}

	updateCartUI() {
		const cartToggle = document.querySelector('.cart-toggle');
		const cartItems = document.getElementById('cartItems');
		const cartTotal = document.getElementById('cartTotal');
		const cartEmpty = document.querySelector('.cart-empty');
		const cartCheckout = document.querySelector('.cart-checkout');

		if (cartToggle) {
			cartToggle.setAttribute('data-count', this.getItemCount());
		}

		if (cartItems && cartTotal && cartEmpty && cartCheckout) {
			if (this.items.length === 0) {
				cartItems.style.display = 'none';
				cartEmpty.style.display = 'block';
				cartCheckout.disabled = true;
			} else {
				cartItems.style.display = 'block';
				cartEmpty.style.display = 'none';
				cartCheckout.disabled = false;
				cartItems.innerHTML = this.items.map(item => `
					<div class="cart-item">
						<div class="cart-item-media">${createPlaceholderSVG(item.id)}</div>
						<div class="cart-item-info">
							<div class="cart-item-name">${item.name}</div>
							<div class="cart-item-price">${formatCurrency(item.price)}</div>
							<div class="cart-item-controls">
								<div class="cart-item-qty">
									<button onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
									<span>${item.quantity}</span>
									<button onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
								</div>
								<button class="cart-item-remove" onclick="cart.removeItem('${item.id}')">Eliminar</button>
							</div>
						</div>
					</div>
				`).join('');
				cartTotal.textContent = formatCurrency(this.getTotal());
			}
		}
	}
}

// Initialize cart
const cart = new Cart();

function formatCurrency(mx) {
	return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(mx);
}

function createPlaceholderSVG(id) {
	const palette = ['#e8d79c', '#2a868f', '#2e694f', '#e7509d'];
	const a = palette[id.charCodeAt(0) % palette.length];
	const b = palette[id.charCodeAt(1) % palette.length];
	return `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" role="img" aria-label="Imagen del producto">
			<defs>
				<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stop-color="${a}"/>
					<stop offset="1" stop-color="${b}"/>
				</linearGradient>
			</defs>
			<rect width="400" height="400" fill="url(#g)"/>
			<circle cx="300" cy="120" r="18" fill="#e63f46"/>
			<path d="M40 300 L100 220 L160 300 L220 200 L300 300" fill="none" stroke="#2e694f" stroke-width="10" stroke-linecap="round"/>
		</svg>
	`;
}

function renderProducts(list, containerId = 'productGrid') {
	const container = document.getElementById(containerId);
	if (!container) return;

	container.innerHTML = '';
	if (!list.length) {
		container.innerHTML = '<p>No encontramos resultados. Intenta otra búsqueda o filtro.</p>';
		return;
	}
	const frag = document.createDocumentFragment();
	for (const p of list) {
		const card = document.createElement('article');
		card.className = 'card';
		card.innerHTML = `
			<div class="card-media">
				${p.image ? `<img src="${p.image}" alt="${p.name}">` : createPlaceholderSVG(p.id)}
			</div>
			<div class="card-body">
				<h3>${p.name}</h3>
				<div class="price">${formatCurrency(p.price)}</div>
				<div class="meta"><span class="tag">${p.category}</span> · ${p.material}</div>
				<button class="btn btn-outline" onclick="cart.addItem('${p.id}')">Agregar al carrito</button>
			</div>
		`;
		frag.appendChild(card);
	}
	container.appendChild(frag);
}

function renderFeaturedCarousel() {
	const featured = PRODUCTS.filter(p => p.featured);
	const container = document.getElementById('featuredCarousel');
	if (!container) return;

	// Duplicate items for seamless loop
	const duplicatedItems = [...featured, ...featured];

	container.innerHTML = '';
	const frag = document.createDocumentFragment();

	for (const p of duplicatedItems) {
		const item = document.createElement('article');
		item.className = 'featured-item';
		item.innerHTML = `
			<div class="card-media">${createPlaceholderSVG(p.id)}</div>
			<div class="card-body">
				<h3>${p.name}</h3>
				<div class="price">${formatCurrency(p.price)}</div>
				<div class="meta"><span class="tag">${p.category}</span> · ${p.material}</div>
				<button class="btn btn-outline" onclick="cart.addItem('${p.id}')">Agregar al carrito</button>
			</div>
		`;
		frag.appendChild(item);
	}
	container.appendChild(frag);
}

function setupCategories() {
	const categoryCards = document.querySelectorAll('.category-card');
	categoryCards.forEach(card => {
		card.addEventListener('click', () => {
			const category = card.dataset.category;
			// Scroll to products section
			const productsSection = document.getElementById('productos');
			if (productsSection) {
				productsSection.scrollIntoView({ behavior: 'smooth' });
			}
			// Filter products
			setTimeout(() => {
				const chips = document.querySelectorAll('.chip');
				chips.forEach(chip => chip.classList.remove('is-active'));
				const targetChip = document.querySelector(`[data-filter="${category}"]`);
				if (targetChip) {
					targetChip.classList.add('is-active');
					// Trigger filter
					const event = new Event('click');
					targetChip.dispatchEvent(event);
				}
			}, 500);
		});
	});
}

function setupFilters() {
	const chips = Array.from(document.querySelectorAll('.chip'));
	const searchInput = document.getElementById('searchInput');
	if (!chips.length || !searchInput) return;

	let active = 'all';

	function apply() {
		const term = (searchInput.value || '').toLowerCase().trim();
		const filtered = PRODUCTS.filter(p => {
			const byCat = active === 'all' ? true : p.category === active;
			const byTerm = term ? (p.name.toLowerCase().includes(term) || p.material.toLowerCase().includes(term)) : true;
			return byCat && byTerm;
		});
		renderProducts(filtered);
	}

	chips.forEach(c => {
		c.addEventListener('click', () => {
			chips.forEach(x => x.classList.remove('is-active'));
			c.classList.add('is-active');
			active = c.dataset.filter;
			apply();
		});
	});
	searchInput.addEventListener('input', apply);
	apply();
}

function setupNav() {
	const btn = document.querySelector('.nav-toggle');
	const list = document.querySelector('.nav-list');
	if (!btn || !list) return;

	btn.addEventListener('click', () => {
		const open = list.classList.toggle('is-open');
		btn.setAttribute('aria-expanded', String(open));
	});
	list.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
		list.classList.remove('is-open');
		btn.setAttribute('aria-expanded', 'false');
	}));
}

function setupCart() {
	const cartToggle = document.querySelector('.cart-toggle');
	const cartModal = document.getElementById('cartModal');
	const cartClose = document.querySelector('.cart-close');
	const cartOverlay = document.querySelector('.cart-overlay');

	if (!cartToggle || !cartModal) return;

	cartToggle.addEventListener('click', () => {
		cartModal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	});

	const closeCart = () => {
		cartModal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	};

	if (cartClose) cartClose.addEventListener('click', closeCart);
	if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

	// Close on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && cartModal.getAttribute('aria-hidden') === 'false') {
			closeCart();
		}
	});
}

// Auth Modal Functions
window.openLoginModal = function () {
	const modal = document.getElementById('loginModal');
	if (modal) {
		modal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	}
};

// Abrir modal de registro
window.openRegisterModal = function () {
	document.getElementById('registerModal').setAttribute('aria-hidden', 'false');
	document.body.style.overflow = 'hidden'; // Opcional: evita scroll de fondo
};

function closeAuthModal() {
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	if (loginModal) loginModal.setAttribute('aria-hidden', 'true');
	if (registerModal) registerModal.setAttribute('aria-hidden', 'true');
	document.body.style.overflow = '';
}

// Cerrar modal de registro
document.querySelectorAll('.auth-close').forEach(btn => {
	btn.addEventListener('click', () => {
		document.getElementById('registerModal').setAttribute('aria-hidden', 'true');
		document.body.style.overflow = ''; // Restaura scroll
		document.getElementById('loginModal').setAttribute('aria-hidden', 'true');
	});
});

// Cerrar al hacer click en el overlay
document.querySelectorAll('.auth-overlay').forEach(overlay => {
	overlay.addEventListener('click', () => {
		document.getElementById('registerModal').setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
		document.getElementById('loginModal').setAttribute('aria-hidden', 'true');
	});
});

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

// Setup Auth Modals
function setupAuthModals() {
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');

	if (loginModal) {
		const closeBtn = loginModal.querySelector('.auth-close');
		const overlay = loginModal.querySelector('.auth-overlay');
		if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
		if (overlay) overlay.addEventListener('click', closeAuthModal);
	}

	if (registerModal) {
		const closeBtn = registerModal.querySelector('.auth-close');
		const overlay = registerModal.querySelector('.auth-overlay');
		if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
		if (overlay) overlay.addEventListener('click', closeAuthModal);
	}

	// Close on escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			closeAuthModal();
		}
	});
}

function setupYear() {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function setupHashNavigation() {
	if (location.hash) {
		const target = document.querySelector(location.hash);
		if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
	}
	document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', (e) => {
			const id = link.getAttribute('href');
			if (!id || id === '#') return;
			const el = document.querySelector(id);
			if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.pushState(null, '', id); }
		});
	});
}

function main() {
	setupNav();
	setupCart();
	setupAuthModals();
	setupYear();
	setupHashNavigation();

	// Check if we're on the shop page
	if (document.getElementById('productGrid')) {
		setupFilters();
		setupCategories();
	}

	// Check if we're on the home page
	if (document.getElementById('featuredCarousel')) {
		renderFeaturedCarousel();
	}
}

document.addEventListener('DOMContentLoaded', main);

// Blog Modal Functions
window.openBlogModal = function (id) {
	const modal = document.getElementById(id);
	if (modal) {
		modal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	}
};
window.closeBlogModal = function (id) {
	const modal = document.getElementById(id);
	if (modal) {
		modal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	}
};
