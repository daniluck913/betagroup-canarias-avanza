// Header HTML template
function getHeaderHTML() {
  return `
<!-- Header -->
<header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
  <nav class="container mx-auto flex items-center justify-between px-6 py-4">
    <div class="flex items-center gap-6">
      <a href="index.html">
        <img src="https://www.canariasavanza.com/wp-content/uploads/2025/09/logo-canarias-avanza.png" alt="Logo Canarias Avanza" class="h-12" />
      </a>
      <img src="https://images.squarespace-cdn.com/content/v1/5f73982da413e029ee9f4c4f/1605188167499-LBZL39NLIO8EIOALSNQ1/Beta+Group+logo+final+WEB.jpg?format=1500w" alt="Beta Group Logo" class="h-10" />
    </div>
    <ul class="flex gap-6 text-sm font-medium">
      <li><a href="index.html" class="nav-link text-azuloscuro hover:text-azul transition" data-page="index">Inicio</a></li>
      <li><a href="formularios.html" class="nav-link text-azuloscuro hover:text-azul transition" data-page="formularios">Formularios</a></li>
      <li><a href="resultados.html" class="nav-link text-azuloscuro hover:text-azul transition" data-page="resultados">Resultados</a></li>
      <li><a href="index.html#contacto" class="text-azuloscuro hover:text-azul transition">Contacto</a></li>
    </ul>
  </nav>
</header>
  `;
}

// Footer HTML template
function getFooterHTML() {
  return `
<!-- Logos Section -->
<section class="bg-white py-8">
  <div class="container mx-auto px-6 text-center">
    <img src="https://canariasavanza.com/wp-content/uploads/2025/09/GESPROTUR-banner-web-logos.png" alt="Logos colaboradores" class="mx-auto max-w-full h-auto" />
  </div>
</section>

<!-- Footer -->
<footer id="contacto" class="text-white py-12" style="background-color: #0080AA;">
  <div class="container mx-auto px-6">
    <!-- Grid de 4 columnas -->
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <!-- Columna 1: Logo -->
      <div class="flex items-center justify-center">
        <img src="https://canariasavanza.com/wp-content/uploads/2025/09/Recurso-6.png" alt="Logo Recurso 6" class="max-w-full h-auto max-h-24" />
      </div>

      <!-- Columna 2: Navegación -->
      <div class="text-center">
        <ul class="flex flex-col gap-3">
          <li><a href="formularios.html" class="hover:text-amarillo transition">Formularios</a></li>
          <li><a href="resultados.html" class="hover:text-amarillo transition">Resultados</a></li>
        </ul>
      </div>

      <!-- Columna 3: Redes Sociales -->
      <div class="text-center">
        <p class="mb-2">
          <a href="mailto:administracion@gesprotur.com" class="hover:text-amarillo transition">administracion@gesprotur.com</a>
        </p>
        <p class="mb-2">
          <a href="tel:928919218" class="hover:text-amarillo transition">Tlf: 928 919 218</a>
        </p>
        <p class="mb-6 text-sm">C/ León y Castillo, nº 200<br>Edf. Servicios Múltiples III<br>35071 Las Palmas de Gran Canaria</p>

        <!-- Social Media Icons -->
        <div class="flex justify-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=61580238153596" target="_blank" class="text-white hover:text-amarillo transition text-2xl" aria-label="Facebook">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/canariasavanza_/" target="_blank" class="text-white hover:text-amarillo transition text-2xl" aria-label="Instagram">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com/@Canarias_Avanza" target="_blank" class="text-white hover:text-amarillo transition text-2xl" aria-label="YouTube">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      <!-- Columna 4: Logo -->
      <div class="flex items-center justify-center">
        <img src="https://canariasavanza.com/wp-content/uploads/2025/09/Recurso-7.png" alt="Logo Recurso 7" class="max-w-full h-auto max-h-24" />
      </div>
    </div>

    <!-- Legal Links -->
    <div class="border-t border-white border-opacity-30 pt-6 text-center text-sm">
      <div class="mb-4">
        <a href="https://canariasavanza.com/politica-privacidad/" target="_blank" class="hover:text-amarillo transition">Política de privacidad</a> ·
        <a href="https://canariasavanza.com/aviso-legal/" target="_blank" class="hover:text-amarillo transition">Aviso legal</a> ·
        <a href="https://canariasavanza.com/politica-de-cookies-ue/" target="_blank" class="hover:text-amarillo transition">Política de cookies</a>
      </div>
      <p>&copy; 2025 GESPROTUR - Canarias Avanza. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>
  `;
}

// Load header and footer
function loadHeaderFooter() {
  try {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      headerPlaceholder.innerHTML = getHeaderHTML();
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.innerHTML = getFooterHTML();
    }

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.remove('text-azuloscuro');
        link.classList.add('text-azul', 'font-semibold');
      }
    });

    // Initialize smooth scroll after header is loaded
    initSmoothScroll();
  } catch (error) {
    console.error('Error loading header/footer:', error);
  }
}

// Smooth scroll for navigation
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadHeaderFooter);
