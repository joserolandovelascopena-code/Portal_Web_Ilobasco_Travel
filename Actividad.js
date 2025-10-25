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

 document.addEventListener("DOMContentLoaded", () => {
  const comentarios = document.querySelector(".socialComentarios");
  const OpenComentarios = document.getElementById("OpenComentarios");

  if (comentarios && OpenComentarios) {
    OpenComentarios.addEventListener("click", () => {
      comentarios.classList.toggle("show"); // alterna entre visible y oculto
    });
  }
});

  
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
  const contraseña = loginForm.elements["contraseña"].value;

  try {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contraseña }),
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
  const contraseña = registroForm.elements["contraseña"].value;

  try {
    const res = await fetch("http://localhost:3000/registrar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, usuario, correo, telefono, contraseña }),
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
