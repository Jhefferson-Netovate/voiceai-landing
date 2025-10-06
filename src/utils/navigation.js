/**
 * Navega a una sección específica de la página con scroll suave
 * @param {string} sectionId - El ID de la sección (sin el #)
 * @param {object} navigate - Función navigate de react-router-dom
 */
export const scrollToSection = (sectionId, navigate = null) => {
  // Si estamos en otra página, primero navega a home
  if (window.location.pathname !== '/' && navigate) {
    navigate('/');
    // Espera a que la página cargue antes de hacer scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Altura del header fijo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  } else {
    // Si ya estamos en home, solo hace scroll
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura del header fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};

/**
 * Maneja clicks en enlaces hash (#caracteristicas, #precios, etc.)
 * @param {Event} e - Evento del click
 * @param {string} href - El href completo (ej: "/#caracteristicas")
 * @param {object} navigate - Función navigate de react-router-dom
 */
export const handleHashNavigation = (e, href, navigate = null) => {
  // Si el href contiene un hash
  if (href.includes('#')) {
    e.preventDefault();
    const sectionId = href.split('#')[1];
    scrollToSection(sectionId, navigate);
  }
};
