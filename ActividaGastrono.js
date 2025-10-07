//sección del menu desplegable
const verMas = document.getElementById("verMas");
const dropdownMenu = document.querySelector(".dropdown-menu");

verMas.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// cerrar el dropdown si se hace clic fuera
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.style.display = "none";
  }
});
//buscador
