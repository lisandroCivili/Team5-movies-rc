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
                aDrama.classList.add(peliculas.id);
                aDrama.appendChild(imgDrama);
                catDrama.prepend(aDrama);   

                break;
            case "Accion":
                const aAccion = document.createElement("a");
                const imgAccion = document.createElement("img");
                imgAccion.src = `img/portadas/${peliculas.url}`;
                imgAccion.classList.add("imgCarrusel");
                aAccion.classList.add(peliculas.id);
                aAccion.appendChild(imgAccion);
                catAccion.prepend(aAccion);

                break;
            case "Comedia":
                const aComedia = document.createElement("a");
                const imgComedia = document.createElement("img");
                imgComedia.src = `img/portadas/${peliculas.url}`;
                imgComedia.classList.add("imgCarrusel");
                aComedia.classList.add(peliculas.id);
                aComedia.appendChild(imgComedia);
                catComedia.prepend(aComedia);

                break;
            case "Ciencia Ficcion":
                const aFiccion = document.createElement("a");
                const imgFiccion = document.createElement("img");
                imgFiccion.src = `img/portadas/${peliculas.url}`;
                imgFiccion.classList.add("imgCarrusel");
                aFiccion.classList.add(peliculas.id);
                aFiccion.appendChild(imgFiccion);
                catCiFi.prepend(aFiccion);

                break;
            case "Thriller":
                const aThriller = document.createElement("a");
                const imgThriller = document.createElement("img");
                imgThriller.src = `img/portadas/${peliculas.url}`;
                imgThriller.classList.add("imgCarrusel");
                aThriller.classList.add(peliculas.id);
                aThriller.appendChild(imgThriller);
                catThriller.prepend(aThriller);

                break;
            default:
                break;
        }
    });
}