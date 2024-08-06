window.addEventListener('load', () => {

  const menu = document.querySelector("#nav-menu");
  let menuWidth = menu.offsetWidth;
  const navbar = document.querySelector('#banner');
  let navbarHeight = navbar.offsetHeight;
  
  // Resize safety
  window.addEventListener('resize', () => {
    menuWidth = menu.offsetWidth;
    navbarHeight = navbar.offsetHeight;
  });
  
  // Set menu initial position
  let menuVisible = false;
  const menuToggle = document.querySelector("#mobile-menu-toggle");
  
  const setMenuPos = () => {
    menu.style.right = menuVisible ? `0` : `-${menuWidth}px`;
    menu.style.top = `${navbarHeight}px`;;
  };
  
  const icon = document.querySelector("#mobile-menu-icon");

  menuToggle.addEventListener('click', () => {
    menuVisible = !menuVisible;
    setMenuPos();
    
    icon.classList.toggle("menu-button-clicked");

    icon.src = icon.src.endsWith('img/menu-closed.svg') 
        ? 'img/menu-open.svg' 
        : 'img/menu-closed.svg';
  });

  setMenuPos(); // On page load
});

    
    