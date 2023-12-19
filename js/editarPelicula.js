let peliculas = []

const obtenerPelicula = () => {
    peliculas = JSON.parse(localStorage.getItem("catalogoKey")) || []
    return peliculas
}

<div
class="modal"
id="modalContacto"
tabindex="-1"
aria-labelledby="modalContactoLabel"
aria-hidden="true"
>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Registro de Pelicula</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <form id="registroPelicula">
        <div class="mb-3">
          <label for="nombrepeli" class="form-label">Nombre</label>
          <input
            type="text"
            id="nombrepeli"
            class="form-control"
            placeholder="Ej: The Matrix"
          />
        </div>
        <div class="mb-3">
          <label for="categoria" class="form-label">Categoria</label>
          <input
            type="text"
            id="categoria"
            class="form-control"
            placeholder="Ej: Ciencia Ficción"
          />
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <input
            type="text"
            id="descripcion"
            class="form-control"
            placeholder="Descripción breve"
          />
        </div>
        <div class="mb-3">
          <label for="imagen" class="form-label">Agregar imagen</label>
          <input
            type="text"
            id="imagen"
            class="form-control"
            placeholder="Nombre de la iamgen con extension"
          />
        </div>

        <button class="btn btn-primary" type="submit">Agregar</button>
      </form>
    </div>
  </div>
</div>
</div>