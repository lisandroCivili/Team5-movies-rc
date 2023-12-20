import Pelicula from "./classPelicula.js";

//declaro variables
const formularioPelicula = document.querySelector("#registroPelicula");
const nombre = document.querySelector("#nombrepeli"),
  categoria = document.querySelector("#categoria"),
  descripcion = document.querySelector("#descripcion"),
  imagen = document.querySelector("#imagen");
const catalogo = JSON.parse(localStorage.getItem("catalogoKey")) || [];

//funciones
const crearPelicula = (e) => {
  e.preventDefault();
  
  //en el evento submit
  //preventDefault
  //tomo los datos de los inputs (validar)
  if (
    validarCantidadCaracteres(nombre.value, 1, 35) &&
    validarCantidadCaracteres(categoria.value, 2, 20) 
  ) {
    //crear un objeto
    const nuevaPelicula = new Pelicula(
      nombre.value,
      categoria.value,
      descripcion.value,
      imagen.value
    );
    //guardo el objeto en un array
    catalogo.push(nuevaPelicula);
    console.log(catalogo);
    limpiarFormularioPelicula();
    //guardar el array en el localstorage JSON
    guardarEnLocalstorage();
    //dibujar una fila en la tabla
    dibujarFila(nuevaPelicula, catalogo.length);
    
    Swal.fire({
      title: "Pelicula creada",
      text: `La Pelicula ${nuevaPelicula.nombre} fue creada exitosamente`,
      icon: "success"
    });
  } else {
    alert("hay errores en los datos del formulario");
  }
};

const limpiarFormularioPelicula = () => {
  formularioPelicula.reset();
};

const guardarEnLocalstorage = () => {
  localStorage.setItem("catalogoKey", JSON.stringify(catalogo));
};

const dibujarFila = (Pelicula, numeroFila) => {
  const tablaPeliculas = document.getElementById("tablaPelicula");
  tablaPeliculas.innerHTML += `<tr>
  <th scope="row">${numeroFila}</th>
  <td>${Pelicula.nombre}</td>
  <td>${Pelicula.categoria}</td>
  <td>${Pelicula.descripcion}</td>
  <td><div class="checkbox text-center">
  <input type="checkbox" id="cbox${numeroFila}" />
</div></td>
  <td>
    <button class="btn btn-light btn-favorito" onclick="favoritoPelicula('${Pelicula.id}')" id="${Pelicula.id}"><i class="bi bi-star-fill"></i></button>
    <button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
    <button class="btn btn-danger" onclick="borrarPelicula('${Pelicula.id}')"><i class="bi bi-trash-fill"></i></button>
  </td>
</tr>`;
};

const cargaInicial = () => {
  //preguntar si la catalogo tiene elementos
  if (catalogo.length > 0) {
    catalogo.map((itemPelicula, posicionPelicula) =>
      dibujarFila(itemPelicula, posicionPelicula + 1)
    );
  }
};

window.borrarPelicula = (idPelicula) => {
  console.log(idPelicula);
  //buscar la posicion del elemento en el array findIndex
  const posicionPeliculaBuscado = catalogo.findIndex(
    (itemPelicula) => itemPelicula.id === idPelicula
  );
  console.log(posicionPeliculaBuscado);
  //borrar la Pelicula de catalogo usando splice(posicion, cant de elementos a borrar)
  catalogo.splice(posicionPeliculaBuscado, 1);
  //actualizar localstorage
  guardarEnLocalstorage();
  //borrar la fila de la tabla
  const tablaPeliculas = document.getElementById("tablaPelicula");
  const imagenPelicula = document.querySelector(idPelicula);
  tablaPeliculas.innerHTML = "";
  if (imagenPelicula.innerHTML !== "") {
    imagenPelicula.innerHTML = "";
  }
  
  cargaInicial();
};
/**************esta parte estaba vinculada al boton de favorito**********/
window.detallePelicula = (idPelicula) => {
  console.log(window.location);
  window.location.href =
    window.location.origin + "/pages/detallePelicula.html?id=" + idPelicula;
};

const validarCantidadCaracteres = (texto, min, max) => {
  if (texto.length >= min && texto.length <= max) {
    // inputNombre.className = 'form-control is-valid'
    return true;
  } else {
    // inputNombre.className = 'form-control is-valid'
    return false;
  }
};


//resto de la logica
formularioPelicula.addEventListener("submit", crearPelicula);

cargaInicial();


window.favoritoPelicula = (idPelicula) => {
  const botones = document.querySelectorAll('.btn-favorito');
  botones.forEach(boton =>{
    if (boton.id===idPelicula){
      boton.classList.add('selectFavorito');
      const peliculas = JSON.parse(localStorage.getItem('catalogoKey'));
      const encontrada = peliculas.find(pelicula => pelicula.id === idPelicula);
      if (encontrada){
        
        const titulo = document.querySelector('#nombreFavorito');
        const descrip = document.querySelector('#resumenImgDestacada');
        const img = document.querySelector('#imgPeliculaDestacada');
        titulo.textContent = encontrada.nombre;
        descrip.textContent = encontrada.descripcion;
        img.src = `../img/portadas/${encontrada.url}`;

      }

    }else{
      boton.classList.remove('selectFavorito');
    }
  })
}
