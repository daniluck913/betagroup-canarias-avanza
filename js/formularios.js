// Formularios page functionality
const formTitles = {
  empresarios: 'Formulario para Empresarios',
  turistas: 'Formulario para Turistas',
  'turistas-en': 'Tourist Form',
  trabajadores: 'Formulario para Trabajadores',
  residentes: 'Formulario para Residentes',
  administraciones: 'Formulario para Administraciones Públicas'
};

function showForm(formType) {
  // Hide all forms
  document.querySelectorAll('.form-container').forEach(form => {
    form.classList.add('hidden');
  });

  // Show wrapper and selected form
  document.getElementById('form-wrapper').classList.remove('hidden');
  const selectedForm = document.getElementById('form-' + formType);
  selectedForm.classList.remove('hidden');

  // Reload iframe to fix display issues when switching between forms
  const iframe = selectedForm.querySelector('iframe');
  if (iframe) {
    const src = iframe.src;
    iframe.src = '';
    setTimeout(() => {
      iframe.src = src;
    }, 10);
  }

  // Scroll to form
  document.getElementById('form-wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideForm() {
  document.getElementById('form-wrapper').classList.add('hidden');
  document.querySelectorAll('.form-container').forEach(form => {
    form.classList.add('hidden');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let isMaximized = false;

function toggleFullscreen() {
  // Get the currently visible iframe
  const visibleForm = document.querySelector('.form-container:not(.hidden)');
  if (!visibleForm) return;

  const iframe = visibleForm.querySelector('iframe');
  if (!iframe) return;

  // Check if device is mobile/iOS
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // For mobile: toggle maximized state with CSS
    if (!isMaximized) {
      iframe.style.position = 'fixed';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
      iframe.style.zIndex = '9999';
      isMaximized = true;

      // Create close button for mobile
      const closeBtn = document.createElement('button');
      closeBtn.id = 'mobile-close-btn';
      closeBtn.innerHTML = '× Cerrar';
      closeBtn.style.position = 'fixed';
      closeBtn.style.top = '10px';
      closeBtn.style.right = '10px';
      closeBtn.style.zIndex = '10000';
      closeBtn.style.backgroundColor = '#253777';
      closeBtn.style.color = 'white';
      closeBtn.style.border = 'none';
      closeBtn.style.padding = '12px 20px';
      closeBtn.style.borderRadius = '8px';
      closeBtn.style.fontSize = '16px';
      closeBtn.style.fontWeight = 'bold';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
      closeBtn.onclick = toggleFullscreen;
      document.body.appendChild(closeBtn);

      updateFullscreenButton();
    } else {
      iframe.style.position = '';
      iframe.style.top = '';
      iframe.style.left = '';
      iframe.style.width = '';
      iframe.style.height = '';
      iframe.style.zIndex = '';
      isMaximized = false;

      // Remove close button
      const closeBtn = document.getElementById('mobile-close-btn');
      if (closeBtn) {
        closeBtn.remove();
      }

      updateFullscreenButton();
    }
  } else {
    // For desktop: use native fullscreen API
    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
}

function updateFullscreenButton() {
  const icon = document.getElementById('fullscreen-icon');
  const text = document.getElementById('fullscreen-text');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile: use maximized state
    if (isMaximized) {
      icon.textContent = '⛶';
      text.textContent = 'Salir Maximizado';
    } else {
      icon.textContent = '⛶';
      text.textContent = 'Maximizar';
    }
  } else {
    // Desktop: use fullscreen state
    if (document.fullscreenElement) {
      icon.textContent = '⛶';
      text.textContent = 'Salir Pantalla Completa';
    } else {
      icon.textContent = '⛶';
      text.textContent = 'Pantalla Completa';
    }
  }
}

// Update button text when fullscreen changes
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('mozfullscreenchange', updateFullscreenButton);
document.addEventListener('msfullscreenchange', updateFullscreenButton);
