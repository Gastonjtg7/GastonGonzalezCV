document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('current-date');
  if (el) {
    const d = new Date();
    el.textContent = d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }
});
