// Exportamos de: index.js
function importarPelicula(peliculaHTML) {
      const view = peliculaHTML.querySelectorAll(".btn-sm.btn-outline-secondary");
      view.forEach((ver) => {
      ver.addEventListener("click", mostrarDatos);
  });
}

function mostrarDatos(event) {
      const contenido = event.target.parentElement.parentElement.parentElement;
      const title = contenido.querySelector(".titulo").textContent;

      const pelicula = peliculas.find( pelicula => pelicula.titulo.toLowerCase() === title.toLowerCase()); // Buscamos la película en el arreglo
      const { img, titulo, sinopsis } = pelicula; // Obtenemos los datos de la película encontrada

      Swal.fire({
      title: titulo.toUpperCase(),
      html: `<h2 class="sinopsis">Sinopsis:</h2>
             <p class="sinopsis">${sinopsis}</p>`,
      imageUrl: img,
      imageWidth: 450,
      imageHeight: 250,
      confirmButtonText: "Cerrar",
      customClass: 'ventanaEmergente'
      });
}
