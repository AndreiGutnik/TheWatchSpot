(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuLink1: document.querySelector('[data-menu-close1]'),
    closeMenuLink2: document.querySelector('[data-menu-close2]'),
    closeMenuLink3: document.querySelector('[data-menu-close3]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.forEach((el) => {
    el.addEventListener('click', toggleMenu);
  });

  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink1.addEventListener('click', toggleMenu);
  refs.closeMenuLink2.addEventListener('click', toggleMenu);
  refs.closeMenuLink3.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();
