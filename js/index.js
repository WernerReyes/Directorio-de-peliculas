// VARIABLES
const contenedorCajas = document.querySelector(".row.row-cols-1");
const busqueda = document.querySelector(".form-control.buscar");
const borrarFiltros = document.querySelector(".btn.btn-danger");
const formulario = document.querySelector("#form");


const genero = document.querySelectorAll("#home-collapse li");
const clasificacionEdad = document.querySelectorAll("#dashboard-collapse li");
const duracionMax = document.querySelector("#orders-collapse .max");
const duracionMin = document.querySelector("#orders-collapse .min");
const puntaje = document.querySelectorAll(".clasificacion2 input");


// OBJETOS A BUSCAR
const datosBuscar = {
    titulo: "",
    genero: "",
    clasificacionEdad: "",
    duracionMax: "",
    duracionMin: "",
    puntaje: "",
}


// EVENTOS 
document.addEventListener("DOMContentLoaded", () => {
    mostrarPeliculas(peliculas) // Mostramos peliculas
    
    // Obtenemos los valores
    obtenerValores(genero, 'genero');
    obtenerValores(clasificacionEdad, 'clasificacionEdad')

    // Obtenemos el valor de input
    obtenerValoresInput(duracionMax, 'duracionMax');
    obtenerValoresInput(duracionMin, 'duracionMin');
    obtenerValoresInput(busqueda, 'titulo');
    
    // Obtenemos el puntaje
    obtenerValoresPuntaje(puntaje, 'puntaje');

    // Borrarmos todos los filtros
    borrarFiltros.addEventListener("click", () => {
        datosBuscar.titulo = "";
        datosBuscar.genero = "";
        datosBuscar.clasificacionEdad = "";
        datosBuscar.duracionMax = "";
        datosBuscar.duracionMin = "";
        datosBuscar.puntaje = "";
        duracionMax.value = "";
        duracionMin.value = "";
        formulario.reset();

        mostrarPeliculas(peliculas); 
    })
})


// <-- FUNCIONES PARA OBTENER LOS VALORES  -->
function obtenerValores(valorObtenido, propiedad) {
    valorObtenido.forEach( li => {
        li.addEventListener("click", () => {
            let valor = li.querySelector("a").textContent;
            
            datosBuscar[propiedad] = valor.toLowerCase();
            
            filtrarPeliculas(); 
        })
    })
}


function obtenerValoresInput(valorObtenido, propiedad) {
    valorObtenido.addEventListener("input", () => {
        let valor = valorObtenido.value;

        datosBuscar[propiedad] = valor;

        filtrarPeliculas(); 
    })
}

function obtenerValoresPuntaje(valorObtenido, propiedad) {
     valorObtenido.forEach (puntaje => {
        puntaje.addEventListener("click", () =>  {
            let valor = puntaje.value;

            datosBuscar[propiedad] = Number(valor);
    
            filtrarPeliculas();

        })
     })
}
// <-- FIN DE FUNCIONES PARA OBTENER LOS VALORES  -->


// <-- FUNCIONES PARA M0STRAR LAS PELICULAS  -->
function mostrarPeliculas (peliculas) {
    limpiarHTML();

  peliculas.forEach ( pelicula => {

    const { img, titulo, genero, clasificacion, duracion, puntaje } = pelicula;
    const peliculaHTML = document.createElement("DIV");
    peliculaHTML.classList.add("col");

    // Insertamos el contenido en el HTML
    peliculaHTML.innerHTML = `
        <div class="card shadow-sm">
            <img class="img" src="${img}"  alt="">
            <div class="card-body">
                <h2 class="titulo">${titulo}</h2>
                <p class="genero">Género: ${genero}</p>
                <p class="clasificacion">Clasificación de edad: ${clasificacion}</p>
                <p class="stars" value="${puntaje}">
                    ${validarPuntaje(puntaje)} 
                </p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            </div>
                 <small class="text-muted">${duracion} minutos</small>
            </div>
            </div>
        </div>
    `
    // Funcion de: ventasEmg.js
    importarPelicula(peliculaHTML); // Importamos la pelicula HTML

   // Insertamos en el HTML
   contenedorCajas.appendChild( peliculaHTML )
  })
}

function validarPuntaje(puntaje) {
    let stars = "";
    for (let i = 1; i <= 4; i++) {
      if (puntaje >= i) {
        stars += '<i class="fas fa-star">★</i>';
      } else {
        stars += '<i class="far fa-star2">★</i>';
      }
    }
    return stars;
  }
// <-- FIN DE FUNCIONES PARA M0STRAR LAS PELICULAS  -->


// <-- FUNCIONES PARA FILTRAR LAS PELICULAS -->
function filtrarPeliculas() {
    const resultado = peliculas.filter( filtrarGenero ).filter( filtrarCladificacionEdad ).filter( filtrarMaximo ).
                                filter( filtrarMinimo ).filter( filtrarPuntaje ).filter ( filtrarTitulo )
    

    if( resultado.length ) {
        mostrarPeliculas(resultado);
        return;
    }

    noResultado();

}

function filtrarGenero(pelicula) {
   const generos = pelicula.genero.toLowerCase().split(", ");
   const { genero } = datosBuscar;
   if ( genero ) {
       return generos.includes(genero);
   }

   return pelicula;
}

function filtrarCladificacionEdad(pelicula) {
    const { clasificacionEdad } = datosBuscar;
    if ( clasificacionEdad ) {
        return pelicula.clasificacion.toLowerCase() === clasificacionEdad;
    }
 
    return pelicula;
}

function filtrarMaximo(pelicula) {
    const { duracionMax } = datosBuscar;
    if( duracionMax ) {
        return pelicula.duracion <= Number(duracionMax);
    }

    return pelicula;
}

function filtrarMinimo(pelicula) {
    const { duracionMin } = datosBuscar;
    if( duracionMin ) {
        return pelicula.duracion >= Number(duracionMin);
    }

    return pelicula;
}

function filtrarPuntaje(pelicula) {
    const { puntaje } = datosBuscar;
    if( puntaje ) {
        return pelicula.puntaje === puntaje;
    }

    return pelicula;
}

function filtrarTitulo(pelicula) {
   const { titulo } = datosBuscar;
   const letraBusqueda = titulo.toLowerCase()[0];
   if( titulo ) {
    return pelicula.titulo.toLowerCase().startsWith(letraBusqueda) && 
           pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());
   }

   return pelicula;
}
// <-- FIN DE FUNCIONES PARA FILTRAR LAS PELICULAS -->


// Mostramos un mensaje si no nay resultados
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement("DIV");
    noResultado.classList.add("alert", "alert-danger", "text-center", "mx-auto", "w-75");
    noResultado.textContent = "No Hay Resultado, Intenta con otros términos de búsqueda";

    contenedorCajas.appendChild(noResultado);

}

// Limpiamos el HTML
function limpiarHTML() {
    while(contenedorCajas.firstChild) {
        contenedorCajas.removeChild(contenedorCajas.firstChild);
    }
}
