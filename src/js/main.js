document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.querySelector(".burger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const burgerBtn = document.querySelector(".burger-btn");
    const primaryItems = document.querySelectorAll(".nav__primary-item");
    const navMobile = document.querySelector(".nav__primary-items");

  
    const handleNav = () => {
      closeIcon.classList.toggle("active");
      burgerIcon.classList.toggle("active");
      navMobile.classList.toggle("nav__primary-items--active");
    };
    function toggleSubMenu(item) {
        const subMenu = item.firstElementChild;
    
        primaryItems.forEach(primaryItem => {
            if (primaryItem !== item) {
                const otherSubMenu = primaryItem.firstElementChild;
                otherSubMenu.classList.remove("active");
    
            }
        });
        subMenu.classList.toggle("active");
    }
    
    
    primaryItems.forEach(item => {
        item.addEventListener("click", () => {
            toggleSubMenu(item);
        });
    });
  
    burgerBtn.addEventListener("click", handleNav);

  });
