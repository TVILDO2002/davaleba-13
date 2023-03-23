const navLinks = document.getElementById("nav-links");
const navBurger = document.getElementById("nav-burger");
const modal = document.getElementById("modal-wrapper");

function navBarActiveHandler() {
  document.documentElement.scrollTop = 0;
  navBurger.classList.toggle("nav-burger__active");
  navLinks.classList.toggle("nav-links__active");
}


navBurger.addEventListener("click", navBarActiveHandler);

function myFunction(){
    modal.classList.toggle("active");
}


