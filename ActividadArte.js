//sección del menu desplegable
const verMas = document.getElementById("verMas");
const dropdownMenu = document.querySelector(".dropdown-menu");

verMas.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdownMenu.style.display = "none";
  }
});

//buscador

function buscar() {
  let input = document.getElementById("buscador").value.toLowerCase();
  let secciones = document.querySelectorAll(".seccion");

  secciones.forEach(seccion => {
    let texto = seccion.innerText.toLowerCase();
    if (texto.includes(input)) {
      seccion.style.display = "block";
    } else {
      seccion.style.display = "none"; 
    }
  });
}

// Carrusel
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slidesImg");
  const slideItems = document.querySelectorAll(".Img-slide");
  const prevBtn = document.querySelector(".previo");
  const nextBtn = document.querySelector(".siguiente");
  const dots = document.querySelectorAll(".dohtV1");

  let index = 0;
  const totalSlides = slideItems.length;

  function mostrarSlide(i) {
    if (i >= totalSlides) index = 0;
    if (i < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index++;
    mostrarSlide(index);
  });

  prevBtn.addEventListener("click", () => {
    index--;
    mostrarSlide(index);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      mostrarSlide(index);
    });
  });
});



//Iniciar seción
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

const modal = document.getElementById("loginModal");
const openBtn = document.getElementById("openLogin");
const closeBtn = document.getElementById("closeModal");
const ocultarV = document.querySelector(".Vmodal-registro");


openBtn.addEventListener("click", () => {
  modal.classList.add("show");
  abrirModal();
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  cerrarModal();
});

ocultarV.addEventListener("click", () => {
  modal.classList.remove("show");
  cerrarModal();
});

function abrirModal() {
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  document.body.style.overflow = "auto";
}


document.addEventListener('DOMContentLoaded', () => {
  const VmodalHelp = document.getElementById("VmodalHelp");
  const Vinf_help = document.querySelector(".modal-sesión"); 

  if (!VmodalHelp || !Vinf_help) {
    console.warn('No se encontró VmodalHelp o .modal-sesión en el DOM');
    return;
  }

  VmodalHelp.addEventListener('click', () => {
    Vinf_help.style.display = (Vinf_help.style.display === "block") ? "none" : "block";
  });
  VmodalHelp.addEventListener('click', () => {
  Vinf_help.classList.toggle("show");
});
});

//down chveron
function Chevron_down_up() {
  const icon = document.getElementById("chevron");
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");
  VmodalHelp.addEventListener('click', () => {
  Vinf_help.classList.toggle("show");
  
});
}

const form = modal.querySelector("form");
const loader = document.getElementById("loader");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // evitar recarga
  loader.style.display = "block"; // mostrar loader

  // Simular proceso de envío
  setTimeout(() => {
    loader.style.display = "none";
    alert("Has hiniciado sesión"); // reemplaza con lógica real
    modal.classList.remove("show");
    cerrarModal();
  }, 2000);
});


//Registro
document.querySelector(".Vmodal-registro").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

const modal2 = document.getElementById("RegistroModal");
const openBtn2 = document.querySelector(".Vmodal-registro");
const closeBtn2 = document.getElementById("closeModal2");


openBtn2.addEventListener("click", () => {
  modal2.classList.add("show");
  abrirModal2();
});

closeBtn2.addEventListener("click", () => {
  modal2.classList.remove("show");
  cerrarModal2();
});


function abrirModal2() {
  document.body.style.overflow = "hidden";
}

function cerrarModal2() {
  document.body.style.overflow = "auto";
}

const form2 = modal2.querySelector("form");
const loader2 = document.getElementById("loader2");

form2.addEventListener("submit", (e) => {
  e.preventDefault(); // evitar recarga
  loader2.style.display = "block"; // mostrar loader

  // Simular proceso de envío
  setTimeout(() => {
    loader2.style.display = "none";
    alert("Cuenta creada"); // reemplaza con lógica real
    modal2.classList.remove("show");
    cerrarModal2();
  }, 2000);
});


