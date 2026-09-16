(() => {
  const closeMenu = (nav, button) => {
    nav.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
  };

  document.querySelectorAll('.header-nav').forEach((nav, index) => {
    const header = nav.closest('header, .main-header');
    if (!header) return;

    const navigationId = nav.id || `main-navigation-${index + 1}`;
    nav.id = navigationId;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'menu-toggle';
    button.setAttribute('aria-controls', navigationId);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation menu');
    button.textContent = '☰';

    button.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu(nav, button));
    });

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu(nav, button);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) closeMenu(nav, button);
    });

    header.append(button);
  });
})();