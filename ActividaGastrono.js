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

//Menu de un movil
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeModal = document.querySelector(".closeModal");
  const modalMenu = document.getElementById("modal-menu");

  // Abrir modal
  menuBtn.addEventListener("click", () => {
    modalMenu.classList.add("active");
  });

  // Cerrar modal
  closeModal.addEventListener("click", () => {
    modalMenu.classList.remove("active");
  });
});


//buscador

const data = [
        {
          name: "Artesanías de Ilobasco",
          img: "Imagenes_Proyecto/Artesanias.png",
          url: "file:///C:/Users/MINEDUCYT/Documents/investigaciones/Portal_Web_Turismo/Artesanias-.html",
        },
        {
          name: "Actividades",
          img: "Imagenes_Proyecto/CasaHacienda.jpg",
          url: "gastronomia.html",
        },
        {
          name: "Lugares turísticos",
          img: "Imagenes_Proyecto/Helicondia.png",
          url: "lugares.html",
        },
        {
          name: "Fichas Informativas",
          img: "Imagenes_Proyecto/Tiestos.png",
          url: "hoteles.html",
        },
        {
          name: "Contacto",
          img: "Imagenes_Proyecto/Contacto-Busqueda.jpg",
          url: "eventos.html",
        },
        {
          name: "Comida Local",
          img: "Imagenes_Proyecto/Pupusas-Busqueda.png",
          url: "eventos.html",
        },
      ];

  const searchInput = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("suggestions");
  const SculercerFondo = document.querySelector(".EsculecerSearch")


  searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();

  if (query !== "") {
    SculercerFondo.classList.add("active"); 
  } else {
    SculercerFondo.classList.remove("active"); 
  }

});

// Si el usuario sale del input, quita la clase
SculercerFondo.addEventListener("blur", () => {
  SculercerFondo.classList.remove("active");
});

// Si vuelve a entrar y hay texto, reactiva la clase
SculercerFondo.addEventListener("focus", () => {
  if (SculercerFondo.value.trim() !== "") {
    SculercerFondo.classList.add("active");
  }
});


      searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = "";


        if (query.trim() === "") {
          suggestionsBox.style.display = "none";
          return;
        }

        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
          suggestionsBox.style.display = "none";
          return;
        }

        filtered.forEach((item) => {
          const div = document.createElement("div");
          div.classList.add("suggestion");
          div.innerHTML = `<img src="${item.img}" alt="${item.name}"><span>${item.name}</span>`;

          div.onclick = () => {
            window.location.href = item.url; // lleva al usuario a la página
          };

          suggestionsBox.appendChild(div);
        });

        suggestionsBox.style.display = "block";
      });


/*Buscador Movil */
const BuscadoMovil = document.getElementById("Lupa-Movil"); // Asegúrate que el id coincida
const Ventana_Buscar = document.querySelector(".Contenedor_Lupa")
const ContenedorBuscador = document.querySelector(".search-container");
const CerraBuscar = document.getElementById("Volver_Bsucador")

BuscadoMovil.addEventListener("click", () => {
  ContenedorBuscador.classList.add("active");
});

BuscadoMovil.addEventListener("click", () => {
  Ventana_Buscar.classList.add("active");
});

BuscadoMovil.addEventListener("click", () => {
  Ventana_Buscar.classList.add("active");
});

CerraBuscar.addEventListener("click", () => {
  Ventana_Buscar.classList.remove("active");
});

CerraBuscar.addEventListener("click", () => {
  ContenedorBuscador.classList.remove("active");
});

CerraBuscar.addEventListener("click", () => {
  SculercerFondo.classList.remove("active");
});

//Iniciar seción
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

const modal = document.getElementById("loginModal");
const openBtn = document.querySelectorAll(".openLogin");
const closeBtn = document.getElementById("closeModal");
const ocultarV = document.querySelector(".Vmodal-registro");


openBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    abrirModal();
  });
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

const carrusel = document.querySelector(".Articulos-gastronomicos");
const articulos = document.querySelectorAll(".Articulo");
const btnPrev = document.querySelector(".previo");
const btnNext = document.querySelector(".siguiente");

let index = 0;
const visibles = 4; // Cuántos artículos se ven a la vez
const total = articulos.length;

function mostrarSlide(i) {
  // 🔁 Si retrocede del inicio, pasa al final
  if (i < 0) index = total - visibles;
  // 🔁 Si avanza del final, vuelve al inicio
  else if (i > total - visibles) index = 0;
  else index = i;

  // Desplaza el carrusel
  carrusel.style.transform = `translateX(-${index * (100 / visibles)}%)`;
}

btnPrev.addEventListener("click", () => mostrarSlide(index - 1));
btnNext.addEventListener("click", () => mostrarSlide(index + 1));

