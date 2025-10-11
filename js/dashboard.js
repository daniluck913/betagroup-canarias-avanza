// Función para detectar si debe mostrar versión móvil basado en el ancho de pantalla
function isMobileDevice() {
  // Detectar solo por ancho de pantalla para facilitar pruebas en navegador
  return window.innerWidth <= 768;
}

// Cargar el iframe apropiado según el dispositivo
function loadPowerBIDashboard() {
  const container = document.getElementById('powerbi-container');

  if (isMobileDevice()) {
    // Iframe para móvil
    container.innerHTML = `
      <iframe
        title="Dashboard de Sostenibilidad Social – Turismo Canarias 2025 (móvil)"
        width="100%"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiYzJiYjI1YmQtNjY5Yy00NGM3LWE5YWEtZDNhYzBkMDljMjYzIiwidCI6IjlkYWE4ZWNlLWYwYzAtNDcyZS1hMTcyLTM3NjJjN2EzNjM2ZiJ9&pageName=6f8e9434b45de4cc6cd0"
        frameborder="0"
        allowFullScreen="true"
        class="w-full rounded">
      </iframe>
    `;
  } else {
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
