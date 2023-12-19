let peliculas = [];
let catDrama = document.getElementById("catDrama");
let catAccion = document.getElementById("catAccion");
let catComedia = document.getElementById("catComedia");
let catCiFi = document.getElementById("catCiFi");
let catThriller = document.getElementById("catThriller");

document.addEventListener("DOMContentLoaded", function () {
    // Obtener películas del localStorage
    peliculas = JSON.parse(localStorage.getItem("catalogoKey")) || [];

    mostrarPelicula(peliculas);
});


export const mostrarPelicula = (peliculas) => {
    // Selecciona el contenedor donde deseas mostrar las películas (puede variar según tu estructura HTML)

    // Iterar sobre las películas y crear elementos HTML para mostrarlas
    peliculas.forEach(function (peliculas) {
        switch (peliculas.categoria) {
            case "Drama":
                const liDrama = document.createElement("li");
                const imgDrama = document.createElement("img");
                imgDrama.src = `img/portadas/${peliculas.url}`;
                imgDrama.classList.add("imgCarrusel");
                liDrama.appendChild(imgDrama);
                catDrama.appendChild(liDrama);

                break;
            case "Acción":
                const liAccion = document.createElement("li");
                const imgAccion = document.createElement("img");
                imgAccion.src = `img/portadas/${peliculas.url}`;
                imgAccion.classList.add("imgCarrusel");
                liAccion.appendChild(imgAccion);
                catAccion.appendChild(liAccion);

                break;
            case "Comedia":
                const liComedia = document.createElement("li");
                const imgComedia = document.createElement("img");
                imgComedia.src = `img/portadas/${peliculas.url}`;
                imgComedia.classList.add("imgCarrusel");
                liComedia.appendChild(imgComedia);
                catComedia.appendChild(liComedia);

                break;
            case "Ciencia Ficción":
                const liFiccion = document.createElement("li");
                const imgFiccion = document.createElement("img");
                imgFiccion.src = `img/portadas/${peliculas.url}`;
                imgFiccion.classList.add("imgCarrusel");
                liFiccion.appendChild(imgFiccion);
                catCiFi.appendChild(liFiccion);

                break;
            case "Thriller":
                const liThriller = document.createElement("li");
                const imgThriller = document.createElement("img");
                imgThriller.src = `img/portadas/${peliculas.url}`;
                imgThriller.classList.add("imgCarrusel");
                liThriller.appendChild(imgThriller);
                catThriller.appendChild(liThriller);

                break;
            default:
                break;
        }
    });
}