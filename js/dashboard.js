// Función para detectar si debe mostrar versión móvil basado en el ancho de pantalla
function isMobileDevice() {
  // Detectar solo por ancho de pantalla para facilitar pruebas en navegador
  return window.innerWidth <= 768;
}

// Variable para controlar el estado de pantalla completa simulada
let isFullscreenMode = false;

// Función para activar modo pantalla completa simulada
function enterFullscreenMode() {
  const wrapper = document.getElementById('dashboard-fullscreen-wrapper');
  const container = document.getElementById('powerbi-container');
  const btn = document.getElementById('exit-fullscreen-btn');

  if (wrapper && container && btn) {
    wrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9998;
      background: white;
      overflow: hidden;
    `;

    container.style.cssText = `
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    `;

    const iframe = container.querySelector('iframe');
    if (iframe) {
      iframe.style.cssText = `
        width: 100%;
        height: 100vh;
        border: none;
      `;
    }

    btn.style.display = 'flex';
    isFullscreenMode = true;

    // Ocultar el resto del contenido
    document.body.style.overflow = 'hidden';
  }
}

// Función para salir del modo pantalla completa simulada
function exitFullscreenMode() {
  const wrapper = document.getElementById('dashboard-fullscreen-wrapper');
  const container = document.getElementById('powerbi-container');
  const btn = document.getElementById('exit-fullscreen-btn');

  if (wrapper && container && btn) {
    wrapper.style.cssText = '';
    container.style.cssText = '';

    const iframe = container.querySelector('iframe');
    if (iframe) {
      iframe.style.cssText = 'width: 100%; height: 600px;';
    }

    btn.style.display = 'none';
    isFullscreenMode = false;

    // Restaurar scroll del body
    document.body.style.overflow = '';
  }
}

// Cargar el iframe apropiado según el dispositivo
function loadPowerBIDashboard() {
  const container = document.getElementById('powerbi-container');

  if (isMobileDevice()) {
    // Crear wrapper para pantalla completa si no existe
    let wrapper = document.getElementById('dashboard-fullscreen-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'dashboard-fullscreen-wrapper';
      container.parentNode.insertBefore(wrapper, container);
      wrapper.appendChild(container);
    }

    // Iframe para móvil con botón flotante
    container.innerHTML = `
      <iframe
        id="powerbi-iframe-mobile"
        title="Dashboard de Sostenibilidad Social – Turismo Canarias 2025 (móvil)"
        style="width: 100%; height: 600px;"
        src="https://app.powerbi.com/view?r=eyJrIjoiYzJiYjI1YmQtNjY5Yy00NGM3LWE5YWEtZDNhYzBkMDljMjYzIiwidCI6IjlkYWE4ZWNlLWYwYzAtNDcyZS1hMTcyLTM3NjJjN2EzNjM2ZiJ9&pageName=6f8e9434b45de4cc6cd0"
        frameborder="0"
        allowFullScreen="true">
      </iframe>
    `;

    // Crear botón de salir si no existe
    let exitBtn = document.getElementById('exit-fullscreen-btn');
    if (!exitBtn) {
      exitBtn = document.createElement('button');
      exitBtn.id = 'exit-fullscreen-btn';
      exitBtn.innerHTML = '✕';
      exitBtn.onclick = exitFullscreenMode;
      exitBtn.style.cssText = `
        display: none;
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        background-color: rgba(37, 55, 119, 0.9);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        align-items: center;
        justify-content: center;
      `;
      document.body.appendChild(exitBtn);
    }

    // Activar modo pantalla completa automáticamente
    setTimeout(() => {
      enterFullscreenMode();
    }, 500);

  } else {
    // Salir del modo pantalla completa si estaba activo
    if (isFullscreenMode) {
      exitFullscreenMode();
    }

    // Iframe para escritorio
    container.innerHTML = `
      <iframe
        title="Dashboard de Sostenibilidad Social – Turismo Canarias 2025 (v1)"
        width="100%"
        height="800"
        src="https://app.powerbi.com/view?r=eyJrIjoiNThmMzdjMGUtOTI3NC00N2U4LWFmNDYtYTY3YWVhNDhiNzc3IiwidCI6IjlkYWE4ZWNlLWYwYzAtNDcyZS1hMTcyLTM3NjJjN2EzNjM2ZiJ9&embedImagePlaceholder=true&pageName=6f8e9434b45de4cc6cd0"
        frameborder="0"
        allowFullScreen="true"
        class="w-full rounded">
      </iframe>
    `;
  }
}

// Cargar el dashboard cuando la página esté lista
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadPowerBIDashboard);
} else {
  loadPowerBIDashboard();
}

// Recargar si cambia el tamaño de la ventana (de escritorio a móvil o viceversa)
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    loadPowerBIDashboard();
  }, 250);
});
