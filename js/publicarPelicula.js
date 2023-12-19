let peliculas = [];
let catDrama = document.getElementById("catDrama");
let catAccion = document.getElementById("catAccion");
let catComedia = document.getElementById("catComedia");
let catCiFi = document.getElementById("catCiFi");
let catThriller = document.getElementById("catThriller");

document.addEventListener("DOMContentLoaded", function () {

    peliculas = JSON.parse(localStorage.getItem("catalogoKey")) || [];

    mostrarPelicula(peliculas);
});

export const mostrarPelicula = (peliculas) => {

    peliculas.forEach(function (peliculas) {
        switch (peliculas.categoria) {
            case "Drama":
                const aDrama = document.createElement("a");
                const imgDrama = document.createElement("img");
                imgDrama.src = `img/portadas/${peliculas.url}`;
                imgDrama.classList.add("imgCarrusel");
                aDrama.appendChild(imgDrama);
                catDrama.appendChild(aDrama);

                break;
            case "Accion":
                const aAccion = document.createElement("a");
                const imgAccion = document.createElement("img");
                imgAccion.src = `img/portadas/${peliculas.url}`;
                imgAccion.classList.add("imgCarrusel");
                aAccion.appendChild(imgAccion);
                catAccion.appendChild(aAccion);

                break;
            case "Comedia":
                const aComedia = document.createElement("a");
                const imgComedia = document.createElement("img");
                imgComedia.src = `img/portadas/${peliculas.url}`;
                imgComedia.classList.add("imgCarrusel");
                aComedia.appendChild(imgComedia);
                catComedia.appendChild(aComedia);

                break;
            case "Ciencia Ficcion":
                const aFiccion = document.createElement("a");
                const imgFiccion = document.createElement("img");
                imgFiccion.src = `img/portadas/${peliculas.url}`;
                imgFiccion.classList.add("imgCarrusel");
                aFiccion.appendChild(imgFiccion);
                catCiFi.appendChild(aFiccion);

                break;
            case "Thriller":
                const aThriller = document.createElement("a");
                const imgThriller = document.createElement("img");
                imgThriller.src = `img/portadas/${peliculas.url}`;
                imgThriller.classList.add("imgCarrusel");
                aThriller.appendChild(imgThriller);
                catThriller.appendChild(aThriller);

                break;
            default:
                break;
        }
    });
}