
const PRODUCTS = [
	{ id: 'A1', name: 'Anillo Sello', category: 'anillos', price: 890, material: 'Plata .925', color: 'Plata', featured: true, image: 'assets/Anillos/anillo sello.png' },
	{ id: 'A2', name: 'Anillo Labradorita', category: 'anillos', price: 950, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Anillos/anillo_piedra.png' },
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
	{ id: 'D1', name: 'Argolla con grabado', category: 'pulseras', price: 640, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Pulseras/argolla_con_grabado.png' },
	{ id: 'D2', name: 'Brazalete de Canasta', category: 'pulseras', price: 690, material: 'Oro laminado', color: 'Dorado', featured: true, image: 'assets/Pulseras/brazalete_canasta.png' },
	{ id: 'D3', name: 'Brazalete con Turquesa', category: 'pulseras', price: 720, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Pulseras/brazalete_con_turquesa.png' },
	{ id: 'D4', name: 'Pulsera Box', category: 'pulseras', price: 580, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Pulseras/pulsera box.png' },
	{ id: 'D5', name: 'Pulsera Cordon', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Pulseras/pulsera cordon.png' },
	{ id: 'D6', name: 'Pulsera Cubana', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Pulseras/pulsera cubana.png' },
	{ id: 'D5', name: 'Pulsera Cuerda', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Pulseras/Pulsera cuerda.png' },
	{ id: 'D5', name: 'Pulsera Gucci', category: 'pulseras', price: 750, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Pulseras/pulsera gucci.png' },
	{ id: 'E1', name: 'Set Amatista', category: 'conjuntos', price: 450, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Conjuntos/conjunto_amatista.png' },
	{ id: 'E2', name: 'Set Conchas', category: 'conjuntos', price: 520, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Conjuntos/conjunto_conchas.png' },
	{ id: 'E3', name: 'Set Ojo de Tigre', category: 'conjuntos', price: 380, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Conjuntos/conjunto_ojo_de_tigre.png' },
	{ id: 'E4', name: 'Set Labradorita', category: 'conjuntos', price: 480, material: 'Oro laminado', color: 'Dorado', featured: false, image: 'assets/Conjuntos/conjunto_ labradorita.png' },
	{ id: 'E5', name: 'Set Turquesa', category: 'conjuntos', price: 480, material: 'Plata .925', color: 'Plata', featured: false, image: 'assets/Conjuntos/conjunto_turquesa.png' },
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


// Ejemplo de renderizado simple para cada producto
function renderProducts(products) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4='">
      </div>
      <div class="product-name">${p.name}</div>
	  <div class="product-row">
      <div class="product-price">${formatCurrency(p.price)}</div>
      <button class="btn-add-to-cart" data-product-id="${p.id}">
	  <span class="icon-default">
    <!-- SVG normal -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-cart-plus" viewBox="0 0 16 16">
      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  </span>
  <span class="icon-hover">
    <!-- SVG hover (relleno, por ejemplo bi-cart-plus-fill) -->
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
      <path d="M6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      <path d="M6 11.5a.5.5 0 0 1 .5-.5H8V9.5a.5.5 0 0 1 1 0V11h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V12H6.5a.5.5 0 0 1-.5-.5z"/>
      <path d="M.5 1a.5.5 0 0 1 .5-.5h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1z"/>
    </svg>
  </span>
</div>
	  </button>
    `;
    // Si quieres que al hacer click en la tarjeta se abra el modal:
    card.addEventListener('click', (e) => {
      // Evita que el botón de agregar al carrito abra el modal
      if (e.target.classList.contains('btn-add-to-cart')) return;
      openProductDetail(p.id);
    });
    // Botón de agregar al carrito
    card.querySelector('.btn-add-to-cart').addEventListener('click', (e) => {
      e.stopPropagation();
      cart.addItem(p.id, 1);
      showAddToCartMessage(p.id, 1);
    });
    grid.appendChild(card);
  });
}

function showProductModal(product) {
  const modal = document.getElementById('productModal');
  const detail = document.getElementById('productDetail');
  detail.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <div>${product.material}</div>
    <div class="price">$${product.price}</div>
    <!-- Más info aquí -->
  `;
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'block';
}

// Cerrar modal - solo si el elemento existe
const productCloseBtn = document.querySelector('.product-close');
if (productCloseBtn) {
  productCloseBtn.onclick = function() {
    const productModal = document.getElementById('productModal');
    if (productModal) {
      productModal.setAttribute('aria-hidden', 'true');
      productModal.style.display = 'none';
    }
  };
}

function renderFeaturedCarousel() {
  const featured = PRODUCTS.filter(p => p.featured);
  const container = document.getElementById('featuredCarousel');
  if (!container) return;

  // Duplica los productos para el loop
  const items = [...featured, ...featured];

  container.innerHTML = '';
  const frag = document.createDocumentFragment();

  for (const p of items) {
    const item = document.createElement('article');
    item.className = 'featured-item';
    item.innerHTML = `
      <div class="card-media">
        ${p.image ? `<img class="card-bg" src="${p.image.replace(/^\//, '')}" alt="${p.name}">` : createPlaceholderSVG(p.id)}
        <div class="card-body">
          <h3>${p.name}</h3>
          <div class="price">${formatCurrency(p.price)}</div>
        </div>
        <button class="btn btn-outline featured-btn" onclick="cart.addItem('${p.id}')">Agregar al carrito</button>
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
	console.log('setupCart called');
	const cartToggle = document.querySelector('.cart-toggle');
	const cartModal = document.getElementById('cartModal');
	const cartClose = document.querySelector('.cart-close');
	const cartOverlay = document.querySelector('.cart-overlay');

	console.log('Cart elements found - Toggle:', !!cartToggle, 'Modal:', !!cartModal);
	if (!cartToggle || !cartModal) {
		console.warn('Cart toggle or modal not found!');
		return;
	}

	cartToggle.addEventListener('click', () => {
		console.log('Cart toggle clicked');
		cartModal.setAttribute('aria-hidden', 'false');
		console.log('Cart modal aria-hidden set to false');
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
	console.log('openLoginModal called');
	const modal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	console.log('Login modal found:', !!modal);
	if (modal) {
		modal.setAttribute('aria-hidden', 'false');
		console.log('Login modal aria-hidden set to false');
		if (registerModal) {
			registerModal.setAttribute('aria-hidden', 'true');
		}
		document.body.style.overflow = 'hidden';
	} else {
		console.error('Login modal not found!');
	}
};

// Abrir modal de registro
window.openRegisterModal = function () {
	console.log('openRegisterModal called');
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	console.log('Register modal found:', !!registerModal);
	if (registerModal) {
		registerModal.setAttribute('aria-hidden', 'false');
		console.log('Register modal aria-hidden set to false');
		if (loginModal) {
			loginModal.setAttribute('aria-hidden', 'true');
		}
		document.body.style.overflow = 'hidden';
	} else {
		console.error('Register modal not found!');
	}
};

function closeAuthModal() {
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	if (loginModal) loginModal.setAttribute('aria-hidden', 'true');
	if (registerModal) registerModal.setAttribute('aria-hidden', 'true');
	document.body.style.overflow = '';
}

// Cambiar entre login y registro desde los enlaces
window.switchToRegister = function() {
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	if (loginModal && registerModal) {
		loginModal.setAttribute('aria-hidden', 'true');
		registerModal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	}
};

window.switchToLogin = function() {
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	if (loginModal && registerModal) {
		registerModal.setAttribute('aria-hidden', 'true');
		loginModal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	}
};

// El cierre de modales se maneja en setupAuthModals()

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
	console.log('setupAuthModals called');
	const loginModal = document.getElementById('loginModal');
	const registerModal = document.getElementById('registerModal');
	console.log('Modals found - Login:', !!loginModal, 'Register:', !!registerModal);

	// Usar event delegation en el contenedor de botones de autenticación
	// Esto funciona incluso si los botones se reemplazan dinámicamente
	const authButtonsContainer = document.querySelector('.auth-buttons');
	console.log('Auth buttons container found:', !!authButtonsContainer);
	if (authButtonsContainer) {
		authButtonsContainer.addEventListener('click', (e) => {
			console.log('Auth button clicked:', e.target);
			const target = e.target.closest('button');
			if (!target) {
				console.log('No button found in click target');
				return;
			}
			console.log('Button found:', target.id, target.textContent);
			
			// Verificar si es el botón de login (por ID, clase, o texto)
			if (target.id === 'btnLogin' || 
			    target.textContent.includes('Iniciar Sesión') ||
			    target.getAttribute('onclick')?.includes('openLoginModal')) {
				e.preventDefault();
				e.stopPropagation();
				console.log('Opening login modal');
				openLoginModal();
			}
			// Verificar si es el botón de registro
			else if (target.id === 'btnRegister' || 
			         target.textContent.includes('Registrarse') ||
			         target.getAttribute('onclick')?.includes('openRegisterModal')) {
				e.preventDefault();
				e.stopPropagation();
				console.log('Opening register modal');
				openRegisterModal();
			}
		});
	}

	// También conectar directamente los botones originales si existen
	const btnLogin = document.getElementById('btnLogin');
	const btnRegister = document.getElementById('btnRegister');
	console.log('Direct buttons found - Login:', !!btnLogin, 'Register:', !!btnRegister);
	
	if (btnLogin) {
		btnLogin.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			console.log('Direct login button clicked');
			openLoginModal();
		});
	}
	
	if (btnRegister) {
		btnRegister.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			console.log('Direct register button clicked');
			openRegisterModal();
		});
	}

	// Conectar formularios
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
			const loginModal = document.getElementById('loginModal');
			const registerModal = document.getElementById('registerModal');
			if (loginModal && loginModal.getAttribute('aria-hidden') === 'false') {
				closeAuthModal();
			}
			if (registerModal && registerModal.getAttribute('aria-hidden') === 'false') {
				closeAuthModal();
			}
		}
	});
	
	// Verificar estado de autenticación DESPUÉS de configurar los listeners
	// Esto asegura que los botones reemplazados también funcionen gracias a event delegation
	checkAuthStatus();
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
	console.log('main() function called');
	setupNav();
	setupCart();
	setupAuthModals();
	setupYear();
	setupHashNavigation();
	console.log('main() function completed');

	// Check if we're on the shop page
	if (document.getElementById('productGrid')) {
		setupFilters();
		setupCategories();
	}

	// Check if we're on the home page - inicializar carrusel de piezas destacadas
	const carouselElement = document.querySelector('.piezas-des-carousel');
	console.log('🔍 Buscando carrusel en la página:', !!carouselElement);
	if (carouselElement) {
		console.log('✅ Carrusel encontrado, llamando setupPiezasDestacadasCarousel()');
		setupPiezasDestacadasCarousel();
	} else {
		console.warn('⚠️ Carrusel no encontrado en la página');
	}
  
  // Setup product modal events
  setupProductModal();
}

function setupProductModal() {
  const modal = document.getElementById('productModal');
  if (!modal) return;

  // Cerrar al hacer click en el overlay
  const overlay = modal.querySelector('.product-overlay');
  if (overlay) {
    overlay.addEventListener('click', closeProductModal);
  }

  // Cerrar al hacer click en el botón de cerrar
  const closeBtn = modal.querySelector('.product-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductModal);
  }

  // Cerrar con la tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeProductModal();
    }
  });
}
// Ejecutar main cuando el DOM esté listo
// Con type="module", el script se ejecuta después de que el DOM esté parseado
// pero antes de que las imágenes y otros recursos estén cargados
console.log('📄 Script main.js cargado, readyState:', document.readyState);

// Función para ejecutar main de forma segura
function executeMain() {
	try {
		console.log('🚀 Ejecutando main()...');
		main();
	} catch (error) {
		console.error('❌ Error al ejecutar main():', error);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		console.log('✅ DOMContentLoaded fired, calling main()');
		executeMain();
	});
} else {
	// DOM ya está listo, ejecutar inmediatamente
	console.log('✅ DOM already ready, calling main() immediately');
	executeMain();
}

// También intentar ejecutar después de un pequeño delay por si acaso
setTimeout(() => {
	if (document.querySelector('.piezas-des-carousel') && typeof setupPiezasDestacadasCarousel === 'function') {
		console.log('🔄 Reintentando inicializar carrusel después de delay...');
		setupPiezasDestacadasCarousel();
	}
}, 100);

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

// Función para inicializar el carrusel de piezas destacadas
function setupPiezasDestacadasCarousel() {
	console.log('🔧 setupPiezasDestacadasCarousel() llamado');
	const carousel = document.querySelector('.piezas-des-carousel');
	console.log('Carrusel encontrado:', !!carousel);
	if (!carousel) {
		console.error('❌ Carrusel no encontrado!');
		return; // Si no existe el carrusel, salir
	}
	
	const slidesContainer = document.querySelector('#featuredCarousel');
	const slides = document.querySelectorAll('.piezas-des-slide');
	const prevBtn = document.querySelector('.piezas-des-arrow-prev');
	const nextBtn = document.querySelector('.piezas-des-arrow-next');
	const dotsContainer = document.querySelector('.piezas-des-dots');
	
	console.log('Elementos encontrados:', {
		slidesContainer: !!slidesContainer,
		slides: slides.length,
		prevBtn: !!prevBtn,
		nextBtn: !!nextBtn,
		dotsContainer: !!dotsContainer
	});
	
	if (!slidesContainer || !slides.length || !prevBtn || !nextBtn || !dotsContainer) {
		console.error('❌ Elementos del carrusel no encontrados:', {
			slidesContainer: !!slidesContainer,
			slides: slides.length,
			prevBtn: !!prevBtn,
			nextBtn: !!nextBtn,
			dotsContainer: !!dotsContainer
		});
		return;
	}
	
	console.log('✅ Todos los elementos encontrados, inicializando carrusel...');
	
	let currentSlide = 0;
	const totalSlides = slides.length;
	let autoSlideInterval;
	
	// Crear puntos de navegación
	dotsContainer.innerHTML = ''; // Limpiar puntos existentes
	for (let i = 0; i < totalSlides; i++) {
		const dot = document.createElement('div');
		dot.classList.add('piezas-des-dot');
		if (i === 0) dot.classList.add('active');
		dot.addEventListener('click', () => goToSlide(i));
		dotsContainer.appendChild(dot);
	}
	
	const dots = document.querySelectorAll('.piezas-des-dot');
	
	// Función para ir a una diapositiva específica
	function goToSlide(slideIndex) {
		currentSlide = slideIndex;
		updateCarousel();
		resetAutoSlide(); // Reiniciar el autoavance cuando se navega manualmente
	}
	
	// Función para actualizar el carrusel
	function updateCarousel() {
		slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
		
		// Actualizar puntos activos
		dots.forEach((dot, index) => {
			dot.classList.toggle('active', index === currentSlide);
		});
	}
	
	// Función para avanzar al siguiente slide
	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
		updateCarousel();
	}
	
	// Función para retroceder al slide anterior
	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
		updateCarousel();
	}
	
	// Función para iniciar el autoavance
	function startAutoSlide() {
		if (autoSlideInterval) clearInterval(autoSlideInterval);
		autoSlideInterval = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
	}
	
	// Función para detener el autoavance
	function stopAutoSlide() {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
			autoSlideInterval = null;
		}
	}
	
	// Función para reiniciar el autoavance
	function resetAutoSlide() {
		stopAutoSlide();
		startAutoSlide();
	}
	
	// Eventos para las flechas
	prevBtn.addEventListener('click', () => {
		prevSlide();
		resetAutoSlide();
	});
	
	nextBtn.addEventListener('click', () => {
		nextSlide();
		resetAutoSlide();
	});
	
	// Pausar autoavance al pasar el mouse
	carousel.addEventListener('mouseenter', stopAutoSlide);
	carousel.addEventListener('mouseleave', startAutoSlide);
	
	// Navegación con teclado (solo cuando el carrusel está visible)
	carousel.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prevSlide();
			resetAutoSlide();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			nextSlide();
			resetAutoSlide();
		}
	});
	
	// Inicializar posición
	updateCarousel();
	
	// Iniciar autoavance al cargar la página
	startAutoSlide();
	
	console.log('✅ Carrusel inicializado correctamente con', totalSlides, 'slides');
}

// Cambiar entre login y registro desde los enlaces (ya definido arriba)

// --- Login con Google ---
window.onload = function() {
  const googleLoginButton = document.getElementById("googleLoginModal");
  const googleRegisterButton = document.getElementById("googleRegisterModal");

  if (googleLoginButton) {
    googleLoginButton.addEventListener("click", () => {
      if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
          client_id: "TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.prompt(); // muestra la ventana emergente
      }
    });
  }
  
  if (googleRegisterButton) {
    googleRegisterButton.addEventListener("click", () => {
      if (typeof google !== 'undefined' && google.accounts) {
        google.accounts.id.initialize({
          client_id: "TU_CLIENT_ID_DE_GOOGLE.apps.googleusercontent.com",
          callback: handleCredentialResponse
        });
        google.accounts.id.prompt(); // muestra la ventana emergente
      }
    });
  }
};

// Manejar la respuesta de Google
function handleCredentialResponse(response) {
  // Decodificar el JWT para obtener datos del usuario
  const data = parseJwt(response.credential);
  console.log("Usuario autenticado con Google:", data);

  alert(`¡Hola, ${data.name}! Has iniciado sesión con Google`);
}

// Decodificador JWT simple
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );
  return JSON.parse(jsonPayload);
}
// Botones de Apple
const appleLoginButton = document.getElementById("appleLoginModal");
const appleRegisterButton = document.getElementById("appleRegisterModal");

if (appleLoginButton) {
  appleLoginButton.addEventListener("click", () => {
    alert("Inicio con Apple disponible próximamente 🍎");
  });
}

if (appleRegisterButton) {
  appleRegisterButton.addEventListener("click", () => {
    alert("Inicio con Apple disponible próximamente 🍎");
  });
}


function openProductDetail(productId) {
  console.log('Abriendo producto:', productId); // Para debug
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) {
    console.error('Producto no encontrado:', productId);
    return;
  }

  const modal = document.getElementById('productModal');
  const detail = document.getElementById('productDetail');

  if (!modal || !detail) {
    console.error('Modal no encontrado en el DOM');
    return;
  }

  detail.innerHTML = `
    <div class="product-detail-container">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNmNWY1ZjUiLz48dGV4dCB4PSIyMDAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4='">
      </div>
      <div class="product-detail-info">
        <h2>${product.name}</h2>
        <div class="product-price">${formatCurrency(product.price)}</div>
        
        <div class="product-meta">
          <div class="meta-item">
            <strong>Material:</strong>
            <span>${product.material}</span>
          </div>
          <div class="meta-item">
            <strong>Color:</strong>
            <span>${product.color}</span>
          </div>
          <div class="meta-item">
            <strong>Categoría:</strong>
            <span>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
          </div>
          <div class="meta-item">
            <strong>SKU:</strong>
            <span>${product.id}</span>
          </div>
        </div>

        <div class="product-options">
          <div class="quantity-selector">
            <label for="productQuantity">Cantidad:</label>
            <div class="qty-controls">
              <button type="button" onclick="decreaseQuantity()">-</button>
              <input type="number" id="productQuantity" value="1" min="1" max="10">
              <button type="button" onclick="increaseQuantity()">+</button>
            </div>
          </div>
        </div>

        <div class="product-features">
          <div class="feature">
            <span class="feature-icon">🚚</span>
            <span>Envío gratis en compras mayores a $879</span>
          </div>
          <div class="feature">
            <span class="feature-icon">🔒</span>
            <span>Pago seguro</span>
          </div>
          <div class="feature">
            <span class="feature-icon">↩️</span>
            <span>Devoluciones en 30 días</span>
          </div>
        </div>

        <div class="product-actions">
          <button class="btn btn-primary btn-full" onclick="addToCartFromDetail('${product.id}')">
            Añadir al carrito
          </button>
          <button class="btn btn-outline btn-full" onclick="addToCartAndCheckout('${product.id}')">
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  `;

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  
  // Guardar el producto actual para usar en las funciones de cantidad
  window.currentProductId = productId;
}


// Funciones auxiliares para controlar la cantidad
function increaseQuantity() {
  const quantityInput = document.getElementById('productQuantity');
  if (!quantityInput) return;
  
  const currentValue = parseInt(quantityInput.value);
  if (currentValue < 10) {
    quantityInput.value = currentValue + 1;
  }
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('productQuantity');
  if (!quantityInput) return;
  
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

// Función para añadir al carrito desde el detalle
function addToCartFromDetail(productId) {
  const quantityInput = document.getElementById('productQuantity');
  if (!quantityInput) return;
  
  const quantity = parseInt(quantityInput.value);
  cart.addItem(productId, quantity);
  closeProductModal();
  
  // Mostrar mensaje de confirmación
  showAddToCartMessage(productId, quantity);
}

// Función para añadir y proceder al checkout
function addToCartAndCheckout(productId) {
  const quantityInput = document.getElementById('productQuantity');
  if (!quantityInput) return;
  
  const quantity = parseInt(quantityInput.value);
  cart.addItem(productId, quantity);
  closeProductModal();
  
  // Abrir el carrito
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

// Mensaje de confirmación al añadir al carrito

function showAddToCartMessage(productId, quantity) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let messageContainer = document.getElementById('addToCartMessage');
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'addToCartMessage';
    messageContainer.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 16px 20px;
      border-radius: 8px;
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      z-index: 10000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      max-width: 300px;
      transition: all 0.3s ease;
    `;
    document.body.appendChild(messageContainer);
  }

  messageContainer.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="color: #28a745; font-size: 1.2rem;">✓</span>
      <div>
        <strong style="display: block; margin-bottom: 4px;">¡Producto añadido!</strong>
        ${quantity}x ${product.name} - ${formatCurrency(product.price * quantity)}
      </div>
    </div>
  `;

  messageContainer.style.display = 'block';
  messageContainer.style.opacity = '1';
  
  setTimeout(() => {
    if (messageContainer.parentNode) {
      messageContainer.style.opacity = '0';
      setTimeout(() => {
        messageContainer.style.display = 'none';
      }, 300);
    }
  }, 3000);
}


document.querySelector('.product-close').addEventListener('click', closeProductModal);
document.querySelector('.product-overlay').addEventListener('click', closeProductModal);

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

