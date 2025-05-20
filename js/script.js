// Inyectar header y footer
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("partials/header.html", "header-placeholder");
  includeHTML("partials/footer.html", "footer-placeholder");

  // Scroll reveal para el texto
  const textoImpacto = document.getElementById('textoImpacto');

  window.addEventListener('scroll', () => {
    const rect = textoImpacto.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      textoImpacto.classList.add('visible');
    }
  });
});

function includeHTML(file, elementId) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
      return res.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error(err));
}
