const navLinks = document.getElementById("nav-links");
const navBurger = document.getElementById("nav-burger");

function navBarActiveHandler() {
  document.documentElement.scrollTop = 0;
  navBurger.classList.toggle("nav-burger__active");
  navLinks.classList.toggle("nav-links__active");
}

// events
navBurger.addEventListener("click", navBarActiveHandler);