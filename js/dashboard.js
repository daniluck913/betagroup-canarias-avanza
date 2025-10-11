// Función para detectar si debe mostrar versión móvil
function isMobileDevice() {
  // Detectar por user agent para dispositivos reales
  const userAgent = navigator.userAgent;
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

  // También verificar el ancho de pantalla
  const isMobileWidth = window.innerWidth <= 768;

  // Detectar por touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const isMobile = mobileRegex.test(userAgent.toLowerCase()) || (isMobileWidth && isTouchDevice);

  console.log('Detección móvil:', {
    userAgent: userAgent,
    isMobileUA: mobileRegex.test(userAgent.toLowerCase()),
    isMobileWidth: isMobileWidth,
    isTouchDevice: isTouchDevice,
    resultado: isMobile
  });

  return isMobile;
}

// Variable para controlar el estado de pantalla completa simulada
let isFullscreenMode = false;

// Función para activar modo pantalla completa simulada
function enterFullscreenMode() {
  console.log('Intentando activar pantalla completa...');
  const wrapper = document.getElementById('dashboard-fullscreen-wrapper');
  const container = document.getElementById('powerbi-container');
  const btn = document.getElementById('exit-fullscreen-btn');

  console.log('Elementos encontrados:', {
    wrapper: !!wrapper,
    container: !!container,
    btn: !!btn
  });

  if (wrapper && container && btn) {
    wrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9998;
      background: white;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      padding: 0;
      margin: 0;
    `;

    container.style.cssText = `
      width: 100%;
      height: 100%;
      padding: 0 !important;
      margin: 0 !important;
      box-sizing: border-box;
    `;

    const iframe = container.querySelector('iframe');
    if (iframe) {
      // Calcular altura disponible (viewport menos espacio para el botón)
      const viewportHeight = window.innerHeight;
      iframe.style.cssText = `
        width: 100%;
        height: ${viewportHeight}px;
        min-height: 100vh;
        border: none;
        touch-action: manipulation;
        overflow: auto;
        padding: 0;
        margin: 0;
        display: block;
      `;
      console.log('Iframe ajustado a altura:', viewportHeight + 'px');
    }

    btn.style.display = 'flex';
    isFullscreenMode = true;

    // Ocultar el resto del contenido
    document.body.style.overflow = 'hidden';

    console.log('Pantalla completa activada correctamente');
  } else {
    console.error('No se pudieron encontrar todos los elementos necesarios');
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
  console.log('Cargando dashboard...');
  const container = document.getElementById('powerbi-container');

  if (!container) {
    console.error('No se encontró el contenedor powerbi-container');
    return;
  }

  if (isMobileDevice()) {
    console.log('Cargando versión móvil...');

    // Crear wrapper para pantalla completa si no existe
    let wrapper = document.getElementById('dashboard-fullscreen-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.id = 'dashboard-fullscreen-wrapper';
      container.parentNode.insertBefore(wrapper, container);
      wrapper.appendChild(container);
      console.log('Wrapper creado');
    }

    // Iframe para móvil con botón flotante
    container.innerHTML = `
      <iframe
        id="powerbi-iframe-mobile"
        title="Dashboard de Sostenibilidad Social – Turismo Canarias 2025 (móvil)"
        style="width: 100%; height: 600px; border: none; touch-action: manipulation; padding: 0; margin: 0; display: block;"
        src="https://app.powerbi.com/view?r=eyJrIjoiYzJiYjI1YmQtNjY5Yy00NGM3LWE5YWEtZDNhYzBkMDljMjYzIiwidCI6IjlkYWE4ZWNlLWYwYzAtNDcyZS1hMTcyLTM3NjJjN2EzNjM2ZiJ9&pageName=6f8e9434b45de4cc6cd0&navContentPaneEnabled=true&filterPaneEnabled=true"
        frameborder="0"
        allowfullscreen
        allow="autoplay; fullscreen; geolocation">
      </iframe>
    `;
    console.log('Iframe móvil cargado');

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
      console.log('Botón de salir creado');
    }

    // Activar modo pantalla completa automáticamente
    setTimeout(() => {
      console.log('Activando pantalla completa en 500ms...');
      enterFullscreenMode();
    }, 500);

  } else {
    console.log('Cargando versión escritorio...');

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
        style="width: 100%; border: none; padding: 0; margin: 0; display: block;">
      </iframe>
    `;
    console.log('Iframe escritorio cargado');
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
