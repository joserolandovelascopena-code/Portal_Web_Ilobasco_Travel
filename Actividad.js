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
          img: "Imagenes_Proyecto/Figuras\ de\ Barro.jpeg",
          url: "Artesanias-.html",
          
        },
        {
          name: "Actividades",
          img: "Imagenes_Proyecto/CasaHacienda.jpg",
          url: "index.html",
        },
        {
          name: "Lugares turísticos",
          img: "Imagenes_Proyecto/Helicondia.png",
          url: "index.html",
        },
        {
          name: "Fichas Informativas",
          img: "Imagenes_Proyecto/Tiestos.png",
          url: "index.html",
        },
        {
          name: "Contacto",
          img: "Imagenes_Proyecto/Contacto-Busqueda.jpg",
          url: "ContactoIlobascoTRV.html",
        },
        {
          name: "Comida Local",
          img: "Imagenes_Proyecto/Pupusas-Busqueda.png",
          url: "Gastronomía.html",
        
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

//header imagenes

let currentIndex = 0;

const slides = [
  {
    text: "ILOBASCO, TRADICIÓN Y NATURALEZA EN UN SOLO  LUGAR",
    image: "Imagenes_Proyecto/IglesiaSamiguel.png"
  },
  {
    text: "DESCUBRE LA CULTURA Y EL ARTE DE ILOBASCO",
    image: "Imagenes_Proyecto/Artesanias.png"
  },
  {
    text: "SABORES ÚNICOS EN LA GASTRONOMÍA LOCAL",
    image: "Imagenes_Proyecto/Gastronomia.png"
  },
  {
    text: "CONOCE LOS SITIOS TURÍSTICOS MÁS EMLEMÁTICOS",
    image: "Imagenes_Proyecto/Helicondia.png"
  }
];

const dots = document.querySelectorAll(".dot");
const banner = document.querySelector(".baner-one");
const bannerText = document.querySelector(".baner-one h1");

// Función para cambiar al siguiente slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Cambiar imagen de fondo
  banner.style.background = `url(${slides[currentIndex].image}) no-repeat center/cover`;


  bannerText.textContent = slides[currentIndex].text;


  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex % dots.length);
  });
}


setInterval(nextSlide, 6000);


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index - 1; 
    nextSlide();
  });
});

//animación scroll
const elementos = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    }
  });
});

elementos.forEach(el => observer.observe(el));


// Ventanas de Actividades

const ventanaArtice1 = document.getElementById('ventanaArtice1');
const InfArtice1 = document.getElementById('InfArtice1');
const closeVen1 = document.getElementById('closeVen1');

ventanaArtice1.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice1.classList.add("activo");
  document.body.style.overflow = "hidden"; // bloquear scroll de fondo
});

closeVen1.addEventListener("click", () => {
  InfArtice1.classList.remove("activo");
  document.body.style.overflow = ""; // restaurar scroll de fondo
});

InfArtice1.addEventListener("click", (e) => {
  if (e.target === InfArtice1) {
    InfArtice1.classList.remove("activo");
    document.body.style.overflow = "";
  }
});

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

//Comentarios
document.addEventListener("DOMContentLoaded", () => {

  const comentarios = document.querySelector(".socialComentarios");
  const OpenComentarios = document.getElementById("OpenComentarios");
  const clouseComent = document.getElementById("closeComen");

  // Elementos de comentarios
  const btnEnviar = document.getElementById("btnEnviar");
  const boxComentario = document.getElementById("boxComentario");
  const listaComentarios = document.getElementById("listaComentarios");

  // Identificador de la ventana/artículo
  const idVentana = comentarios.dataset.id; // "1", "2", etc.

 
  const usuario = sessionStorage.getItem("usuario") || "Usuario anónimo";


  OpenComentarios.addEventListener("click", () => {
    comentarios.classList.add("show");
    cargarComentarios();
  });

  // Cerrar modal
  clouseComent.addEventListener("click", () => {
    comentarios.classList.remove("show");
  });

  // Cargar comentarios desde el servidor
  async function cargarComentarios() {
    listaComentarios.innerHTML = "";
    try {
      const res = await fetch(`http://localhost:3000/comentarios/${idVentana}`);
      const comentariosServidor = await res.json();

      comentariosServidor.forEach((c) => {
        const div = document.createElement("div");
        div.classList.add("comentario-item");
        div.innerHTML = `
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
          <div class="comentario-contenido">
            <h4>${c.usuario}</h4>
            <small>${new Date(c.fecha).toLocaleString()}</small>
            <p>${c.comentario}</p>
          </div>
        `;
        listaComentarios.appendChild(div);
      });
    } catch (err) {
      console.error("Error al cargar comentarios:", err);
    }
  }

  // Enviar comentario al servidor
  const enviarComentario = async () => {
    const texto = boxComentario.value.trim();
    if (!texto) return;

    try {
      const res = await fetch("http://localhost:3000/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_ventana: idVentana,
          usuario: usuario,
          comentario: texto,
        }),
      });

      const data = await res.json();
      if (data.success) {
        boxComentario.value = "";
        cargarComentarios(); // refresca los comentarios
      } else {
        alert("Error al enviar comentario: " + data.message);
      }
    } catch (err) {
      console.error("Error al enviar comentario:", err);
    }
  };

  // Botón enviar
  btnEnviar.addEventListener("click", enviarComentario);

  // Enter para enviar
  boxComentario.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      enviarComentario();
    }
  });

//ventana 2 
const comentarios2 = document.querySelector(".socialComentarios2");
const OpenComentarios2 = document.getElementById("OpenComentarios2");
const clouseComent2 = document.getElementById("closeComen2");

OpenComentarios2.addEventListener("click", () => {
  comentarios2.classList.add("show");
  cargarComentarios2(); 
});


 
  clouseComent2.addEventListener("click", () => {
    comentarios2.classList.remove("show");
  });

const listaComentarios2 = document.getElementById("listaComentarios2");
const boxComentario2 = document.getElementById("boxComentario2");
const btnEnviar2 = document.getElementById("btnEnviar2");
const idVentana2 = comentarios2.dataset.id;


async function cargarComentarios2() {
  listaComentarios2.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana2}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios2.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 2:", err);
  }
}

const enviarComentario2 = async () => {
  const texto = boxComentario2.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana2,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario2.value = "";
      cargarComentarios2(); // refresca los comentarios de ventana 2
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 2:", err);
  }
};

// Asignar eventos
btnEnviar2.addEventListener("click", enviarComentario2);
boxComentario2.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario2();
  }
});

//ventana 3 
const comentarios3 = document.querySelector(".socialComentarios3");
const OpenComentarios3 = document.getElementById("OpenComentarios3");
const clouseComent3 = document.getElementById("closeComen3");

OpenComentarios3.addEventListener("click", () => {
  comentarios3.classList.add("show");
  cargarComentarios3(); 
});


 
  clouseComent3.addEventListener("click", () => {
    comentarios3.classList.remove("show");
  });

const listaComentarios3 = document.getElementById("listaComentarios3");
const boxComentario3 = document.getElementById("boxComentario3");
const btnEnviar3 = document.getElementById("btnEnviar3");
const idVentana3 = comentarios3.dataset.id;


async function cargarComentarios3() {
  listaComentarios3.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana3}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios3.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 3:", err);
  }
}

const enviarComentario3 = async () => {
  const texto = boxComentario3.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana3,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario3.value = "";
      cargarComentarios3(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 3:", err);
  }
};

// Asignar eventos
btnEnviar3.addEventListener("click", enviarComentario3);
boxComentario3.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario3();
  }
});

//ventana 4 
const comentarios4 = document.querySelector(".socialComentarios4");
const OpenComentarios4 = document.getElementById("OpenComentarios4");
const clouseComent4 = document.getElementById("closeComen4");

OpenComentarios4.addEventListener("click", () => {
  comentarios4.classList.add("show");
  cargarComentarios4(); 
});


 
  clouseComent4.addEventListener("click", () => {
    comentarios4.classList.remove("show");
  });

const listaComentarios4 = document.getElementById("listaComentarios4");
const boxComentario4 = document.getElementById("boxComentario4");
const btnEnviar4 = document.getElementById("btnEnviar4");
const idVentana4 = comentarios4.dataset.id;


async function cargarComentarios4() {
  listaComentarios4.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana4}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios4.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 4:", err);
  }
}

const enviarComentario4 = async () => {
  const texto = boxComentario4.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana4,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario4.value = "";
      cargarComentarios4(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 4:", err);
  }
};

// Asignar eventos
btnEnviar4.addEventListener("click", enviarComentario4);
boxComentario4.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario4();
  }
});

//ventana 5 
const comentarios5 = document.querySelector(".socialComentarios5");
const OpenComentarios5 = document.getElementById("OpenComentarios5");
const clouseComent5 = document.getElementById("closeComen5");

OpenComentarios5.addEventListener("click", () => {
  comentarios5.classList.add("show");
  cargarComentarios5(); 
});


 
  clouseComent5.addEventListener("click", () => {
    comentarios5.classList.remove("show");
  });

const listaComentarios5 = document.getElementById("listaComentarios5");
const boxComentario5 = document.getElementById("boxComentario5");
const btnEnviar5 = document.getElementById("btnEnviar5");
const idVentana5 = comentarios5.dataset.id;


async function cargarComentarios5() {
  listaComentarios5.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana5}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios5.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 5:", err);
  }
}

const enviarComentario5 = async () => {
  const texto = boxComentario5.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana5,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario5.value = "";
      cargarComentarios5(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 5:", err);
  }
};

// Asignar eventos
btnEnviar5.addEventListener("click", enviarComentario5);
boxComentario5.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario5();
  }
});

//ventana 6
const comentarios6 = document.querySelector(".socialComentarios6");
const OpenComentarios6 = document.getElementById("OpenComentarios6");
const clouseComent6 = document.getElementById("closeComen6");

OpenComentarios6.addEventListener("click", () => {
  comentarios6.classList.add("show");
  cargarComentarios6(); 
});


 
  clouseComent6.addEventListener("click", () => {
    comentarios6.classList.remove("show");
  });

const listaComentarios6 = document.getElementById("listaComentarios6");
const boxComentario6 = document.getElementById("boxComentario6");
const btnEnviar6 = document.getElementById("btnEnviar6");
const idVentana6 = comentarios6.dataset.id;


async function cargarComentarios6() {
  listaComentarios6.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana6}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios6.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 6:", err);
  }
}

const enviarComentario6 = async () => {
  const texto = boxComentario6.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana6,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario6.value = "";
      cargarComentarios6(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 6:", err);
  }
};

// Asignar eventos
btnEnviar6.addEventListener("click", enviarComentario6);
boxComentario6.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario6();
  }
});

//ventana 7
const comentarios7 = document.querySelector(".socialComentarios7");
const OpenComentarios7 = document.getElementById("OpenComentarios7");
const clouseComent7 = document.getElementById("closeComen7");

OpenComentarios7.addEventListener("click", () => {
  comentarios7.classList.add("show");
  cargarComentarios7(); 
});


 
  clouseComent7.addEventListener("click", () => {
    comentarios7.classList.remove("show");
  });

const listaComentarios7 = document.getElementById("listaComentarios7");
const boxComentario7 = document.getElementById("boxComentario7");
const btnEnviar7 = document.getElementById("btnEnviar7");
const idVentana7 = comentarios7.dataset.id;


async function cargarComentarios7() {
  listaComentarios7.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana7}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios7.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 7:", err);
  }
}

const enviarComentario7 = async () => {
  const texto = boxComentario7.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana7,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario7.value = "";
      cargarComentarios7(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 7:", err);
  }
};

// Asignar eventos
btnEnviar7.addEventListener("click", enviarComentario7);
boxComentario7.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario7();
  }
});

//ventana 8
const comentarios8 = document.querySelector(".socialComentarios8");
const OpenComentarios8 = document.getElementById("OpenComentarios8");
const clouseComent8 = document.getElementById("closeComen8");

OpenComentarios8.addEventListener("click", () => {
  comentarios8.classList.add("show");
  cargarComentarios8(); 
});


 
  clouseComent8.addEventListener("click", () => {
    comentarios8.classList.remove("show");
  });

const listaComentarios8 = document.getElementById("listaComentarios8");
const boxComentario8 = document.getElementById("boxComentario8");
const btnEnviar8 = document.getElementById("btnEnviar8");
const idVentana8 = comentarios8.dataset.id;


async function cargarComentarios8() {
  listaComentarios8.innerHTML = "";
  try {
    const res = await fetch(`http://localhost:3000/comentarios/${idVentana8}`);
    const comentariosServidor = await res.json();

    comentariosServidor.forEach((c) => {
      const div = document.createElement("div");
      div.classList.add("comentario-item");
      div.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user">
        <div class="comentario-contenido">
          <h4>${c.usuario}</h4>
          <small>${new Date(c.fecha).toLocaleString()}</small>
          <p>${c.comentario}</p>
        </div>
      `;
      listaComentarios8.appendChild(div);
    });
  } catch (err) {
    console.error("Error al cargar comentarios ventana 8:", err);
  }
}

const enviarComentario8 = async () => {
  const texto = boxComentario8.value.trim();
  if (!texto) return;

  try {
    const res = await fetch("http://localhost:3000/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_ventana: idVentana8,
        usuario: usuario,
        comentario: texto,
      }),
    });

    const data = await res.json();
    if (data.success) {
      boxComentario8.value = "";
      cargarComentarios8(); 
    } else {
      alert("Error al enviar comentario: " + data.message);
    }
  } catch (err) {
    console.error("Error al enviar comentario ventana 8:", err);
  }
};

// Asignar eventos
btnEnviar8.addEventListener("click", enviarComentario8);
boxComentario8.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enviarComentario8();
  }
});

});



document.addEventListener("DOMContentLoaded", () => {
  // ==================== VENTANA 1 ====================
  const resenaModal = document.querySelector(".SocialReseña");
  const openResenaBtn = document.getElementById("OpenReseña");
  const closeResenaBtn = document.getElementById("closeReseña");
  const estrellas = document.querySelectorAll(".Estrellas i");
  const enviarBtn = document.getElementById("Enviar-reseña");


  openResenaBtn.addEventListener("click", () => {
    resenaModal.classList.add("show");
    const idSitio = resenaModal.dataset.id;
    cargarResenas(idSitio, "#listaReseñas"); 
  });

  closeResenaBtn.addEventListener("click", () => {
    resenaModal.classList.remove("show");
  });

  estrellas.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn.addEventListener("click", async () => {
    const idSitio = resenaModal.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal.querySelector("#boxTitulo").value.trim();
    const resena = resenaModal.querySelector("#boxreseña").value.trim();
    const calificacion = resenaModal.querySelectorAll(".Estrellas i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas");

        resenaModal.querySelector("#boxTitulo").value = "";
        resenaModal.querySelector("#boxreseña").value = "";
        estrellas.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

  // ==================== VENTANA 2 ====================
  const resenaModal2 = document.querySelector(".SocialReseña2");
  const openResenaBtn2 = document.getElementById("OpenReseña2");
  const closeResenaBtn2 = document.getElementById("closeReseña2");
  const estrellas2 = document.querySelectorAll(".Estrellas2 i");
  const enviarBtn2 = document.getElementById("Enviar-reseña2");

  openResenaBtn2.addEventListener("click", () => {
    resenaModal2.classList.add("show");
    const idSitio = resenaModal2.dataset.id;
    cargarResenas(idSitio, "#listaReseñas2");
  });

  closeResenaBtn2.addEventListener("click", () => {
    resenaModal2.classList.remove("show");
  });

  estrellas2.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas2.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn2.addEventListener("click", async () => {
    const idSitio = resenaModal2.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal2.querySelector("#boxTitulo2").value.trim();
    const resena = resenaModal2.querySelector("#boxreseña2").value.trim();
    const calificacion = resenaModal2.querySelectorAll(".Estrellas2 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas2");

        resenaModal2.querySelector("#boxTitulo2").value = "";
        resenaModal2.querySelector("#boxreseña2").value = "";
        estrellas2.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });


   // ==================== VENTANA 3 ====================
  const resenaModal3 = document.querySelector(".SocialReseña3");
  const openResenaBtn3 = document.getElementById("OpenReseña3");
  const closeResenaBtn3 = document.getElementById("closeReseña3");
  const estrellas3 = document.querySelectorAll(".Estrellas3 i");
  const enviarBtn3 = document.getElementById("Enviar-reseña3");

  openResenaBtn3.addEventListener("click", () => {
    resenaModal3.classList.add("show");
    const idSitio = resenaModal3.dataset.id;
    cargarResenas(idSitio, "#listaReseñas3");
  });

  closeResenaBtn3.addEventListener("click", () => {
    resenaModal3.classList.remove("show");
  });

  estrellas3.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas3.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn3.addEventListener("click", async () => {
    const idSitio = resenaModal3.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal3.querySelector("#boxTitulo3").value.trim();
    const resena = resenaModal3.querySelector("#boxreseña3").value.trim();
    const calificacion = resenaModal3.querySelectorAll(".Estrellas3 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas3");

        resenaModal3.querySelector("#boxTitulo2").value = "";
        resenaModal3.querySelector("#boxreseña2").value = "";
        estrellas3.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }


  });

   // ==================== VENTANA 4 ====================
  const resenaModal4 = document.querySelector(".SocialReseña4");
  const openResenaBtn4 = document.getElementById("OpenReseña4");
  const closeResenaBtn4 = document.getElementById("closeReseña4");
  const estrellas4 = document.querySelectorAll(".Estrellas4 i");
  const enviarBtn4 = document.getElementById("Enviar-reseña4");

  openResenaBtn4.addEventListener("click", () => {
    resenaModal4.classList.add("show");
    const idSitio = resenaModal4.dataset.id;
    cargarResenas(idSitio, "#listaReseñas4");
  });

  closeResenaBtn4.addEventListener("click", () => {
    resenaModal4.classList.remove("show");
  });

  estrellas4.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas4.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn4.addEventListener("click", async () => {
    const idSitio = resenaModal4.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal4.querySelector("#boxTitulo4").value.trim();
    const resena = resenaModal4.querySelector("#boxreseña4").value.trim();
    const calificacion = resenaModal4.querySelectorAll(".Estrellas4 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas4");

        resenaModal4.querySelector("#boxTitulo4").value = "";
        resenaModal4.querySelector("#boxreseña4").value = "";
        estrellas4.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

  // ==================== VENTANA 5 ====================
  const resenaModal5 = document.querySelector(".SocialReseña5");
  const openResenaBtn5 = document.getElementById("OpenReseña5");
  const closeResenaBtn5 = document.getElementById("closeReseña5");
  const estrellas5 = document.querySelectorAll(".Estrellas5 i");
  const enviarBtn5 = document.getElementById("Enviar-reseña5");

  openResenaBtn5.addEventListener("click", () => {
    resenaModal5.classList.add("show");
    const idSitio = resenaModal5.dataset.id;
    cargarResenas(idSitio, "#listaReseñas5");
  });

  closeResenaBtn5.addEventListener("click", () => {
    resenaModal5.classList.remove("show");
  });

  estrellas5.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas5.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn5.addEventListener("click", async () => {
    const idSitio = resenaModal5.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal5.querySelector("#boxTitulo5").value.trim();
    const resena = resenaModal5.querySelector("#boxreseña5").value.trim();
    const calificacion = resenaModal5.querySelectorAll(".Estrellas5 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas5");

        resenaModal5.querySelector("#boxTitulo5").value = "";
        resenaModal5.querySelector("#boxreseña5").value = "";
        estrellas5.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

  // ==================== VENTANA 6 ====================
  const resenaModal6 = document.querySelector(".SocialReseña6");
  const openResenaBtn6 = document.getElementById("OpenReseña6");
  const closeResenaBtn6 = document.getElementById("closeReseña6");
  const estrellas6 = document.querySelectorAll(".Estrellas6 i");
  const enviarBtn6 = document.getElementById("Enviar-reseña6");

  openResenaBtn6.addEventListener("click", () => {
    resenaModal6.classList.add("show");
    const idSitio = resenaModal6.dataset.id;
    cargarResenas(idSitio, "#listaReseñas6");
  });

  closeResenaBtn6.addEventListener("click", () => {
    resenaModal6.classList.remove("show");
  });

  estrellas6.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas6.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn6.addEventListener("click", async () => {
    const idSitio = resenaModal6.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal6.querySelector("#boxTitulo6").value.trim();
    const resena = resenaModal6.querySelector("#boxreseña6").value.trim();
    const calificacion = resenaModal6.querySelectorAll(".Estrellas6 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas6");

        resenaModal6.querySelector("#boxTitulo6").value = "";
        resenaModal6.querySelector("#boxreseña6").value = "";
        estrellas6.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

  // ==================== VENTANA 7 ====================
  const resenaModal7 = document.querySelector(".SocialReseña7");
  const openResenaBtn7 = document.getElementById("OpenReseña7");
  const closeResenaBtn7 = document.getElementById("closeReseña7");
  const estrellas7 = document.querySelectorAll(".Estrellas7 i");
  const enviarBtn7 = document.getElementById("Enviar-reseña7");

  openResenaBtn7.addEventListener("click", () => {
    resenaModal7.classList.add("show");
    const idSitio = resenaModal7.dataset.id;
    cargarResenas(idSitio, "#listaReseñas7");
  });

  closeResenaBtn7.addEventListener("click", () => {
    resenaModal7.classList.remove("show");
  });

  estrellas7.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas7.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn7.addEventListener("click", async () => {
    const idSitio = resenaModal7.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal7.querySelector("#boxTitulo7").value.trim();
    const resena = resenaModal7.querySelector("#boxreseña7").value.trim();
    const calificacion = resenaModal7.querySelectorAll(".Estrellas7 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas7");

        resenaModal7.querySelector("#boxTitulo7").value = "";
        resenaModal7.querySelector("#boxreseña7").value = "";
        estrellas7.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

  // ==================== VENTANA 8 ====================
  const resenaModal8 = document.querySelector(".SocialReseña8");
  const openResenaBtn8 = document.getElementById("OpenReseña8");
  const closeResenaBtn8 = document.getElementById("closeReseña8");
  const estrellas8 = document.querySelectorAll(".Estrellas8 i");
  const enviarBtn8 = document.getElementById("Enviar-reseña8");

  openResenaBtn8.addEventListener("click", () => {
    resenaModal8.classList.add("show");
    const idSitio = resenaModal8.dataset.id;
    cargarResenas(idSitio, "#listaReseñas8");
  });

  closeResenaBtn8.addEventListener("click", () => {
    resenaModal8.classList.remove("show");
  });

  estrellas8.forEach((estrella, index) => {
    estrella.addEventListener("click", () => {
      estrellas8.forEach((e, i) => {
        e.classList.toggle("active", i <= index);
        e.style.color = i <= index ? "#ffc107" : "#e7e6e4";
      });
    });
  });

  enviarBtn8.addEventListener("click", async () => {
    const idSitio = resenaModal8.dataset.id;
    const usuario = "Visitante";
    const titulo = resenaModal8.querySelector("#boxTitulo8").value.trim();
    const resena = resenaModal8.querySelector("#boxreseña8").value.trim();
    const calificacion = resenaModal8.querySelectorAll(".Estrellas8 i.active").length;

    if (!titulo || !resena || calificacion === 0) {
      alert("Por favor, completa todos los campos y selecciona una calificación.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/resenas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_sitio: idSitio, usuario, titulo, resena, calificacion }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Reseña guardada correctamente");
        cargarResenas(idSitio, "#listaReseñas8");

        resenaModal8.querySelector("#boxTitulo8").value = "";
        resenaModal8.querySelector("#boxreseña8").value = "";
        estrellas8.forEach(e => { e.classList.remove("active"); e.style.color = "#e7e6e4"; });
      } else {
        alert("Error al guardar la reseña: " + data.message);
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor");
    }
  });

});

//  FUNCION GENERAL 
async function cargarResenas(idSitio, listaSelector) {
  const lista = document.querySelector(listaSelector);
  lista.innerHTML = "<h3>Reseñas</h3>";

  try {
    const response = await fetch(`http://localhost:3000/resenas/${idSitio}`);
    const resenas = await response.json(); // Devuelve array directamente
    if (!Array.isArray(resenas) || resenas.length === 0) {
      lista.innerHTML += "<p>No hay reseñas todavía.</p>";
      return;
    }

    resenas.forEach(r => {
      const card = document.createElement("div");
      card.className = "card-reseña";
      card.innerHTML = `
        <h5>${r.titulo}</h5>
        <div class="stars">${"★".repeat(r.calificacion)}${"☆".repeat(5 - r.calificacion)}</div>
        <p>${r.resena}</p>
        <small>Por ${r.usuario} — ${new Date(r.fecha).toLocaleDateString()}</small>
      `;
      lista.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar reseñas:", error);
    lista.innerHTML += "<p>Error al cargar reseñas.</p>";
  }
}






//Ventana 2
const ventanaArtice2 = document.getElementById('ventanaArtice2');
const InfArtice2 = document.getElementById('InfArtice2');
const closeVen2 = document.getElementById('closeVen2');

// Abrir ventana
ventanaArtice2.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice2.classList.add("activo");
});

// Cerrar ventana
closeVen2.addEventListener("click", () => {
  InfArtice2.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice2.addEventListener("click", (e) => {
  if (e.target === InfArtice2) {
    InfArtice2.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides2 = document.querySelector(".slidesImg2");
    const slideItems2 = document.querySelectorAll(".Img-slide2");
    const prevBtn2 = document.querySelector(".previo2");
    const nextBtn2 = document.querySelector(".siguiente2");
    const dots2 = document.querySelectorAll(".dohtV2");

    let index = 0;
    const totalSlides2 = slideItems2.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides2) index = 0;
      if (i < 0) index = totalSlides2 - 1;
      slides2.style.transform = `translateX(-${index * 100}%)`;
      dots2.forEach(dot => dot.classList.remove("active"));
      dots2[index].classList.add("active");
    }

    nextBtn2.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn2.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots2.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });

  //Ventana 3
const ventanaArtice3 = document.getElementById('ventanaArtice3');
const InfArtice3 = document.getElementById('InfArtice3');
const closeVen3 = document.getElementById('closeVen3');

// Abrir ventana
ventanaArtice3.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice3.classList.add("activo");
});

// Cerrar ventana
closeVen3.addEventListener("click", () => {
  InfArtice3.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice3.addEventListener("click", (e) => {
  if (e.target === InfArtice3) {
    InfArtice3.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides3 = document.querySelector(".slidesImg3");
    const slideItems3 = document.querySelectorAll(".Img-slide3");
    const prevBtn3 = document.querySelector(".previo3");
    const nextBtn3 = document.querySelector(".siguiente3");
    const dots3 = document.querySelectorAll(".dohtV3");

    let index = 0;
    const totalSlides3 = slideItems3.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides3) index = 0;
      if (i < 0) index = totalSlides3 - 1;
      slides3.style.transform = `translateX(-${index * 100}%)`;
      dots3.forEach(dot => dot.classList.remove("active"));
      dots3[index].classList.add("active");
    }

    nextBtn3.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn3.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots3.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });

  //Ventana 4
const ventanaArtice4 = document.getElementById('ventanaArtice4');
const InfArtice4 = document.getElementById('InfArtice4');
const closeVen4 = document.getElementById('closeVen4');

// Abrir ventana
ventanaArtice4.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice4.classList.add("activo");
});

// Cerrar ventana
closeVen4.addEventListener("click", () => {
  InfArtice4.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice4.addEventListener("click", (e) => {
  if (e.target === InfArtice4) {
    InfArtice4.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides4 = document.querySelector(".slidesImg4");
    const slideItems4 = document.querySelectorAll(".Img-slide4");
    const prevBtn4 = document.querySelector(".previo4");
    const nextBtn4 = document.querySelector(".siguiente4");
    const dots4 = document.querySelectorAll(".dohtV4");

    let index = 0;
    const totalSlides4 = slideItems4.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides4) index = 0;
      if (i < 0) index = totalSlides4 - 1;
      slides4.style.transform = `translateX(-${index * 100}%)`;
      dots4.forEach(dot => dot.classList.remove("active"));
      dots4[index].classList.add("active");
    }

    nextBtn4.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn4.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots4.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });
//Ventana 5
const ventanaArtice5 = document.getElementById('ventanaArtice5');
const InfArtice5 = document.getElementById('InfArtice5');
const closeVen5 = document.getElementById('closeVen5');

// Abrir ventana
ventanaArtice5.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice5.classList.add("activo");
});

// Cerrar ventana
closeVen5.addEventListener("click", () => {
  InfArtice5.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice5.addEventListener("click", (e) => {
  if (e.target === InfArtice5) {
    InfArtice5.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides5 = document.querySelector(".slidesImg5");
    const slideItems5 = document.querySelectorAll(".Img-slide5");
    const prevBtn5 = document.querySelector(".previo5");
    const nextBtn5 = document.querySelector(".siguiente5");
    const dots5 = document.querySelectorAll(".dohtV5");

    let index = 0;
    const totalSlides5 = slideItems5.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides5) index = 0;
      if (i < 0) index = totalSlides5 - 1;
      slides5.style.transform = `translateX(-${index * 100}%)`;
      dots5.forEach(dot => dot.classList.remove("active"));
      dots5[index].classList.add("active");
    }

    nextBtn5.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn5.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots5.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });

//Ventana 6
const ventanaArtice6 = document.getElementById('ventanaArtice6');
const InfArtice6 = document.getElementById('InfArtice6');
const closeVen6 = document.getElementById('closeVen6');

// Abrir ventana
ventanaArtice6.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice6.classList.add("activo");
});

// Cerrar ventana
closeVen6.addEventListener("click", () => {
  InfArtice6.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice6.addEventListener("click", (e) => {
  if (e.target === InfArtice6) {
    InfArtice6.classList.remove("activo");
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const slides6 = document.querySelector(".slidesImg6");
    const slideItems6 = document.querySelectorAll(".Img-slide6");
    const prevBtn6 = document.querySelector(".previo6");
    const nextBtn6 = document.querySelector(".siguiente6");
    const dots6 = document.querySelectorAll(".dohtV6");

    let index = 0;
    const totalSlides6 = slideItems6.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides6) index = 0;
      if (i < 0) index = totalSlides6 - 1;
      slides6.style.transform = `translateX(-${index * 100}%)`;
      dots6.forEach(dot => dot.classList.remove("active"));
      dots6[index].classList.add("active");
    }

    nextBtn6.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn6.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots6.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });

  //Ventana 7
const ventanaArtice7 = document.getElementById('ventanaArtice7');
const InfArtice7 = document.getElementById('InfArtice7');
const closeVen7 = document.getElementById('closeVen7');

// Abrir ventana
ventanaArtice7.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice7.classList.add("activo");
});

// Cerrar ventana
closeVen7.addEventListener("click", () => {
  InfArtice7.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice7.addEventListener("click", (e) => {
  if (e.target === InfArtice7) {
    InfArtice7.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides7 = document.querySelector(".slidesImg7");
    const slideItems7 = document.querySelectorAll(".Img-slide7");
    const prevBtn7 = document.querySelector(".previo7");
    const nextBtn7 = document.querySelector(".siguiente7");
    const dots7 = document.querySelectorAll(".dohtV7");

    let index = 0;
    const totalSlides7 = slideItems7.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides7) index = 0;
      if (i < 0) index = totalSlides7 - 1;
      slides7.style.transform = `translateX(-${index * 100}%)`;
      dots7.forEach(dot => dot.classList.remove("active"));
      dots7[index].classList.add("active");
    }

    nextBtn7.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn7.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots7.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });

  //Ventana 8
const ventanaArtice8 = document.getElementById('ventanaArtice8');
const InfArtice8 = document.getElementById('InfArtice8');
const closeVen8 = document.getElementById('closeVen8');

// Abrir ventana
ventanaArtice8.addEventListener("click", (e) => {
  e.preventDefault();
  InfArtice8.classList.add("activo");
});

// Cerrar ventana
closeVen8.addEventListener("click", () => {
  InfArtice8.classList.remove("activo");
});

// Cerrar al dar clic en el fondo oscuro
InfArtice8.addEventListener("click", (e) => {
  if (e.target === InfArtice8) {
    InfArtice8.classList.remove("activo");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const slides8 = document.querySelector(".slidesImg8");
    const slideItems8 = document.querySelectorAll(".Img-slide8");
    const prevBtn8 = document.querySelector(".previo8");
    const nextBtn8 = document.querySelector(".siguiente8");
    const dots8 = document.querySelectorAll(".dohtV8");

    let index = 0;
    const totalSlides8 = slideItems8.length;

    // Función para mostrar el slide actual
    function mostrarSlide(i) {
      // Si nos pasamos del final, reiniciar
      if (i >= totalSlides8) index = 0;
      if (i < 0) index = totalSlides8 - 1;
      slides8.style.transform = `translateX(-${index * 100}%)`;
      dots8.forEach(dot => dot.classList.remove("active"));
      dots8[index].classList.add("active");
    }

    nextBtn8.addEventListener("click", () => {
      index++;
      mostrarSlide(index);
    });

    prevBtn8.addEventListener("click", () => {
      index--;
      mostrarSlide(index);
    });

    dots8.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
      });
    });

  });




// Megustas de la sección Actividades
const megustaBtn = document.getElementById('Megusta');
megustaBtn.addEventListener('click', () =>{
  megustaBtn.classList.toggle('active');
  const heartIcon = megustaBtn.querySelector('i');
  if(megustaBtn.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn2 = document.getElementById('Megusta2');
megustaBtn2.addEventListener('click', () =>{
  megustaBtn2.classList.toggle('active');
  const heartIcon = megustaBtn2.querySelector('i');
  if(megustaBtn2.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn3 = document.getElementById('Megusta3');
megustaBtn3.addEventListener('click', () =>{
  megustaBtn3.classList.toggle('active');
  const heartIcon = megustaBtn3.querySelector('i');
  if(megustaBtn3.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn4 = document.getElementById('Megusta4');
megustaBtn4.addEventListener('click', () =>{
  megustaBtn4.classList.toggle('active');
  const heartIcon = megustaBtn4.querySelector('i');
  if(megustaBtn4.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn5 = document.getElementById('Megusta5');
megustaBtn5.addEventListener('click', () =>{
  megustaBtn5.classList.toggle('active');
  const heartIcon = megustaBtn5.querySelector('i');
  if(megustaBtn5.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn6 = document.getElementById('Megusta6');
megustaBtn6.addEventListener('click', () =>{
  megustaBtn6.classList.toggle('active');
  const heartIcon = megustaBtn6.querySelector('i');
  if(megustaBtn6.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn7 = document.getElementById('Megusta7');
megustaBtn7.addEventListener('click', () =>{
  megustaBtn7.classList.toggle('active');
  const heartIcon = megustaBtn7.querySelector('i');
  if(megustaBtn7.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const megustaBtn8 = document.getElementById('Megusta8');
megustaBtn8.addEventListener('click', () =>{
  megustaBtn8.classList.toggle('active');
  const heartIcon = megustaBtn8.querySelector('i');
  if(megustaBtn8.classList.contains('active')){
    heartIcon.style.color = '#ff0040;';
  } else{
    heartIcon.style.color = '';
  }
});

const slidesh = document.querySelector('.slidesh');
const dotsh = document.querySelectorAll('.doth');
let index = 0;
let interval; // guardamos el temporizador

function showSlide(i) {
  index = i;
  slidesh.style.transform = `translateX(${-index * 100}%)`;
  dotsh.forEach(doth => doth.classList.remove('active'));
  dotsh[index].classList.add('active');
}

// Botón Anterior
document.querySelector('.prev').addEventListener('click', () => {
  index = (index > 0) ? index - 1 : dotsh.length - 1;
  showSlide(index);
  resetAutoSlide();
});


document.querySelector('.next').addEventListener('click', () => {
  index = (index < dotsh.length - 1) ? index + 1 : 0;
  showSlide(index);
  resetAutoSlide();
});


dotsh.forEach((doth, i) => {
  doth.addEventListener('click', () => {
    showSlide(i);
    resetAutoSlide();
  });
});


function autoSlide() {
  interval = setInterval(() => {
    index = (index < dotsh.length - 1) ? index + 1 : 0;
    showSlide(index);
  }, 4000); 
}


function resetAutoSlide() {
  clearInterval(interval);
  autoSlide();
}


autoSlide();


// ---------- Menú y modales ----------
document.getElementById("enlace_Sesion").addEventListener("click", () => {
  const Btn_sesión = document.getElementById("Iniciar-sesion");
  const  OpenBtn_sesión = document.getElementById("enlace_Sesion");

  OpenBtn_sesión.addEventListener("click", () => {
  Btn_sesión.classList.toggle("show")
});
  
});
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

const modal = document.getElementById("loginModal");
const modal2 = document.getElementById("RegistroModal");

const openLoginBtns = document.querySelectorAll(".openLogin");
const closeLoginBtn = document.getElementById("closeModal");
const ocultarV = document.querySelector(".Vmodal-registro");
const closeRegistroBtn = document.getElementById("closeModal2");
const iniciarSesionBtn = document.getElementById("Iniciar-sesion");

openLoginBtns.forEach(btn => btn.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}));

closeLoginBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

ocultarV.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

openLoginBtns.forEach(btn => btn.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}));

closeRegistroBtn.addEventListener("click", () => {
  modal2.classList.remove("show");
  document.body.style.overflow = "auto";
});

iniciarSesionBtn.addEventListener("click", () => {
  modal2.classList.remove("show");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
});

document.querySelector(".Vmodal-registro").addEventListener("click", () => {
  modal2.classList.add("show");
  document.body.style.overflow = "hidden";
});

// ---------- Help dropdown ----------
document.addEventListener('DOMContentLoaded', () => {
  const VmodalHelp = document.getElementById("VmodalHelp");
  const Vinf_help = document.querySelector(".modal-sesión"); 

  if (VmodalHelp && Vinf_help) {
    VmodalHelp.addEventListener('click', () => {
      Vinf_help.style.display = (Vinf_help.style.display === "block") ? "none" : "block";
      Vinf_help.classList.toggle("show");
      const icon = document.getElementById("chevron");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  }
});
// ---------- Login ----------
const loginForm = modal.querySelector("form");
const loginLoader = document.getElementById("loader");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginLoader.style.display = "block";

  const usuario = loginForm.elements["usuario"]?.value || loginForm.elements["email"]?.value;
  const contrasena = loginForm.elements["contrasena"].value;

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contrasena }), // ✅ corregido
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  } catch (error) {
    console.error(error);
    alert("Error al iniciar sesión");
  } finally {
    loginLoader.style.display = "none";
  }
});

// ---------- Registro ----------
const registroForm = modal2.querySelector("form");
const registroLoader = document.getElementById("loader2");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  registroLoader.style.display = "block";

  const nombre = registroForm.elements["nombre"].value;
  const usuario = registroForm.elements["usuario"].value;
  const correo = registroForm.elements["correo"].value;
  const telefono = registroForm.elements["telefono"].value;
  const contrasena = registroForm.elements["contrasena"].value;

  try {
    const res = await fetch("http://localhost:3000/registrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, usuario, correo, telefono, contrasena }),
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
      modal2.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  } catch (error) {
    console.error(error);
    alert("Error al registrar usuario, intenta de nuevo");
  } finally {
    registroLoader.style.display = "none";
  }
});
