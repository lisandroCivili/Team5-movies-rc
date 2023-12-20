const pelicula = {
    nombre : "Passangers",
    puntaje : "7,8/10",
    director: "Stanley kubrick",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque dolorem excepturi ab qui architecto porro harum deserunt soluta eaque quae velit aut hic dolorum natus magni, necessitatibus, placeat quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dignissimos eius beatae praesentium culpa, consequuntur doloribus nihil ex qui animi dolorum corporis voluptate, veritatis debitis, aut labore reprehenderit aliquid. Itaque."
}

const title = document.querySelector(".infoTitle");
const score = document.querySelector(".infoScore");
const paragraph = document.querySelector(".infoParagraph");

function reproducir (pelicula) {
    title.innerHTML = pelicula.nombre;
    score.innerHTML = pelicula.puntaje + " - " + pelicula.director + ".";
    paragraph.innerHTML = pelicula.descripcion;
}

reproducir (pelicula)